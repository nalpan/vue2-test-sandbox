// @ts-nocheck
import Component from "./TextComponent.vue";
import { shallowMount } from "@vue/test-utils"

describe("computed errorMsg", () => {
  it("empty", () => {
    const wrapper = shallowMount(Component, {propsData: {value: "success"}})
    expect(wrapper.vm.errorMsg).toBe("")
  });
  it("error!!!", () => {
    const wrapper = shallowMount(Component, {propsData: {value: ""}})
    expect(wrapper.vm.errorMsg).toBe("error!!!")
  });
});
