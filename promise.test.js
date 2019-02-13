//Just return a promise from your test, and Jest will wait for that promise to resolve. If the promise is rejected, the test will automatically fail.

const { fetchDataPromise } = require("./fetchData");

test("the data is peanut butter", () => {
  return fetchDataPromise().then(data => {
    expect(data).toBe("peanut butter");
  });
});
