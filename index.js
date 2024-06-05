const { Worker, isMainThread } = require("worker_threads");

console.log("isMainThread :", !!isMainThread);

if (isMainThread) {
  // This code runs in the main thread
  const workerV1 = new Worker("./workerThread.js");
  const workerV2 = new Worker("./workerThreadV2.js");

  // Listen for messages from the worker thread
  workerV1.on("message", (message) => {
    console.log("Received message from workerV1:", message);
  });
  workerV2.on("message", (message) => {
    console.log("Received message from workerV2:", message);
  });

  // Send a message to the worker thread
  workerV1.postMessage("Hello from the main thread! workerV1");
  workerV2.postMessage("Hello from the main thread! workerV1");
}
