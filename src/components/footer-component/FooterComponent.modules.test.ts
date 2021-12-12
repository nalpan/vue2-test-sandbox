import {isSuccess} from './FooterComponent.modules'

describe('isSuccess', () => {
  it('length 10 -> true', () => {
    expect(isSuccess('1234567890')).toBeTruthy()
  })
  it('length 9 -> false', () => {
    expect(isSuccess('123456789')).toBeFalsy()
  })
})