import express from "express";
import Todo from "../models/Todo.js";

const router = express.Router();

// Get all todos
router.get("/", async (req, res, next) => {
    try {
        const todos = await Todo.find();
        res.json(todos);
    } catch (err) {
        next(err);
    }
});

// Add a new todo
router.post("/", async (req, res, next) => {
    try {
        if (!req.body.text) {
            return res.status(400).json({ error: "Text is required" });
        }
        const newTodo = new Todo({ text: req.body.text });
        const savedTodo = await newTodo.save();
        res.status(201).json(savedTodo);
    } catch (err) {
        next(err);
    }
});

// Update todo status
router.put("/:id", async (req, res, next) => {
    try {
        const updatedTodo = await Todo.findByIdAndUpdate(
            req.params.id,
            { completed: req.body.completed },
            { new: true, runValidators: true }
        );
        if (!updatedTodo) {
            return res.status(404).json({ error: "Todo not found" });
        }
        res.json(updatedTodo);
    } catch (err) {
        next(err);
    }
});

// Delete a todo
router.delete("/:id", async (req, res, next) => {
    try {
        const deletedTodo = await Todo.findByIdAndDelete(req.params.id);
        if (!deletedTodo) {
            return res.status(404).json({ error: "Todo not found" });
        }
        res.json({ message: "Todo deleted successfully" });
    } catch (err) {
        next(err);
    }
});

export default router;