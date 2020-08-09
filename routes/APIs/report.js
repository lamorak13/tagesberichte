const express = require('express');
const router = express.Router();

//get model of report
const Report = require('../../models/Report');

//get request for all reports
router.get('/', (req, res) => {
  Report.find()
    .sort({ date: -1 })
    .then((reports) => res.json(reports));
});

//post request for new report
router.post('/', (req, res) => {
  const newReport = new Report({
    name: req.body.name,
    temperatur: req.body.temperatur,
    kopfweh: req.body.kopfweh,
    halsweh: req.body.halsweh,
    gliederschmerzen: req.body.gliederschmerzen,
    husten: req.body.husten,
    müdigkeit: req.body.müdigkeit,
    durchfall: req.body.durchfall,
    sinne: req.body.sinne,
    kurzatmigkeit: req.body.kurzatmigkeit,
    brustschmerzen: req.body.brustschmerzen,
    anmerkung: req.body.anmerkung,
    nachricht: req.body.nachricht,
  });

  newReport.save().then((report) => res.json(report));
});

//delete request for a specific report
router.delete('/:id', (req, res) => {
  Report.findByIdAndRemove(req.params.id)
    .then(() => res.json({ success: true }))
    .catch(() => res.status(404).json({ success: false }));
});

module.exports = router;
