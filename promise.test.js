//Just return a promise from your test, and Jest will wait for that promise to resolve. If the promise is rejected, the test will automatically fail.

const { fetchDataPromise: fetchData } = require("./fetchData");

test("testing promise using then", () => {
  return fetchData().then(data => {
    expect(data).toBe("peanut butter");
  });
});

test("testing promise using resolves", () => {
  return expect(fetchData()).resolves.toBe("peanut butter");
});

test("testing promise using async/await", async () => {
  expect.assertions(1);
  const data = await fetchData();
  expect(data).toBe("peanut butter");
});

test("testing promise using async/await and resolves", async () => {
  await expect(fetchData()).resolves.toBe("peanut butter");
});
