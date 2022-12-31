/** @type {import('ts-jest/dist/types').InitialOptionsTsJest} */
module.exports = {
  preset: "ts-jest",
  testEnvironment: "jsdom",
  testMatch: ["**/*.test.ts"],
  moduleFileExtensions: [
    "js",
    "ts",
    "json",
    "vue"
  ],
  transform: {
    ".*\\.(vue)$": "@vue/vue2-jest"
  }
};
