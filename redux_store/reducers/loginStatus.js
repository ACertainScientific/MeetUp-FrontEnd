import { TOGGLE_LOGIN_STATUS } from "../actions/loginStatus";
import { FETCH_AND_UPDATE_LOGIN_STATUS } from "../actions/loginStatus";

const initialState = {
    logged_in: "NOT LOGGED IN",
};

const loginStatusReducer = (state = initialState, action) => {
    switch (action.type) {
        case TOGGLE_LOGIN_STATUS:
            return { ...state, logged_in: action.loginStatus };

        case FETCH_AND_UPDATE_LOGIN_STATUS:
            return { ...state, logged_in: action.loginStatus };

        default:
            return state;
    }
};

export default loginStatusReducer;
