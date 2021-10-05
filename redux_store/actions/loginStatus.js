export const TOGGLE_LOGIN_STATUS = "TOGGLE_LOGIN_STATUS";
export const FETCH_AND_UPDATE_LOGIN_STATUS = "FETCH_AND_UPDATE_LOGIN_STATUS";
import DATABASE_GET_BUILDING_INFO_URL from "../../Constants/DatabaseConfig";

export const toggleLoginStatus = (input_str) => {
    return { type: TOGGLE_LOGIN_STATUS, loginStatus: input_str };
};

export const fetchLoginStatus = () => {
    return async (dispatch) => {
        console.log("fetching building data");
        // any async code you want!
        try {
            console.log("Before response");
            const response = await fetch(
                "http://us-or-cera-2.natfrp.cloud:23553/list_building?page=1&page_size=10&name=",
                // DATABASE_GET_BUILDING_INFO_URL,
                {
                    mode: "cors",
                    method: "GET",
                }
            );
            console.log("After response");
            console.log(response);

            if (!response.ok) {
                throw new Error("Something went wrong!");
            }

            const resData = await response.json();
            console.log(resData);

            dispatch({ type: FETCH_AND_UPDATE_LOGIN_STATUS });
        } catch (err) {
            // send to custom analytics server
            throw err;
        }
    };
};
