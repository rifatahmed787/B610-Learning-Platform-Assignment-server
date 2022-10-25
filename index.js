const express = require("express");

const app = express();

const cors = require("cors");

app.use(cors());

const Port = process.env.Port || 5000;

const categories = require("./data/categories.json");
const courses = require("./data/courses.json");

app.get("/", (req, res) => {
  res.send("course api running");
});

app.get("/courses-categories", (req, res) => {
  res.send(categories);
});

app.get("/category/:id", (req, res) => {
  const id = req.params.id;

  const category_courses = courses.filter((n) => n.category_id === id);
  res.send(category_courses);
});

app.get("/courses", (req, res) => {
  res.send(courses);
});

app.get("/courses/:id", (req, res) => {
  //   console.log(req.params.id);
  const id = req.params.id;
  const selectedCourses = courses.find((n) => n._id === id);
  res.send(selectedCourses);
});

app.listen(Port, () => {
  console.log("sever is running", Port);
});
