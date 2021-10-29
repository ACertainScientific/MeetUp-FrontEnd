class GeneralDBHelper {
    static async GET_REQUEST(url = "", authToken = "WanNeng") {
        // Default options are marked with *
        try {
            const response = await fetch(
                // "http://us-la-cn2-1.natfrp.cloud:23553/list-all-buildings",
                url,
                {
                    mode: "cors",
                    method: "GET",
                    headers: {
                        "Content-Type": "application/json",
                        "X-Authorization": authToken,
                    },
                }
            );
            if (!response.ok) {
                throw new Error("Something went wrong!");
            }
            const resdata = await response.json()
            return resdata['data']
        } catch {
            console.log("Failed in GET request, check DB status");
        }
    }

    // static async LOGIN_POST_REQUEST(userinputs, url = "", authToken = "WanNeng") {
    //     try {
    //         const response = await fetch(
    //             // "http://us-la-cn2-1.natfrp.cloud:23553/list-all-buildings",
    //             url,
    //             {
    //                 mode: "cors",
    //                 method: "POST",
    //                 body: {
    //                     "userName": userinputs.username,
    //                     "password": userinputs.password, 
    //                     "Content-Type": "application/json",
    //                     "X-Authorization": authToken,
    //                 },
    //             }
    //         );
    //         // NO errors in case of 404 or 500, must check the response object
    //         if (!response.ok) {
    //             throw new Error("Something went wrong!");
    //         }
    //         const resdata = await response.json()
    //         return resdata['data']
    //     } catch(e) {
    //         console.log("Failed in POST request, check DB status");
    //         console.log(e)
    //     }
    // }
}

export default GeneralDBHelper;
