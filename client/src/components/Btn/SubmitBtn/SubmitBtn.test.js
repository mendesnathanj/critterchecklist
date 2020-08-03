import React from "react";
import { mount } from 'enzyme';
import SubmitBtn from './SubmitBtn';

describe('SubmitBtn', () => {
  it('should have the submit button class attached to it', () => {
    const wrapper = mount(<SubmitBtn value='Submit Button' />);
    const btn = wrapper.find('button');

    expect(btn.hasClass(/submitBtn/)).toBe(true);
  })
})
