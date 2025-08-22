const express = require("express");
const mongoose = require("mongoose");

const updateSchema = new mongoose.Schema({
  Eventtype: {
    type: String,
    required: true
  },
  EventName: {
    type: String,
    required: true
  },
  Description: {
    type: String,
    required: true
  },
  place: {
    type: String,
    required: true
  },
  date: {
    type: String, // or Date if you want proper date handling
    required: true
  },
  startTime: {
    type: String,
    required: true
  },
  endTime: {
    type: String,
    required: true
  },
  imgUrl: {
    type: String,
    required: true
  }
});

module.exports = mongoose.model("updates", updateSchema);
