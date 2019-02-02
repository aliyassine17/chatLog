import {
  FETCH_CHAT_LOG_SUCCESS,
  FETCH_CHAT_LOG_FAILURE
} from './../actionTypes';

export const initialState = {
  chatLog: [],
  status: {
    success: false,
    error: null
  }
};

const chatLogReducer = (state = initialState, action) => {
  switch (action.type) {
  case FETCH_CHAT_LOG_SUCCESS:
    return {
      ...state,
      chatLog: action.payload,
      status: {
        success: true,
        error: null
      }
    };
  case FETCH_CHAT_LOG_FAILURE:
    return {
      ...state,
      chatLog: [],
      status: {
        success: false,
        error: action.payload
      }
    };
  default:
    return state;
  }
};

export default chatLogReducer;