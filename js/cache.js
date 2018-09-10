if("serviceWorker" in navigator) {
    navigator.serviceWorker.register("/service-worker.js").then(resp => {
        console.log("SW succesfully registered!");
    })
}
// let filesArr = ["/css/style.css", "/js/appControler.js", "/js/HTTP.js", "/js/jokeService.js"];

// function addToCache() {
//     let fileStatusCache = {};
//     let i = 0;

//     return new Promise((resolve, reject) => {
//         caches.open("assetsCache").then(function (cache) {
//             filesArr.forEach(file => {
//                 fetch(file).then(function (response) {


//                     if (!response.ok) {
//                         catchFile("Not found", file)
//                     }
//                     else {
//                         return cache.put(file, response)
//                             .then(res => {
//                                 catchFile("OK", file)
//                             },
//                                 err => {
//                                     catchFile("Failed to cache!", file)
//                                 });
//                     }

//                 })
//             })
//         });
//         function catchFile(status, file) {
//             fileStatusCache[file] = status;
//             i++;
//             if (i == filesArr.length) {

//                 resolve(fileStatusCache);
//             }
//         }
//     })


// }

// addToCache().then(res => {
//     debugger;
//     console.log(res)
// }, err => console.log(err));


