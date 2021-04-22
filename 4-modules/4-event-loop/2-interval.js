setInterval(() => {
  console.log('Hello Event Loop!!');
}, 5000);
//Every node process start up the event loop,but if the process has no async operations to perform, the event loop will exit and the os will terminate that node process
