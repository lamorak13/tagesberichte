import { GET_REPORTS, CHANGE_PERSON } from './reportTypes';
import { POST_REPORT } from './reportTypes';
import { DELETE_REPORT } from './reportTypes';
import { IS_LOADING } from './reportTypes';

const initialState = {
  items: [],
  isLoading: false,
  error: '',
  person: 'Jakob',
};

export const reportReducer = (state = initialState, action) => {
  switch (action.type) {
    case POST_REPORT:
      return {
        ...state,
        items: [action.payload, ...state.items],
      };

    case GET_REPORTS:
      return {
        ...state,
        isLoading: false,
        items: [...action.payload],
      };

    case IS_LOADING:
      return {
        ...state,
        isLoading: true,
      };

    case DELETE_REPORT:
      return {
        ...state,
        items: state.items.filter((item) => item._id != action.payload),
      };

    case CHANGE_PERSON:
      return {
        ...state,
        person: action.payload,
      };

    default:
      return state;
  }
};
