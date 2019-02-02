import getChatLog from './../../../service';
import {
  FETCHING_CHAT_LOG,
  FETCH_CHAT_LOG_SUCCESS,
  FETCH_CHAT_LOG_FAILURE
} from './../actionTypes';

export const fetchChatLog = () => {
  return { type: FETCHING_CHAT_LOG, payload: null };
};
export const fetchChatLogSuccess = (payload) => {
  return { type: FETCH_CHAT_LOG_SUCCESS, payload };
};
export const fetchChatLogFailure = (payload) => {
  return { type: FETCH_CHAT_LOG_FAILURE, payload };
};


export const fetchChatLogFromApi = (dispatch) => {

  dispatch(fetchChatLog());

  return getChatLog()
    .then((json) => {
      dispatch(fetchChatLogSuccess(json));
    })
    .catch((error) => {
      dispatch(fetchChatLogFailure(error.message));
    });
};
export default fetchChatLogFromApi;
