const mongoose = require('mongoose')

const formSchema = new mongoose.Schema({
    house : {
        type: Object,
        required: true
    }
})

const Form = mongoose.model('Form', formSchema)
module.exports = Form