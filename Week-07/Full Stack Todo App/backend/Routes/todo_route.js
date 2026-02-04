import { Router } from "express";
import { allTodos, createTodo, deleteTodo, singleTodo, updateTodo } from "../controllers/todo_controller.js";

export const todoRouter = Router()

todoRouter.post("/", createTodo)
todoRouter.get("/", allTodos)
todoRouter.get("/:id", singleTodo)
todoRouter.put("/:id", updateTodo)
todoRouter.delete("/:id", deleteTodo)
    