class JokeService {
    static getJoke( successCb, errorCb) {

        HTTP.request('GET' , 'http://api.icndb.com/jokes/random' , {} ,  successCb, errorCb);
    }
}