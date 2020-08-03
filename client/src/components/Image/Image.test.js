import React from 'react';
import { shallow } from 'enzyme';
import Image from './Image';

describe('Image', () => {
  let wrapper;
  let img;

  beforeEach(() => {
    wrapper = shallow(<Image src="test.jpg" alt="My alt" />);
    img = wrapper.find("img");
  })

  it('should render correctly', () => {
    expect(img.length).toBe(1);
  })

  it('should take in the given src attribute', () => {
    expect(wrapper.find({ src: 'test.jpg' }).length).toBe(1);
  })

  it('should apply a given alt attribute', () => {
    expect(wrapper.find({ alt: 'My alt' }).length).toBe(1);
  })
})
