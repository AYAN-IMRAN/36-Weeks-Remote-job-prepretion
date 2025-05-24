/*
 * Write 3 different functions that return promises that resolve after t1, t2, and t3 seconds respectively.
 * Write a function that uses the 3 functions to wait for all 3 promises to resolve using Promise.all,
 * Return a promise.all which return the time in milliseconds it takes to complete the entire operation.
 */
function wait1(t1) {
  return new Promise((resolves) => {
    setTimeout(() => resolves("t1 Done"), t1 * 1000);
  });
}

function wait2(t2) {
  return new Promise((resolves) => {
    setTimeout(() => resolves("t2 Done"), t2 * 1000);
  });
}

function wait3(t3) {
  return new Promise((resolves) => {
    setTimeout(() => resolves("t3 Done"), t3 * 1000);
  });
}

function calculateTime(t1, t2, t3) {
  const start = Date.now();

  return Promise.all([wait1(t1), wait2(t2), wait3(t3)]).then((result) => {
    const end = Date.now();
    const totalTime = end - start;

    console.log("All Done:", result);
    console.log(`Total Time Taken: ${totalTime} ms`);
    console.log(totalTime);
    return totalTime;
  });
}

calculateTime(1, 2, 3);

module.exports = calculateTime;
