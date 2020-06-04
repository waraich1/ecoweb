export const ASYNC_DATA_REQUEST = 'ASYNC_DATA_REQUEST';
export const DATA_REQUEST = 'DATA_REQUEST';
export const DATA_SUCCESS = 'DATA_SUCCESS';
export const DATA_FAILED = 'DATA_FAILED';

export const asyncDataRequest = () => {
  return {
    type: ASYNC_DATA_REQUEST
  };
};

export const dataRequest = () => {
  return {
    type: DATA_REQUEST
  };
};

export const dataSuccess = (data) => {
  return {
    type: DATA_SUCCESS,
    payload: data
  };
};

export const dataFailed = () => {
  return {
    type: DATA_FAILED
  };
};
