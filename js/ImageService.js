class ImageService {
    static getImage( successCb, errorCb) {

        HTTP.request('GET' , 'https://picsum.photos/list' , {} ,  successCb, errorCb);
    }
}