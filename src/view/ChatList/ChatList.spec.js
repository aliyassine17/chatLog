import React from 'react';
import { shallow } from 'enzyme';
import ChatList from './index';

describe('<ChatList>', ()=>{
  let wrapper = null;
  const chatLog = [{
    messageId: '12356',
    userId: '613651251',
    fullName: 'Robin Balmforth',
    timestamp: '2016-06-03T20:24:29Z',
    email: 'robin@example.com',
    message: 'Hello, World!',
    avatar: null
  },
  {
    messageId: '123567',
    userId: '6136512517',
    fullName: 'Robin Balmforthh',
    timestamp: '2016-06-03T20:24:29Zh',
    email: 'robin6@example.com',
    message: 'Hello, World!',
    avatar: null
  }];

  beforeEach(()=>{
    wrapper = shallow(<ChatList chatLog={chatLog}/>);
    jest.spyOn(ChatList.prototype, 'handleChange');
  });

  afterEach(()=>{
    wrapper = null;
  });

  it('renders without crashing', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should have one messages container', () => {
    expect(wrapper.find('.messages').length).toEqual(1);
  });
  it('should have one filter', () => {
    expect(wrapper.find('.filter').length).toEqual(1);
  });
  it('should have 10 records to show by default ', () => {
    expect(wrapper.state().showRecords).toBe(10);
  });
  it('should simulate change and update the state ', () => {
    const target = {
      target :{
        name: 'showRecords',
        value: 20,
        id: 'showRecords'
      }
    };
    expect(wrapper.state().showRecords).toBe(10);
    wrapper.find('#showRecords').simulate('change', target);
    expect(ChatList.prototype.handleChange).toHaveBeenCalled();
    expect(wrapper.state().showRecords).toBe(20);
  });
  it('should load the chatlog into the View ', () => {

    expect(wrapper.state().showRecords).toBe(10);
    wrapper.setState({
      chatLog
    });
    expect(wrapper.state().chatLog.length).toBe(2);
  });
  it('should load 1 ChatMessage component ', () => {
    wrapper.setState({
      chatLog
    });
    expect(wrapper.find('ChatMessage').length).toBe(2);
  });
});