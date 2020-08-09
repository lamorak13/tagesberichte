const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ReportSchema = new Schema({
  date: { type: Date, default: Date.now },
  name: String,
  temperatur: Number,
  name: String,
  kopfweh: Boolean,
  halsweh: Boolean,
  gliederschmerzen: Boolean,
  husten: Boolean,
  müdigkeit: Boolean,
  durchfall: Boolean,
  sinne: Boolean,
  kurzatmigkeit: Boolean,
  brustschmerzen: Boolean,
  anmerkung: String,
  nachricht: String,
});

module.exports = Report = mongoose.model('report', ReportSchema);
