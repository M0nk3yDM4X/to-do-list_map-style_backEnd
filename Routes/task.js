// Packages import

const express = require("express");
const router = express.Router();

// Model import

const Task = require("../Models/Task");

// --- CREATE --- \\

router.post("/task/new", async (req, res) => {
  try {
    const newTask = new Task({
      name: req.fields.name,
      done: req.fields.done
    });

    await newTask.save();

    res.json(newTask);
  } catch (e) {
    res.status(400).json({ message: e.message });
  }
});

// --- READ --- \\

router.get("/task/read", async (req, res) => {
  try {
    const readTasks = await Task.find();
    res.json(readTasks);
  } catch (e) {
    console.log(e);
  }
});

// --- UPDATE --- \\

router.post("/task/update/:id", async (req, res) => {
  try {
    const findTaskToUpdate = await Task.findById(req.params.id);
    if (findTaskToUpdate) {
      findTaskToUpdate.done = !findTaskToUpdate.done;
      await findTaskToUpdate.save();
      res.json(findTaskToUpdate);
    }
  } catch (e) {
    console.log(e);
  }
});

// --- DELETE --- \\

router.post("/task/delete/:id", async (req, res) => {
  try {
    const findTaskToDelete = await Task.findById(req.params.id);
    if (findTaskToDelete) {
      await findTaskToDelete.remove();
      res.json({ success: "task deleted" });
    }
  } catch (e) {
    console.log(e);
  }
});

module.exports = router;
