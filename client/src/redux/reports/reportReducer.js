import { GET_REPORTS, CHANGE_PERSON, CHANGE_POINTER } from './reportTypes';
import { POST_REPORT } from './reportTypes';
import { DELETE_REPORT } from './reportTypes';
import { IS_LOADING } from './reportTypes';

const initialState = {
  items: [],
  isLoading: false,
  error: '',
  person: 'Jakob',
  pointer: 0,
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
      if (
        state.pointer != 0 &&
        state.items.filter((item) => item.name == state.person).length - 1 == state.pointer
      ) {
        return {
          ...state,
          items: state.items.filter((item) => item._id !== action.payload),
          pointer: state.pointer - 1,
        };
      } else {
        return {
          ...state,
          items: state.items.filter((item) => item._id !== action.payload),
        };
      }

    case CHANGE_PERSON:
      return {
        ...state,
        person: action.payload,
        pointer: 0,
      };

    case CHANGE_POINTER:
      return {
        ...state,
        pointer: state.pointer + action.payload,
      };

    default:
      return state;
  }
};
