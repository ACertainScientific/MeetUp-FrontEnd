export const TOGGLE_LOGIN_STATUS = "TOGGLE_LOGIN_STATUS";
export const FETCH_AND_UPDATE_LOGIN_STATUS = "FETCH_AND_UPDATE_LOGIN_STATUS"

export const toggleLoginStatus = (input_str) => {
    return { type: TOGGLE_LOGIN_STATUS, loginStatus: input_str };
};


export const fetchLoginStatus = (username) => {

    return async dispatch => {

        // Execute async code before returning
        const response = await fetch("someurl", {
            method: 'POST',
            headers: {
                'Content-Type': "application/json"
            },
            body: JSON.stringify({
                username
            })
        })

        const responseData = await response.json()
        console.log(responseData)

        dispatch({
            type: CREATE_PRODUCT,
            loginStatus: responseData.loginStatus
        })
    }

}