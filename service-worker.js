let filesArr = ["/images/wallpaper.jpg", "/css/style.css", "/dist/appControler.js", "/dist/HTTP.js", "/dist/jokeService.js", "/"];

self.addEventListener("install", e => {
    e.waitUntil(
        addToCache()
    )
})

self.addEventListener("fetch", event => {
    const clonedRequest = event.request.clone();
    event.respondWith(
        caches
            .match(event.request)
            .then(resp => {
                if(resp) {
                    console.log(resp, clonedRequest);
                    return resp;
                }
                return fetch(clonedRequest);
            })
    )
});

function addToCache() {
    let fileStatusCache = {};
    let i = 0;

    return new Promise((resolve, reject) => {
        caches.open("assetsCache").then(function (cache) {
            filesArr.forEach(file => {
                fetch(file).then(function (response) {


                    if (!response.ok) {
                        catchFile("Not found", file)
                    }
                    else {
                        return cache.put(file, response)
                            .then(res => {
                                catchFile("OK", file)
                            },
                                err => {
                                    catchFile("Failed to cache!", file)
                                });
                    }

                })
            })
        });
        function catchFile(status, file) {
            fileStatusCache[file] = status;
            i++;
            if (i == filesArr.length) {
                resolve(fileStatusCache);
            }
        }
    })


}




