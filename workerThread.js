const { parentPort, isMainThread, threadId } = require("node:worker_threads");

console.log("isMainThread V1 :", !!isMainThread);
console.log("threadId V1 :", threadId);

let j = 0;
for (let i = 0; i < 50_000_000; i++) {
  j++;
}

parentPort.postMessage("V1: " + j);

setTimeout(() => {
  console.log("V1 After 1000ms");
}, 1000);
