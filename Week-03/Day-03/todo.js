const express = require("express")
const z = require('zod')
const app = express()

const port = 3000
app.use(express.json())

let ALL_TODOS = [{
    id: 234,
    text: "Coding",
    completed: false
}]

const todoSchema = z.object({
    text:z.string().min(1 , "Todo text cannot be empty")
})


// Todo Create 

app.post('/todo', (req, res) => {
    let response = todoSchema.safeParse(req.body)
    console.log(response)

    if (!response.success) {
       return res.status(400).json(
            {
                text: "Todo Text is Required"
            }
        )
    }
    let newTodo = {
        id: Date.now(),
        text: response.data.text,
        completed: false
    }

    ALL_TODOS.push(newTodo)

    res.status(200).json({
        mssg: "Todo Create Successfully",
        todos: ALL_TODOS
    })
})

// All Todos Get 
app.get("/todos", (req, res) => {
    res.status(200).json({
        todos: ALL_TODOS
    })
})


// Single Todo get 
app.get("/todo/:id", (req, res) => {
    const todoId = req.params.id
    console.log("📦 Requested Todo ID:", todoId);

    if (!todoId) {
        return res.status(400).json({
            msg: "⚠️ Todo ID is required",
        });
    }

    ALL_TODOS.forEach((singleTodo) => {
        if (todoId == singleTodo.id) {
            res.status(200).json({
                msg: "✅ Todo found successfully",
                todo: singleTodo,
            });
        }
    })


})

// Update todo completed 
app.put('/todo/:id', (req, res) => {
    let todoId = req.params.id

    if (!todoId) {
        res.status(400).json(
            {
                text: "Todo ID is Required"
            }
        )
    }

    const todo = ALL_TODOS.find(singleTodo => singleTodo.id == todoId)

    if (!todo) {
        return res.status(404).json({
            msg: "❌ Todo not found"
        });
    }

    todo.completed = true

    res.status(200).json({
        mssg:"✅ Todo marked as completed",
        updateTodo:todo
    })


})


// Todo Delete 
app.delete('/todo/:id', (req, res) => {
    const todoId = req.params.id

    if (!todoId) {
        res.status(400).json(
            {
                text: "Todo ID is Required"
            }
        )
    }



    ALL_TODOS = ALL_TODOS.filter((singleTodo) => {
        return singleTodo.id != todoId
    })

    res.status(200).json({
    msg: "✅ Todo deleted successfully",
    remainingTodos: ALL_TODOS
  });
})

app.listen(port, () => {
    console.log(`Server Running on Port : ${port}`);

})
