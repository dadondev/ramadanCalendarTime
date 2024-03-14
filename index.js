import express from "express";
import mongoose from "mongoose";
import getTime from "./functions/getTime.js";
import obj from "./functions/getResponse.js";
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
  res.write("You must correct request !!!");
  res.end();
});

app.get("/:region/:id", (req, res) => {
  const { region, id } = req.params;
  getTime(region, id, Time);
  let err = obj("give");
  if (typeof err !== "string") {
    res.status(200).send(err);
  } else {
    res.status(400).send(err);
  }
  res.end();
});

app.listen(3000, () => {
  console.log("hello");
});
