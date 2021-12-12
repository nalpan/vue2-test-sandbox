// @ts-nocheck
import Component from "./TextComponent.vue";
import { shallowMount } from "@vue/test-utils"

describe("computed isError", () => {
  it("not empty -> false", () => {
    const wrapper = shallowMount(Component, {propsData: {value: "a"}})
    expect(wrapper.vm.isError).toBeFalsy()
  });
  it("empty -> true", () => {
    const wrapper = shallowMount(Component, {propsData: {value: ""}})
    expect(wrapper.vm.isError).toBeTruthy()
  });
});

describe("innerValue set", () => {
  it.skip("TODO: innerValue set empty -> false", () => {
    const wrapper = shallowMount(Component, {propsData: {value: "a"}})
    expect(wrapper.vm.isError).toBeFalsy()
  });
  it.skip("TODO: innerValue set non-empty -> true", () => {
    const wrapper = shallowMount(Component, {propsData: {value: ""}})
    expect(wrapper.vm.isError).toBeTruthy()
  });
});
