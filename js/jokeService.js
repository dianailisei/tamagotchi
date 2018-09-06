class JokeService {
    // static getJoke( successCb, errorCb) {

    //     HTTP.request('GET' , 'http://api.icndb.com/jokes/random' , {} ,  successCb, errorCb);
    // }

    static getJoke() {
        return new Promise((resolve, reject) => {  
                resolve(HTTP.request('GET' , 'http://api.icndb.com/jokes/random' , {} ));
          
                reject();
    
        })
    }

}

