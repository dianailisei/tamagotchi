class JokeService {
    // static getJoke( successCb, errorCb) {

    //     HTTP.request('GET' , 'http://api.icndb.com/jokes/random' , {} ,  successCb, errorCb);
    // }

    // static getJoke() {
    //     return new Promise((resolve, reject) => {  
    //         HTTP.request('GET' , 'http://api.icndb.com/jokes/random' , {} ,
    //          resp =>{
    //             resolve(resp)
    //         } , err=>{
    //             reject(err)
    //         });
    //     })
    // }

    // static getJoke() {
    //     return new Promise((resolve, reject) => {
    //         HTTP.request('GET', 'http://api.icndb.com/jokes/random', {}).then(
    //             resp =>{
    //                 resolve(resp);
    //             },
    //             err =>{
    //                 reject(err);
    //             }
    //         )
    //        })
    // }

    static getJoke() {

        return HTTP.request('GET', 'http://api.icndb.com/jokes/random', {});

    }


}

