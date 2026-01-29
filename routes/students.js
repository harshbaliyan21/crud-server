const express = require("express");
const router = express.Router();

// Demo data
let students = [
  { id: 1, name: "Alice" },
  { id: 2, name: "Bob" },
  { id: 3, name: "Charlie" }
];

// READ ALL
router.get("/", (req, res) => {
  res.send(students);
});

// READ ONE
router.get("/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const student = students.find(s => s.id === id);

  if (!student) return res.send("Student not found");
  res.send(student);
});

// CREATE
router.post("/", (req, res) => {
  const newStudent = {
    id: students.length + 1,
    name: req.body.name
  };

  students.push(newStudent);
  res.send("Student added successfully");
});

// UPDATE
router.put("/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const student = students.find(s => s.id === id);

  if (!student) return res.send("Student not found");

  student.name = req.body.name;
  res.send("Student updated successfully");
});

// DELETE
router.delete("/:id", (req, res) => {
  const id = parseInt(req.params.id);
  students = students.filter(s => s.id !== id);

  res.send("Student deleted successfully");
});

module.exports = router;
