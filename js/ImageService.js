class ImageService {
    static getImage( successCb, errorCb) {

        HTTP.request('GET' , 'https://picsum.photos/200/300/?random' , {} ,  successCb, errorCb);
    }
}