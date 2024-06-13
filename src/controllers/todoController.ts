import todoModel from "../models/todoModel";
import { Request, Response } from 'express'

//http://localhost:4002/todo/post
const postTodo = async (req: Request, res: Response) => {
    try {
        const data = await todoModel.create(req.body)
        // console.log(data)
        return res.status(200).send({ data: data, success: "200", message: "Data added successfully" })

    } catch (err) {
        console.log("Error", err)
        return res.status(400).send({ data: null, success: "400", message: "Data not added" })
    }
}

//http://localhost:4002/todo/get
const getTodo = async (req: Request, res: Response) => {
    try {
        const data = await todoModel.find()
        return res.status(200).send({ data: data, success: "200", message: "Data fetched successfully" })
    } catch (err) {
        console.log("Error", err)
        return res.status(400).send({ data: null, success: "400", message: "Data not fetched" })
    }
}

// http://localhost:4002/todo/get-by-id/?id=666ad087efdfdeb7267f590c
const getTodoById = async (req: Request, res: Response) => {
    try {
        const data = await todoModel.findById(req.query.id)
        return res.status(200).send({ data: data, success: "200", message: "Data fetched successfully" })
    } catch (err) {
        console.log("Error", err)
        return res.status(400).send({ data: null, success: "400", message: "Data not fetched" })
    }
}

//http://localhost:4002/todo/update/?id=666ad087efdfdeb7267f590c
const updateTodo = async (req: Request, res: Response) => {
    try {
        // console.log(req.query, req.body)
        const data = await todoModel.findByIdAndUpdate(req.query.id, req.body)
        return res.status(200).send({ data: data, success: "200", message: "Data updated successfully" })
    } catch (err) {
        console.log("Error", err)
        return res.status(400).send({ data: null, success: "400", message: "Data not updated" })
    }
}

//http://localhost:4002/todo/delete/?id=666ad06fefdfdeb7267f5908
const deleteTodo = async (req: Request, res: Response) => {
    try {
        const data = await todoModel.findByIdAndDelete(req.query.id)
        return res.status(200).send({ data: data, success: "200", message: "Data Deleted successfully" })
    } catch (err) {
        console.log("Error", err)
        return res.status(400).send({ data: null, success: "400", message: "Data not deleted" })
    }
}

//http://localhost:4002/todo/get-by-filter/?status=Completed
const filterTodo = async (req: Request, res: Response) => {
    try {
        const { status } = req.query;
        const data = await todoModel.find({ status: status })
        return res.status(200).send({ data: data, success: "200", message: "Data fetched successfully" })
    } catch (err) {
        console.log("Error", err)
        return res.status(400).send({ data: null, success: "400", message: "Data not fetched" })

    }
}

export { postTodo, getTodo, getTodoById, updateTodo, deleteTodo, filterTodo }