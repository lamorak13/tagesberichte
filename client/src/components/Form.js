import React, { useState } from 'react';
import { FormControlLabel, Checkbox, Select, MenuItem, Slider, TextField, Button } from '@material-ui/core';
import { useDispatch } from 'react-redux';
import {postReport} from "../redux/reports/reportActions"

function Form() {
  let [formData, setFormData] = useState({
    name: 'Jakob',
    temperatur: 36.5,
    kopfweh: false,
    halsweh: false,
    gliederschmerzen: false,
    husten: false,
    müdigkeit: false,
    durchfall: false,
    sinne: false,
    kurzatmigkeit: false,
    brustschmerzen: false,
    anmerkung: '',
    nachricht: '',
  });

   const dispatch = useDispatch()

  function handleBox(e) {
    setFormData({
      ...formData,
      [e.target.name]: !formData.[e.target.name]
    });
  }

  function handleChange(e) {
    setFormData({
      ...formData, [e.target.name]: e.target.value
    })
  }

  function valuetext (e, value) {
    setFormData({
      ...formData, temperatur: value
    })
  }

  function formReset() {
    setFormData({
    name: 'Jakob',
    temperatur: 36.5,
    kopfweh: false,
    halsweh: false,
    gliederschmerzen: false,
    husten: false,
    müdigkeit: false,
    durchfall: false,
    sinne: false,
    kurzatmigkeit: false,
    brustschmerzen: false,
    anmerkung: '',
    nachricht: '',
    })
  }

  const sliderMarks = [
    {
      value: 36,
      label: "36 °C",
    }, 
    {
      value: 37,
      label: "37 °C"
    },
    {
      value: 38,
      label: "38 °C"
    }
  ]

  return (
    <>

      <Select value={formData.name} onChange={handleChange} name="name" className="person-select">
        <MenuItem value="Jakob">Jakob</MenuItem>
        <MenuItem value="Steffi">Steffi</MenuItem>
      </Select>

      <Slider
        defaultValue={36.5}
        value={formData.temperatur}
        aria-labelledby="discrete-slider"
        valueLabelDisplay="auto"
        step={.1}
        min={36}
        max={38}
        onChange={valuetext}
        name="temperatur"
        marks={sliderMarks}
      />
      
      <div className="checkboxes-container">
        <FormControlLabel
          control={
            <Checkbox
              checked={formData.kopfweh}
              name='kopfweh'
              color='primary'
              onChange={handleBox}
            />
          }
          label='Kopfweh'
        />
        <FormControlLabel
          control={
            <Checkbox
              checked={formData.halsweh}
              name='halsweh'
              color='primary'
              onChange={handleBox}
            />
          }
          label='Halsweh'
        />
        <FormControlLabel
          control={
            <Checkbox
              checked={formData.gliederschmerzen}
              name='gliederschmerzen'
              color='primary'
              onChange={handleBox}
            />
          }
          label='Gliederschmerzen'
        />
        <FormControlLabel
          control={
            <Checkbox
              checked={formData.husten}
              name='husten'
              color='primary'
              onChange={handleBox}
            />
          }
          label='Husten'
        />
        <FormControlLabel
          control={
            <Checkbox
              checked={formData.müdigkeit}
              name='müdigkeit'
              color='primary'
              onChange={handleBox}
            />
          }
          label='Müdigkeit'
        />
        <FormControlLabel
          control={
            <Checkbox
              checked={formData.durchfall}
              name='durchfall'
              color='primary'
              onChange={handleBox}
            />
          }
          label='Durchfall'
        />
        <FormControlLabel
          control={
            <Checkbox
              checked={formData.sinne}
              name='sinne'
              color='primary'
              onChange={handleBox}
            />
          }
          label='Sinne'
        />
        <FormControlLabel
          control={
            <Checkbox
              checked={formData.kurzatmigkeit}
              name='kurzatmigkeit'
              color='primary'
              onChange={handleBox}
            />
          }
          label='Kurzatmigkeit'
        />
        <FormControlLabel
          control={
            <Checkbox
              checked={formData.brustschmerzen}
              name='brustschmerzen'
              color='primary'
              onChange={handleBox}
            />
          }
          label='Brustschmerzen'
        />
      </div>
      
        <TextField className="text-input" label="Anmerkung" variant="outlined" name="anmerkung" onChange={handleChange} value={formData.anmerkung} multiline/>
        <TextField className="text-input" label="Nachricht an Dich <3" variant="outlined" name="nachricht" onChange={handleChange} value={formData.nachricht} multiline />


      <Button variant="contained" className="submit-report-button" onClick={() => {
        dispatch(postReport(formData));
        formReset();
      }}>
        Bericht speichern
      </Button>
    </>
  );
}

export default Form;
