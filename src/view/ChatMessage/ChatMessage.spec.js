import React from 'react';
import { shallow } from 'enzyme';
import ChatMessage from './index';

describe('<ChatMessage>', ()=>{
  let wrapper = null;
  const props = {
    messageId: '12356',
    userId: '613651251',
    fullName: 'Robin Balmforth',
    timestamp: '2016-06-03T20:24:29Z',
    email: 'robin@example.com',
    message: 'Hello, World!',
    avatar: null
  };



  beforeEach(()=>{
    wrapper = shallow(<ChatMessage {...props}/>);
    jest.spyOn(ChatMessage.prototype, 'mouseEnter');
    jest.spyOn(ChatMessage.prototype, 'mouseLeave');
  });
  afterEach(()=>{
    wrapper = null;
  });

  it('render without crashing', () => {
    expect(wrapper).toMatchSnapshot();
  });
  it('should have one container', () => {
    expect(wrapper.find('.container').length).toEqual(1);
  });
  it('should have one email', () => {
    expect(wrapper.find('.email').length).toEqual(1);
  });
  it('should have one fullname', () => {
    expect(wrapper.find('.fullname').length).toEqual(1);
  });
  it('should have one avatar', () => {
    expect(wrapper.find('img').length).toEqual(1);
  });
  it('should have one message', () => {
    expect(wrapper.find('.message').length).toEqual(1);
  });
  it('should simulate mouseEnter and update the state', () => {
    wrapper.simulate('mouseEnter');
    expect(ChatMessage.prototype.mouseEnter).toHaveBeenCalled();
    expect(wrapper.state().showEmail).toBe(true);
  });
  it('should simulate mouseLeave and update the state', () => {
    wrapper.simulate('mouseLeave');
    expect(ChatMessage.prototype.mouseLeave).toHaveBeenCalled();
    expect(wrapper.state().showEmail).toBe(false);
  });
});