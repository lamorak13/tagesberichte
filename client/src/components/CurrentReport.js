import React, { useState, useEffect } from 'react';
import { FaAngleLeft, FaAngleRight, FaRegTrashAlt } from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux';
import { getReports, deleteReport, changePointer } from '../redux/reports/reportActions';
import SympomsModal from './SymptomsModal';

function CurrentReport() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getReports());
  }, [dispatch]);

  const pointer = useSelector((state) => state.reports.pointer);
  const person = useSelector((state) => state.reports.person);
  const reports = useSelector((state) => state.reports.items).filter(
    (report) => report.name === person
  );

  function getDateFromData(date) {
    const test = new Date(date);
    const day = test.getDate();
    const month = test.getMonth();
    const year = test.getFullYear();
    const monthNames = [
      'January',
      'February',
      'March',
      'April',
      'May',
      'June',
      'July',
      'August',
      'September',
      'October',
      'November',
      'December',
    ];
    return `${day}. ${monthNames[month]}, ${year}`;
  }

  return (
    <div className='container current-report'>
      {reports == '' ? (
        <h1>Keine Berichte vorhanden</h1>
      ) : (
        <>
          <div className='current-report_header'>
            <h2 style={{ flexGrow: '1' }}>Aktueller Tagesbericht</h2>

            <FaRegTrashAlt
              size={20}
              color={'#FC5E5C'}
              style={{ cursor: 'pointer' }}
              onClick={() => dispatch(deleteReport(reports[pointer]._id))}
            />

            <div className='date-container'>
              <p className='current-report_date'>{getDateFromData(reports[pointer].date)}</p>
            </div>
          </div>
          <div className='current-report_body'>
            <div className='report-item-container'>
              <h3>Temperatur</h3>
              <p>{reports[pointer].temperatur}</p>
            </div>
            <div className='report-item-container'>
              <h3>Symptome</h3>
              <SympomsModal report={reports[pointer]} />
            </div>
            <div className='report-item-container'>
              <h3>Anmerkungen</h3>
              <p>{reports[pointer].anmerkung}</p>
            </div>
            <div className='report-item-container'>
              <h3>Nachricht an Dich</h3>
              <p>{reports[pointer].nachricht}</p>
            </div>
          </div>
          {pointer === 0 ? (
            ''
          ) : (
            <button className='prev-button'>
              <FaAngleLeft
                size={45}
                className='hover'
                onClick={() => dispatch(changePointer(-1))}
              />
            </button>
          )}
          {pointer === reports.length - 1 ? (
            ''
          ) : (
            <button className='next-button'>
              <FaAngleRight
                size={45}
                className='hover'
                onClick={() => dispatch(changePointer(1))}
              />
            </button>
          )}
        </>
      )}
    </div>
  );
}

export default CurrentReport;
