const express = require("express");
const app = express();
app.use(express.json());


const studentRoutes = require("./routes/students");
const courseRoutes = require("./routes/courses");

app.get("/", (req, res) => {
  res.send("Welcome to the Student & Course Portal API!");
});

app.use("/students", studentRoutes);
app.use("/courses", courseRoutes);

app.use((req, res) => {
  res.status(404).send("Page not found..");
});

app.listen(3000, () => {
  console.log("Server running on port 3000");
});
