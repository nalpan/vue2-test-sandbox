import Component from "./Component.vue";
import { shallowMount } from "@vue/test-utils"

describe("Component", () => {
  it("default message", () => {
    const wrapper = shallowMount(Component)
    expect(wrapper.vm.$props.message).toBe("hello vue!")
  });

  it("message", () => {
    const wrapper = shallowMount(Component, {
      propsData: {
        message: "message!!!"
      }
    })
    expect(wrapper.vm.$props.message).toBe("message!!!")
  });
});
