const { fetchDataPromiseReject: fetchData } = require("./fetchData");

test("the fetch fails with an error using catch", () => {
  expect.assertions(1);
  return fetchData().catch(e => expect(e).toMatch("error"));
});

test("the fetch fails with an error using rejects", () => {
  return expect(fetchData()).rejects.toMatch("error");
});

test("the fetch fails with an error using async/await + catch", async () => {
  expect.assertions(1);
  try {
    await fetchData();
  } catch (e) {
    expect(e).toMatch("error");
  }
});

test("the fetch fails with an error using async/await + rejects", async () => {
  await expect(fetchData()).rejects.toMatch("error");
});
