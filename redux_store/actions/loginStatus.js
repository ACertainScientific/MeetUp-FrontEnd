export const LOGIN_WITH_USERNAME_AND_PASSWORD =
    "LOGIN_WITH_USERNAME_AND_PASSWORD";
import UserDBHandler from "../../Models/DatabaseRelated/UserDBHandler";

export const loginHandler = (username, password) => {
    return async (dispatch) => {
        try {
            console.log("User signing in with username ", username);
            const response = await UserDBHandler.post_login({
                username: username,
                password: password,
                type: "1"
                // username: "test1",
                // password: "12345678",
            });
            console.log("Response: ")
            console.log(response);
            // if (!response.ok) {
            //     console.log("Responde not OK")
            //     throw new Error("Failed to log in / HTTP failure");
            // }

            dispatch({ type: LOGIN_WITH_USERNAME_AND_PASSWORD });
        } catch {
            
        }
    };
};

// export const TOGGLE_LOGIN_STATUS = "TOGGLE_LOGIN_STATUS";
// export const FETCH_AND_UPDATE_LOGIN_STATUS = "FETCH_AND_UPDATE_LOGIN_STATUS";
// import DATABASE_GET_BUILDING_INFO_URL, { DATABASE_GET_BUILDING_INFO_URL_GENERATOR } from "../../Constants/DatabaseConfig";

// export const toggleLoginStatus = (input_str) => {
//     return { type: TOGGLE_LOGIN_STATUS, loginStatus: input_str };
// };

// export const fetchLoginStatus = () => {
//     return async (dispatch) => {
//         console.log("fetching building data");
//         // any async code you want!
//         try {
//             console.log("Before response");

//             let defaultPageSize = 10
//             let defaultPageNum =1

//             const response = await fetch(
//                 DATABASE_GET_BUILDING_INFO_URL_GENERATOR()
//                 // `http://us-la-cn2-1.natfrp.cloud:23553/list-building?page=${defaultPageNum}&page-size=${defaultPageSize}&name=`,
//                 // DATABASE_GET_BUILDING_INFO_URL,
//                 ,{
//                     mode: "cors",
//                     method: "GET",
//                     headers:{
//                         'Content-Type': 'application/json',
//                     }
//                 }
//             );
//             console.log("After response");
//             console.log(response);

//             if (!response.ok) {
//                 throw new Error("Something went wrong!");
//             }

//             const resData = await response.json();
//             console.log(resData);

//             dispatch({ type: FETCH_AND_UPDATE_LOGIN_STATUS });
//         } catch (err) {
//             // send to custom analytics server
//             throw err;
//         }
//     };
// };
