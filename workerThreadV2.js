const { parentPort, isMainThread, threadId } = require("node:worker_threads");

console.log("isMainThread V2 :", !!isMainThread);
console.log("threadId V2 :", threadId);

let j = 0;
for (let i = 0; i < 10_000_000; i++) {
  j++;
}

parentPort.postMessage("V2: " + j);

setTimeout(() => {
  console.log("V2 After 1000ms");
}, 1000);
