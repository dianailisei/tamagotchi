class HTTP {
    static request(
        method,
        url,
        headers = { 'content-type': 'application/json' },
        payload = undefined
    ) {
        return new Promise((resolve, reject) => {
            let xhr = new XMLHttpRequest();

            xhr.open(method, url);
            if (headers !== null) {
                Object.keys(headers).forEach(key => {
                    xhr.setRequestHeader(key, headers[key]);
                });
            }

            xhr.addEventListener('load', function onLoad() {
                var arr = xhr
                    .getAllResponseHeaders()
                    .trim()
                    .split(/[\r\n]+/);

                var headerMap = {};
                arr.forEach(function (line) {
                    var parts = line.split(': ');
                    var header = parts.shift();
                    var value = parts.join(': ');
                    headerMap[header] = value;
                });

                let resp;

                try {
                    resp = JSON.parse(xhr.response);
                }
                catch (e) {
                    resp = xhr.response;
                }

                switch (xhr.status) {
                    case 200:
                        if (xhr.response !== '') {
                            resolve(resp, headerMap);
                        } else {
                            resolve(null, headerMap);
                        }
                        break;
                    default:
                        if (xhr.response !== '') {
                            reject(
                                resp,
                                xhr.status,
                                headerMap
                            );
                        } else {
                            reject(null, xhr.status, headerMap);
                        }

                        break;
                }
            });

            xhr.addEventListener('error', function onError() {
                reject('Network error');
            });

            if (payload !== undefined) {
                xhr.send(JSON.stringify(payload));
            } else {
                xhr.send();
            }
        })

    }
}


// if (xhr.status === 200) {
//     resolve(successCb);
// }
// else {
//     reject(errorCb);
// }