import chatLogReducer ,{ initialState } from './index';
import { fetchChatLogSuccess, fetchChatLogFailure } from './../actions/index';

describe('chatLogReducer', ()=>{

  it('should return state for unknown action', () => {

    const mockState = { test: 'testItem' };
    const mockAction = { type: 'Mr.watercress' , payload: null };
    const result = chatLogReducer(mockState, mockAction);
    expect(result).toEqual(mockState);
  });

  it('should use initial state if state not provided', () => {

    const mockAction = { type: 'Mr.watercress' };
    // eslint-disable-next-line no-undefined
    const result = chatLogReducer(undefined, mockAction);
    expect(result).toEqual(initialState);
  });


  it('should load chatLog on FETCH_CHAT_LOG_SUCCESS', () => {

    const chatLog = [{ id: 1, content: 'watercress' }, { id: 2, content: 'spinach' }];
    const mockAction = fetchChatLogSuccess(chatLog);
    const result = chatLogReducer(initialState, mockAction);
    expect(result.chatLog).toHaveLength(2);
    expect(result.chatLog[1].id).toEqual(2);
    expect(result.chatLog[0].content).toEqual('watercress');
  });

  it('should load status error on FETCH_CHAT_LOG_FAILURE', () => {

    const mockAction = fetchChatLogFailure('error fetching data from the api');
    const result = chatLogReducer(initialState, mockAction);
    expect(result.chatLog).toHaveLength(0);
    expect(result.status.error).toBe('error fetching data from the api');
    expect(result.status.success).toBe(false);
  });

});