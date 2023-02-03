/**
 * storeを含んだcomponentのテスト
 */
import { createLocalVue } from "@vue/test-utils";
import { PiniaVuePlugin } from "pinia";
import { createTestingPinia } from "@pinia/testing";
import { render } from "@testing-library/vue";
import MyComponent from "./MyComponent.vue";
import { Store } from "./Store";

it("componentレンダリング", async () => {
  // テスト環境用のVueインスタンス生成
  const localVue = createLocalVue();
  localVue.use(PiniaVuePlugin);

  // レンダリング
  const renderResult = render(MyComponent, {
    localVue,
    pinia: createTestingPinia({
      stubActions: false, // actionのスタブ化を解除
      plugins: [
        () => {
          const TodoStoreA = Store(); // storeの呼び出し
          // loadTasksのスタブ化
          TodoStoreA.loadTasks = jest.fn().mockImplementation(() => {
            TodoStoreA.tasks = [
              {
                id: 1,
                description: "test-task1",
              },
            ];
          });
        },
      ],
    }),
  });

  expect(renderResult.html()).toContain("1: test-task1");
});
