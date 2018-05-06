import React from 'react'
import App from './index'
import {shallow} from 'enzyme'

describe('App', () => {
  it('should render app without crash', () => {
    const wrapper = shallow(<App />)
    expect(wrapper.exists()).toBe(true)
  })
})
