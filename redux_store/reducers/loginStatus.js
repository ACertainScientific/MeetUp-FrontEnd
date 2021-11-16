// import { TOGGLE_LOGIN_STATUS } from "../actions/loginStatus";
// import { FETCH_AND_UPDATE_LOGIN_STATUS } from "../actions/loginStatus";
import { LOGIN_WITH_USERNAME_AND_PASSWORD, UPDATE_TOKEN } from "../actions/loginStatus";

const initialState = {
    logged_in: false,
    token: null,
    token_valid_through: null,
    username: null,
};

const loginStatusReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOGIN_WITH_USERNAME_AND_PASSWORD: {
            console.log("LOGIN REDUCER GETTING RESPONSE:");
            const myToken = action.response[0]["data"]["auth"];
            console.log("Getting token", myToken);
            const newState = {
                ...state,
                logged_in: true,
                token: myToken,
                token_valid_through: null,
                username: action.username,
            };
            console.log("new State:", newState);
            return newState;
        }

        case UPDATE_TOKEN: {
            const newState = {
                ...state,
                token: action.newToken
            }
            return newState
        }

        // case TOGGLE_LOGIN_STATUS:
        //     return { ...state, logged_in: action.loginStatus };

        // case FETCH_AND_UPDATE_LOGIN_STATUS:
        //     return state
        //     // return { ...state, logged_in: action.loginStatus };

        default:
            return state;
    }
};

export default loginStatusReducer;
