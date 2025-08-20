import { describe, it, expect } from 'vitest'

import { mount } from '@vue/test-utils'
import HelloWorld from '../HelloWorld.vue'

describe('HelloWorld', () => {
  it('renders message properly', () => {
    const message = 'You did it!'
    const wrapper = mount(HelloWorld, { props: { msg: message } })
    expect(wrapper.text()).toContain(message)
  })

  it('should not contain incorrect message', () => {
    const wrapper = mount(HelloWorld, { props: { msg: 'You did it!' } })
    expect(wrapper.text()).not.toContain('You dont did it!')
  })

  it('renders all required sections', () => {
    const wrapper = mount(HelloWorld, { props: { msg: 'Test' } })
    // 檢查文檔部分是否存在
    expect(wrapper.find('.documentation').exists()).toBe(true)
    // 檢查工具部分是否存在
    expect(wrapper.find('.tooling').exists()).toBe(true)
    // 檢查生態系統部分是否存在
    expect(wrapper.find('.ecosystem').exists()).toBe(true)
  })
})
