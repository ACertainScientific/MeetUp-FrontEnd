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
}

export default GeneralDBHelper;
