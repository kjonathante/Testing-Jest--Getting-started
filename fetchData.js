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

function stallPromiseReject(stallTime = 2000) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      reject("error");
    }, stallTime);
  });
}

module.exports = {
  fetchData: stall,
  fetchDataPromise: stallPromise,
  fetchDataPromiseReject: stallPromiseReject
};
