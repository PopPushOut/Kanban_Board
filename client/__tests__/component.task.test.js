import Task from '../components/boardPage/Task';
import React from 'react';
import { shallow, mount } from 'enzyme';

const task = {
  id: '584884684864',
  title: 'Testing title'
};
describe('<Task/>', () => {
  it('renders and displays properly', () => {
    const wrapper = shallow(<Task task={task} comments={{}} />);
    console.log(wrapper.debug());
  });
});
