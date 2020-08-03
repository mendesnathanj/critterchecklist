import React from 'react';
import { shallow } from 'enzyme';
import Btn from './Btn';

describe('Btn', () => {
  let btn;
  let mockFn;

  beforeEach(() => {
    mockFn = jest.fn();
    const component = <Btn value='My Button' clickHandler={mockFn} variant='test' />;
    const wrapper = shallow(component);

    btn = wrapper.find('button');
  });

  it('should should render the text passed to it', () => {
    expect(btn.text()).toBe('My Button');
  });

  it('should use a click handler if passed to it', () => {
    btn.simulate('click');

    expect(mockFn).toHaveBeenCalled();
  });

  it('should apply the variant given to it as a class name', () => {
    expect(btn.hasClass('test')).toBe(true);
  });
});
