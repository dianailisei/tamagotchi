class ImageService {
    static getImage( successCb, errorCb) {

        HTTP.request('GET' , 'https://picsum.photos/' , {} ,  successCb, errorCb);
    }
}

//Sa returnez un promise  si la HTTP