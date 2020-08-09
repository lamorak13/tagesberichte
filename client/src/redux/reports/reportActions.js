import {
  GET_REPORTS,
  POST_REPORT,
  DELETE_REPORT,
  IS_LOADING,
  CHANGE_PERSON,
  CHANGE_POINTER,
} from './reportTypes';
import axios from 'axios';

export const isLoading = () => {
  return {
    type: IS_LOADING,
  };
};

export const getReports = () => (dispatch) => {
  dispatch(isLoading());
  axios.get('/api/report').then((res) =>
    dispatch({
      type: GET_REPORTS,
      payload: res.data,
    })
  );
};

export const postReport = (item) => (dispatch) => {
  axios.post('/api/report', item).then((res) =>
    dispatch({
      type: POST_REPORT,
      payload: res.data,
    })
  );
};

export const deleteReport = (id) => (dispatch) => {
  axios.delete(`/api/report/${id}`).then((res) =>
    dispatch({
      type: DELETE_REPORT,
      payload: id,
    })
  );
};

export const changePerson = (person) => {
  return {
    type: CHANGE_PERSON,
    payload: person,
  };
};

export const changePointer = (value) => {
  return {
    type: CHANGE_POINTER,
    payload: value,
  };
};
