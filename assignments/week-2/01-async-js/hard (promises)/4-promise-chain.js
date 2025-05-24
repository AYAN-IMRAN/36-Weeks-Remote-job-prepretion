/*
 * Write 3 different functions that return promises that resolve after t1, t2, and t3 seconds respectively.
 * Write a function that sequentially calls all 3 of these functions in order.
 * Return a promise chain which return the time in milliseconds it takes to complete the entire operation.
 * Compare it with the results from 3-promise-all.js
 */
// Function 1: Resolves after t1 seconds
function wait1(t) {
  return new Promise((resolve) => {
    setTimeout(() => resolve("t1 done"), t * 1000);
  });
}

// Function 2: Resolves after t2 seconds
function wait2(t) {
  return new Promise((resolve) => {
    setTimeout(() => resolve("t2 done"), t * 1000);
  });
}

// Function 3: Resolves after t3 seconds
function wait3(t) {
  return new Promise((resolve) => {
    setTimeout(() => resolve("t3 done"), t * 1000);
  });
}

// Function to calculate the total time taken (sequential)
function calculateTime(t1, t2, t3) {
  const start = Date.now(); // Start time

  // Call the functions sequentially
  return wait1(t1)
    .then((res1) => {
      console.log(res1); // Output from wait1
      return wait2(t2);
    })
    .then((res2) => {
      console.log(res2); // Output from wait2
      return wait3(t3);
    })
    .then((res3) => {
      console.log(res3); // Output from wait3
      const end = Date.now(); // End time
      const totalTime = end - start; // Time taken in ms
      console.log(`Total Time Taken (Sequential): ${totalTime} ms`);
      return totalTime;
    });
}

// Example usage: Sequentially calling the functions with times (in seconds)
calculateTime(1, 2, 3);


module.exports = calculateTime;
