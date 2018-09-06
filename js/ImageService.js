class ImageService {
    // static getImage( successCb, errorCb) {

    //     HTTP.request('GET' , 'https://picsum.photos/' , {} ,  successCb, errorCb);
    // }

    static getImage(successCb, errorCb) {
        return new Promise((resolve, reject) => {
            HTTP.request('GET' , 'https://picsum.photos/' , {} ,  successCb, errorCb);
    
            if (xhr.status === 200) {
                resolve(successCb);
            }
            else {
                reject(errorCb);
            }
        })
    }
}

//Sa returnez un promise  si la HTTP

