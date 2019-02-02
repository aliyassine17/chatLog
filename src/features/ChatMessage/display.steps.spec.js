import React from 'react';
import { mount } from 'enzyme';
import { defineFeature, loadFeature } from 'jest-cucumber';
import ChatMessage from './../../view/ChatMessage';


const feature = loadFeature('./src/features/ChatMessage/display.feature');
defineFeature(feature, test => {
  test('show image, fullname, email, message and date', ({ given, when, then, pending }) => {
    let messageProps = {};
    let wrapper = null;
    given('fullName is Aly Baba',()=>{
      messageProps.fullName = 'Aly Baba';
      pending();
    });
    given('avatar is null',()=>{
      messageProps.avatar = null;
      pending();
    });
    given('email is alyBaba@alyBaba.io',()=>{
      messageProps.email = 'alyBaba@alyBaba.io';
      pending();
    });
    given('message is not the same',()=>{
      messageProps.message = 'not the same';
      pending();
    });
    given('timestamp is 09 Feb 2017, 04:27:38',()=>{
      messageProps.timestamp = '09 Feb 2017, 04:27:38';
      pending();
    });

    when('pass the props to the component',()=>{
      wrapper = mount(<ChatMessage {...messageProps}/>);
      pending();
    });
    then('it should render and display the fields',()=>{
      expect(wrapper.find('.email').length).toBe(1);


      expect(wrapper.find('.message').length).toBe(1);
      expect(wrapper.find('.message').text()).toEqual(messageProps.message);


      expect(wrapper.find('.fullname').text()).toEqual(messageProps.fullName);
      expect(wrapper.find('.fullname').length).toBe(1);

      expect(wrapper.find('img').length).toBe(1);
    });

  });

});