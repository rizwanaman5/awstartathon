var express = require('express');
var router = express.Router();
const db = require('../models')

/* GET home page. */
router.get('/test', function (req, res) {
  res.render('index', { title: 'Express' });
});


router.post('/', (req, res) => {
  // res.send(req.body)
  let arr = Object.getOwnPropertyNames(req.body)
  arr.splice(0, 2)
  let arr2 = new Array(arr.length / 2).fill(1)
  let obj = {}
  
  arr2.map((e, index) => {
    obj[req.body[`roomName-${index}`]] = {
      roomName: req.body[`roomName-${index}`],
      info: req.body[`description-${index}`]
    }
  })
  console.log(obj)

  db.Form.create({ house: obj })
    .then(data => res.send(data))
    .catch(err => res.send(err))
})

module.exports = router;