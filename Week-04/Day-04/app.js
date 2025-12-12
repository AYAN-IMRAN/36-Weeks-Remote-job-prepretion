const express = require('express')
const { todoModel } = require('./userModel')
const { default: mongoose } = require('mongoose')

const app = express()

app.use(express.json())

async function connectToDB() {
    const connection = await mongoose.connect("mongodb://localhost:27017/myfistTodoApp")

    if(connectToDB){
        console.log("Database Connected Succesfully");
        
    }

    
}
connectToDB()


// important msg 
// Schema = docoment hota hai Database main 
// model = collection hota hai Database main 

// create todo 
app.post("/create",async (req,res) =>{
const {text} = req.body
if(!text) {
    res.json({
        mssg:"All Fields are required"
    })
}

const newTodo = await todoModel.create({
    text,
    completed:false
})

if(newTodo){
    res.status(200).json({
        mssg:"Todo Created succelfully",
        newTodo
    })
}
})

// update Todo 
app.put("/update/:id",async (req, res)=>{
    const  todoId = req.params.id

    const updateTodo = await todoModel.findByIdAndUpdate(todoId,{
        completed:true
    },{new:true})
    if(updateTodo){
        res.status(200).json({
            mssg:"Todo Updated Succesfully",
            updateTodo
        })
    }
})
// Delete Todo 
app.delete("/delete/:id", async (req,res)=>{
const todoId = req.params.id
await todoModel.findByIdAndDelete(todoId)
res.status(200).json({
    mssg:"Todo Deleted Succesfully"
})


})
// get All todos 
app.get("/todos",async (req, res)=>{
    const todos = await todoModel.find()
    res.json({
        todos
    })
})
// single todo get 
app.get("/todo/:id",async (req ,res) =>{
    const todoId = req.params.id

    const singleTodo = await todoModel.findById(todoId)

    if(singleTodo){
        res.status(200).json({
            singleTodo
        })
    }
})



app.listen(3000)