/*
 * Write a function that halts the JS thread (make it busy wait) for a given number of milliseconds.
 * During this time the thread should not be able to do anything else.
 * the function should return a promise just like before
 */

function sleep(milliseconds) {
  return new Promise(function(resolve) {
    const start = Date.now();          
    while (Date.now() - start < milliseconds) {
     
    }
    resolve();                        
  });
}

sleep(3000).then(() => {
  console.log("3 second guzar gaye (thread busy tha)");
});



module.exports = sleep;
