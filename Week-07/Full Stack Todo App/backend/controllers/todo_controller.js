import { Todo } from "../todo_module.js"
import { CreateSchema,IdSchema } from "../types.js"




export async function createTodo(req, res) {
  const { success, data } = CreateSchema.safeParse(req.body)

  if (!success) {
    return res.status(411).json({
      mssg: "Invalid Inputs"
    })
  }

  const todo = await Todo.create({
    text: data.text
  })

  res.status(200).json({
    mssg: "Todo Created successfully",
    todo
  })
}

// delete Todo 

export async function deleteTodo(req, res) {
  const { success, data } = IdSchema.safeParse(req.params)

  if (!success) {
    return res.status(411).json({
      mssg: "Invalid Inputs"
    })
  }

  await Todo.findByIdAndDelete(data.id)

  res.status(200).json({
    mssg: "Todo Deleted successfully"
  })
}


export async function updateTodo(req, res)  {
  const { success, data } = IdSchema.safeParse(req.params)

  if (!success) {
    return res.status(411).json({
      mssg: "Invalid Inputs"
    })
  }

  const updatedTodo = await Todo.findByIdAndUpdate(
    data.id,
    { completed: true },
    { new: true }
  )

  if (!updatedTodo) {
    return res.status(404).json({
      mssg: "Error todo is not updated"
    })
  }

  res.status(200).json({
    mssg: "Todo Updated successfully",
    updatedTodo
  })
}

export async function singleTodo(req, res) {
  const { success, data } = IdSchema.safeParse(req.params)

  if (!success) {
    return res.status(411).json({
      mssg: "Invalid Inputs"
    })
  }

  const todo = await Todo.findById(data.id)

  res.status(200).json({
    todo
  })
}


export async function allTodos(req, res) {
  const todos = await Todo.find()

  res.status(200).json({
    todos
  })
}