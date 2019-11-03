var express = require('express');
var router = express.Router();
const db = require('../models');
const s3config = require('../s3Config')

const aws = require('aws-sdk');
const multerS3 = require('multer-s3');
const multer = require('multer');
const path = require('path');

/* GET home page. */
router.get('/test', function (req, res) {
  res.render('index', { title: 'Express' });
});

/**
 * ! code for uploading images to s3 !experimental
 */
const s3 = new aws.s3({
  accessKeyId: s3config.Access_key_ID,
  secretAccessKey: s3config.Secret_access_key,
  Bucket: s3config.AWS_BUCKET_NAME
})

/**
 * Single Upload
 */
const profileImgUpload = multer({
  storage: multerS3({
    s3: s3,
    bucket: s3config.AWS_BUCKET_NAME,
    acl: 'public-read',
    key: function (req, file, cb) {
      cb(null, path.basename(file.originalname, path.extname(file.originalname)) + '-' + Date.now() + path.extname(file.originalname))
    }
  }),
  limits: { fileSize: 10000000 },
  fileFilter: function (req, file, cb) {
    checkFileType(file, cb);
  }
}).single('profileImage');

/**
 * * Check File Type
 */
function checkFileType(file, cb) {
  // Allowed ext
  const filetypes = /jpeg|jpg|png/;
  // Check ext
  const extname = filetypes.test(path.extname(file.originalname).toLowerCase());
  // Check mime
  const mimetype = filetypes.test(file.mimetype);
  if (mimetype && extname) {
    return cb(null, true);
  } else {
    cb('Error: Images Only!');
  }
}

// route for uploading image
router.post('/upload', (req, res) => {
  profileImgUpload(req, res, (error) => {
    // console.log( 'requestOkokok', req.file );
    // console.log( 'error', error );
    if (error) {
      console.log('errors', error);
      res.json({ error: error });
    } else {
      // If File not found
      if (req.file === undefined) {
        console.log('Error: No File Selected!');
        res.json('Error: No File Selected');
      } else {
        // If Success
        const imageName = req.file.key;
        const imageLocation = req.file.location;
        // Save the file name into database into profile model
        res.json({
          image: imageName,
          location: imageLocation
        });
      }
    }
  });
});

// router.post('/', (req, res) => {
//   // res.send(req.body)
//   let arr = Object.getOwnPropertyNames(req.body)
//   arr.splice(0, 2)
//   let arr2 = new Array(arr.length / 2).fill(1)
//   let obj = {}

//   arr2.map((e, index) => {
//     obj[req.body[`roomName-${index}`]] = {
//       roomName: req.body[`roomName-${index}`],
//       info: req.body[`description-${index}`]
//     }
//   })
//   console.log(obj)

//   db.Form.create({ house: obj })
//     .then(data => res.send(data))
//     .catch(err => res.send(err))
// })

module.exports = router;