import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { changePerson } from '../redux/reports/reportActions';
import { FaPlus, FaTimes } from 'react-icons/fa';
import { Select, MenuItem } from '@material-ui/core';
import Modal from 'react-modal';
import Form from './Form';

function Options() {
  const dispatch = useDispatch();
  const person = useSelector((state) => state.reports.person);

  let [toggleModal, setToggleModal] = useState(false);

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
    <div className='flex-container'>
      <div className='container container-shadow person-option'>
        <h3>Person wählen</h3>
        <p>Willst du den Bericht von Steffi oder Jakob sehen?</p>
        <Select value={person} onChange={(e) => dispatch(changePerson(e.target.value))} name='name'>
          <MenuItem value='Jakob'>Jakob</MenuItem>
          <MenuItem value='Steffi'>Steffi</MenuItem>
        </Select>
      </div>
      <button className='add-new-report container-shadow' onClick={() => setToggleModal(true)}>
        <FaPlus size={35} />
      </button>

      <Modal isOpen={toggleModal} onRequestClose={() => setToggleModal(false)} style={style}>
        <h1>Neuen Bericht abschicken</h1>
        <Form />
        <button onClick={() => setToggleModal(false)} className='modal-close-button'>
          <FaTimes size={25} color={'#FC5E5C'} />
        </button>
      </Modal>
    </div>
  );
}

export default Options;
