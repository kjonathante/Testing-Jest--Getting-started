function stall(cb, stallTime = 3000) {
  setTimeout(cb("peanut butter"), stallTime);
}

function stallPromise(stallTime = 3000) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("peanut butter");
    }, stallTime);
  });
}
module.exports = { fetchData: stall, fetchDataPromise: stallPromise };
