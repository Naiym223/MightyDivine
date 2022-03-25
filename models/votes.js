const { Schema, model } = require('mongoose');

module.exports = model(
  'votes',
  new Schema({
    userID: String,
    appID: String,
    date: Number,
  }),
);
