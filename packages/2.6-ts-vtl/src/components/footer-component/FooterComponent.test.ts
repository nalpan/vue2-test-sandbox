// @ts-nocheck
import Component from "./FooterComponent.vue";
import { shallowMount } from "@vue/test-utils"

describe("textValidate", () => {
  it("1234567890 -> emit true", () => {
    const wrapper = shallowMount(Component)
    wrapper.vm.textValidate("1234567890")
    expect(wrapper.emitted().textValidate.length).toBe(1)
    expect(wrapper.emitted().textValidate[0][0]).toBe(true)
  });
  it("123456789 -> emit false", () => {
    const wrapper = shallowMount(Component)
    wrapper.vm.textValidate("123456789")
    expect(wrapper.emitted().textValidate.length).toBe(1)
    expect(wrapper.emitted().textValidate[0][0]).toBe(false)
  });
});
