import { 
    DATABASE_GET_LIST_USER, 
    DATABASE_GET_USER_LOGIN,
    DATABASE_GET_USER_SIGN_UP } 
from "../../Constants/DatabaseConfig";

import GeneralDBHelper from "./GeneralDBHelper";

class UserDBHandler {
    constructor() {}

    static list_user(
        name,
        pageNum,
        pageSize,
        authToken = "WanNeng"
    ){
        const result = GeneralDBHelper.GET_REQUEST(
            DATABASE_GET_LIST_USER(
                name,
                pageNum,
                pageSize
            ),
            authToken
        );
        return result;
    }

    
    // Login Post Handler
    static post_login(userinputs) {
        const result = GeneralDBHelper.POST_REQUEST(
            userinputs,
            DATABASE_GET_USER_LOGIN()
        );
        return result;
    }
    
    // Sign Up Post Handler
    static post_sign_up(userinputs) {
        const result = GeneralDBHelper.POST_REQUEST(
            userinputs,
            DATABASE_GET_USER_SIGN_UP()
        );
        return result;
    }
}
  
export default UserDBHandler;
 