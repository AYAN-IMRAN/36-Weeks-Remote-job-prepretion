import express from "express"
import { connecToDb } from "./db.js"
import cors from "cors"
import { CreateSchema, IdSchema } from "./types.js"
import { Todo } from "./todo_module.js"
import { todoRouter } from "./Routes/todo_route.js"


const app = express()

app.use(express.json())
app.use(cors())

connecToDb()

// Test route


app.use("/api/todos", todoRouter)


app.listen(3000, () => {
  console.log("APP IS RUNNING ON 3000")
})
