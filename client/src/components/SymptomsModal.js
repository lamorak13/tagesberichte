import React, { useState } from 'react';
import Modal from 'react-modal';
import { FormControlLabel, Checkbox } from '@material-ui/core';
import { FaTimes } from 'react-icons/fa';

function SymptomsModal(props) {
  let [toggleModal, setToggleModal] = useState(false);

  const report = props.report;

  let sum = 0;
  for (const value of Object.values(report)) {
    if (value === true) sum += 1;
  }

  const style = {
    overlay: {
      backgroundColor: 'rgba(255,255,255,.5)',
    },
    content: {
      top: '4vw',
      left: '20%',
      right: '20%',
      bottom: 'auto',
      borderRadius: '10px',
      border: 'solid 1px #D8D8F3',
      padding: '5em',
      backgroundColor: '#f5f5fc',
    },
  };

  return (
    <>
      <button onClick={() => setToggleModal(true)}>{sum} von 9 Symptomen</button>
      <Modal isOpen={toggleModal} onRequestClose={() => setToggleModal(false)} style={style}>
        <h1>Symptome</h1>
        <div className='checkboxes-container'>
          <FormControlLabel
            control={<Checkbox checked={report.kopfweh} name='kopfweh' color='primary' />}
            label='Kopfweh'
          />
          <FormControlLabel
            control={<Checkbox checked={report.halsweh} name='halsweh' color='primary' />}
            label='Halsweh'
          />
          <FormControlLabel
            control={
              <Checkbox checked={report.gliederschmerzen} name='gliederschmerzen' color='primary' />
            }
            label='Gliederschmerzen'
          />
          <FormControlLabel
            control={<Checkbox checked={report.husten} name='husten' color='primary' />}
            label='Husten'
          />
          <FormControlLabel
            control={<Checkbox checked={report.müdigkeit} name='müdigkeit' color='primary' />}
            label='Müdigkeit'
          />
          <FormControlLabel
            control={<Checkbox checked={report.durchfall} name='durchfall' color='primary' />}
            label='Durchfall'
          />
          <FormControlLabel
            control={<Checkbox checked={report.sinne} name='sinne' color='primary' />}
            label='Sinne'
          />
          <FormControlLabel
            control={
              <Checkbox checked={report.kurzatmigkeit} name='kurzatmigkeit' color='primary' />
            }
            label='Kurzatmigkeit'
          />
          <FormControlLabel
            control={
              <Checkbox checked={report.brustschmerzen} name='brustschmerzen' color='primary' />
            }
            label='Brustschmerzen'
          />
        </div>
        <button onClick={() => setToggleModal(false)} className='modal-close-button'>
          <FaTimes size={25} color={'#FC5E5C'} />
        </button>
      </Modal>
    </>
  );
}

export default SymptomsModal;
