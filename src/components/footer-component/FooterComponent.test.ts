// @ts-nocheck
import Component from "./FooterComponent.vue";
import { shallowMount } from "@vue/test-utils"

describe("textValidate", () => {
  it("success -> error is false", () => {
    const wrapper = shallowMount(Component)
    wrapper.vm.textValidate("success")
    expect(wrapper.vm.error).toBeFalsy()
  });
  it("succes -> error is true", () => {
    const wrapper = shallowMount(Component)
    wrapper.vm.textValidate("succes")
    expect(wrapper.vm.error).toBeTruthy()
  });
});
