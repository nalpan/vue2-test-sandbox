import App from './App.vue'
import {render, fireEvent} from '@testing-library/vue'

describe('length validate', () => {
  it('init -> "text length ng" and "color: red"', async () => {
    const component = render(App)

    const text = component.baseElement.querySelector('.text-length-result span')
    expect(text!.textContent).toBe(('text length ng'))
    const style = window.getComputedStyle(text!)
    expect(style.color).toBe('red')
  })
  it('input 1234567890 -> "text length ng" and "color: red"', async () => {
    const component = render(App)
    const input = component.baseElement.querySelector('input')
    await fireEvent.update(input!, "123456789")
    const button = component.baseElement.querySelector('button.button')
    await fireEvent.click(button!)

    const text = component.baseElement.querySelector('.text-length-result span')
    expect(text!.textContent).toBe(('text length ng'))
    const style = window.getComputedStyle(text!)
    expect(style.color).toBe('red')
  })
  it('input 1234567890 -> "text length ok!!!" and "color: "', async () => {
    const component = render(App)
    const input = component.baseElement.querySelector('input')
    await fireEvent.update(input!, "1234567890")
    const button = component.baseElement.querySelector('button.button')
    await fireEvent.click(button!)

    const text = component.baseElement.querySelector('.text-length-result span')
    expect(text!.textContent).toBe(('text length ok!!!'))
    const style = window.getComputedStyle(text!)
    expect(style.color).toBe('')
  })
})