// @ts-nocheck
import Component from "./FooterComponent.vue";
import { shallowMount } from "@vue/test-utils"

describe("textValidate", () => {
  it("1234567890 -> error is false", () => {
    const wrapper = shallowMount(Component)
    wrapper.vm.textValidate("1234567890")
    expect(wrapper.vm.error).toBeFalsy()
  });
  it("123456789 -> error is true", () => {
    const wrapper = shallowMount(Component)
    wrapper.vm.textValidate("123456789")
    expect(wrapper.vm.error).toBeTruthy()
  });
});
