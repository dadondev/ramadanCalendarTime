import express from "express";
import mongoose from "mongoose";
import getTime from "./functions/getTime.js";
mongoose
  .connect("mongodb://127.0.0.1:27017/times")
  .then(() => {
    console.log("connection seccesfully");
  })
  .catch((e) => {
    console.log(e);
  });

const app = express();

const timeSchema = new mongoose.Schema({
  day: Number,
  start_time: String,
  end_time: String,
});

const Time = mongoose.model("times", timeSchema);

app.get("/:id", (req, res) => {
  res.write("hello");
  res.end();
});

app.get("/:region/:id", (req, res) => {
  const { region, id } = req.params;
  getTime(region, id, Time);
  res.write("hello");
  res.end();
});

app.listen(3000, () => {
  console.log("hello");
});
