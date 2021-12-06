// @ts-nocheck
import Component from "./FooterComponent.vue";
import { shallowMount } from "@vue/test-utils"

describe("error", () => {
  it("non error", () => {
    const wrapper = shallowMount(Component)
    wrapper.vm.textValidate("success")
    expect(wrapper.vm.error).toBeFalsy()
  });
  it("error", () => {
    const wrapper = shallowMount(Component)
    wrapper.vm.textValidate("succes")
    expect(wrapper.vm.error).toBeTruthy()
  });
});
