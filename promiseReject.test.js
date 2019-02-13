const { fetchDataPromiseReject } = require("./fetchData");

test("the fetch fails with an error", () => {
  expect.assertions(1);
  return fetchDataPromiseReject().catch(e => expect(e).toMatch("error"));
});
