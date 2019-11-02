const mongoose = require('mongoose')
const mongoDbUser = require('../config')

mongoose.connect(`mongodb+srv://${mongoDbUser.userName}:${mongoDbUser.password}@school-voting-db-pafk9.mongodb.net/awstartathon?retryWrites=true&w=majority`,
    { useNewUrlParser: true, useUnifiedTopology: true },
    (err) => {
        if (err) {
            throw err
        } else {
            console.log('succesfully connected to MongoDB')
        }
    })

module.exports.Form = require('./form')