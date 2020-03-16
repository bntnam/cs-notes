const linearSearch = require("./");

test("linear search", () => {
  expect(linearSearch([2, 5, 8, 12, 16, 23, 38, 56, 72, 91], 23)).toBe(5);
});
