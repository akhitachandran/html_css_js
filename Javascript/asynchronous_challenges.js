//asynchronous JavaScript with Event Loop
//1.Simulating Asynchronous Behavior
function simulateAsyncTask() {
    console.log("Task started");
    setTimeout(() => {
        console.log("Task finished");
    }, 2000);
}
//simulateAsyncTask();

//2.Simulate Multiple Async Tasks with Different Delays
function simulateMultipleTasks() {
    for (let i = 1; i < 4; i++) {
        setTimeout(() => {
           console.log(`Task ${i} finished`);    
        }, (i*1000));
    }
}
//simulateMultipleTasks();

//3.Async Task with Callback Function
function fetchDataWithCallback(callback) {
    setTimeout(() => {
      const data = 'Fetched data';
      function callback(data){};
    }, 2000);
  }
fetchDataWithCallback();



