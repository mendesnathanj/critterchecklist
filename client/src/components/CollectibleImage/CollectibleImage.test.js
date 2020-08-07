import React from 'react';
import { shallow, mount } from 'enzyme';
import CollectibleImage from './CollectibleImage';

describe('CollectibleImage', () => {
  it('should apply the variant as a class to an img', () => {
    const wrapper = mount(<CollectibleImage src='test.jpg' alt='Alt' />);
    const img = wrapper.find('img');

    expect(img.hasClass(/collectibleImage/)).toBe(true);
  })
});
