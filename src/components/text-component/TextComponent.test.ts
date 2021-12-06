// @ts-nocheck
import Component from "./TextComponent.vue";
import { shallowMount } from "@vue/test-utils"

describe("Component", () => {
  it("errorMsg", () => {
    const wrapper = shallowMount(Component, {propsData: {value: "success"}})
    expect(wrapper.vm.errorMsg).toBe("")
  });
  it("errorMsg", () => {
    const wrapper = shallowMount(Component, {propsData: {value: ""}})
    expect(wrapper.vm.errorMsg).toBe("error!!!")
  });
});
