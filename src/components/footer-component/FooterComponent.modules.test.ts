import {isSuccess} from './FooterComponent.modules'

describe('isSuccess', () => {
  it('success -> true', () => {
    expect(isSuccess('success')).toBeTruthy()
  })
  it('succes -> false', () => {
    expect(isSuccess('succes')).toBeFalsy()
  })
})