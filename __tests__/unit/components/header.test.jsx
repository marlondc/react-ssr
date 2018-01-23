/* eslint-env jest */
import React from 'react';
import { mount } from 'enzyme';

import Header from '../../../src/components/atoms/header';

describe('Header component', () => {
  it('should render the text', () => {
    const wrapper = mount(
      <Header>Hello World</Header>,
    );
    expect(wrapper.find('h1').text()).toEqual('Hello World');
  });

  it('should default to h1 tag if no props given', () => {
    const wrapper = mount(
      <Header>Test</Header>,
    );

    expect(wrapper.find('h1').length).toBe(1);
  });

  it('can render h2 tags', () => {
    const wrapper = mount(
      <Header type="h2">Test</Header>,
    );

    expect(wrapper.find('h1').length).toBe(0);
    expect(wrapper.find('h2').length).toBe(1);
  });

  it('can render h3 tags', () => {
    const wrapper = mount(
      <Header type="h3">Test</Header>,
    );

    expect(wrapper.find('h2').length).toBe(0);
    expect(wrapper.find('h3').length).toBe(1);
  });

  it('can render h4 tags', () => {
    const wrapper = mount(
      <Header type="h4">Test</Header>,
    );

    expect(wrapper.find('h3').length).toBe(0);
    expect(wrapper.find('h4').length).toBe(1);
  });

  it('can render h5 tags', () => {
    const wrapper = mount(
      <Header type="h5">Test</Header>,
    );

    expect(wrapper.find('h4').length).toBe(0);
    expect(wrapper.find('h5').length).toBe(1);
  });
});
