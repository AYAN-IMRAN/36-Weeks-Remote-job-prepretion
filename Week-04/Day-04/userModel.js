const { text } = require('express')
const mongoose = require('mongoose')

const todoSchema = new mongoose.Schema({
    text:String,
    completed:Boolean,
})

const todoModel = mongoose.model("todo",todoSchema)

module.exports = {
    todoModel
}