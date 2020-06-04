import {
  DATA_REQUEST,
  DATA_SUCCESS,
  DATA_FAILED,
  ASYNC_DATA_REQUEST
} from './action';

const initialState = {
  data: [],
  success: false,
  loading: false
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case DATA_REQUEST:
      return {
        ...state,
        loading: true
      };
    case DATA_SUCCESS:
      return {
        ...state,
        loading: false,
        success: true,
        data: action.payload
      };
    case DATA_FAILED:
      return {
        ...state,
        loading: false,
        success: false,
        data: []
      };
    default:
      return {
        ...state
      };
  }
};

export default reducer;
