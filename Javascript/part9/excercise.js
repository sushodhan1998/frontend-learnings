// function simulateAsyncTask() {
//     return new Promise((resolve) =>{
//         console.log("Task started")
//         setTimeout(function() {
//             resolve(`Task finished`)
//         }, 2000);
//     })
// }

// simulateAsyncTask()
// .then((message) => console.log(message))


function fetchDataWithCallback(callback) {
    setTimeout(function() {
        callback("Fetched data");
    }, 2000);
}

fetchDataWithCallback(function(data) {
    console.log(data);
});