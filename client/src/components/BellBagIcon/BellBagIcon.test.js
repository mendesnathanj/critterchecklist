import React from 'react';
import { mount } from 'enzyme';
import BellBagIcon from './BellBagIcon';
import BellBag from '../../images/bellbag.png';

describe('BellBagIcon', () => {
  let wrapper;
  let img;

  beforeEach(() => {
    wrapper = mount(<BellBagIcon />);
    img = wrapper.find("img");
  })

  it('renders correctly', () => {
    expect(img.length).toBe(1);
  })

  it('should render the bellbag.png file', () => {
    expect(img.prop('src')).toEqual(BellBag);
  })

  it('should have an alt of "Bell Bag"', () => {
    expect(wrapper.find('img[alt="Bell Bag"]').length).toBe(1);
  })

  it('should apply a variant of icon as a class', () => {
    expect(img.hasClass(/icon/)).toBe(true);
  })
})
