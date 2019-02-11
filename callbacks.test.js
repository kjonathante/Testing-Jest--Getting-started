const { fetchData } = require("./fetchData");

test("the data is peanut butter", done => {
  function callback(data) {
    expect(data).toBe("peanut butter");
    done();
  }

  fetchData(callback);
});
