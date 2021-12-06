import App from './App.vue'
import {render, fireEvent} from '@testing-library/vue'

describe('', () => {
  it('', async () => {
    const component = render(App)
    const button = component.baseElement.querySelector('button.button')
    await fireEvent.click(button!)
    console.log(component.baseElement.innerHTML)
    expect(button!.classList.contains('error')).toBeTruthy()
  })
})