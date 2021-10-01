export const TOGGLE_LOGIN_STATUS = "TOGGLE_LOGIN_STATUS";

export const toggleLoginStatus = (input_str) => {
    return { type: TOGGLE_LOGIN_STATUS, loginStatus: input_str };
};
