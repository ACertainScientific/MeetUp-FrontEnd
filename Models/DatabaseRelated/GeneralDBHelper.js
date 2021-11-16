class GeneralDBHelper {
    static async GET_REQUEST(url = "", authToken) {
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
            const resdata = await response.json();
            return resdata["data"];
        } catch {
            console.log("Failed in GET request, check DB status");
        }
    }

    static async POST_REQUEST(userinputs, url = "") {
        let body_params = {
            ...userinputs,
            type: userinputs.type
        }
        try {
            const response = await fetch(url, {
                mode: "cors",
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(body_params),
            });
            // NO errors in case of 404 or 500, must check the response object
            if (!response.ok) {
                throw new Error("Something went wrong during POST request!");
            }
            const resdata = await response.json();
            const header = response.headers
            for (var pair of response.headers.entries()) {
                try{
                    console.log(pair[0] + ": " + pair[1]);
                }catch{
                    console.error("POST failed with header: ",pair[0])
                }
                
            }
            return [resdata, header];
        } catch (e) {
            console.log("Failed in POST request, check DB status");
            console.log(e);
        }
    }
}

export default GeneralDBHelper;
