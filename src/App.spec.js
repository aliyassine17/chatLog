import React from 'react';
import { shallow } from 'enzyme';
import ReactDOM from 'react-dom';
import App from './App';

describe('<App', ()=>{
  let wrapper = null;


  beforeEach(()=>{
    wrapper = shallow(<App/>);
  });

  it('renders without crashing', () => {
    expect(wrapper).toMatchSnapshot();
    const div = document.createElement('div');
    ReactDOM.render(<App />, div);
  });
});