import { 
    DATABASE_GET_LIST_USER, 
    DATABASE_GET_USER_LOGIN } 
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

    
    // Post Handler
    // username : test1
    // password: 12345678
    static post_login(userinputs) {
        const result = GeneralDBHelper.LOGIN_POST_REQUEST(
            userinputs,
            DATABASE_GET_USER_LOGIN()
        );
        return result;
    }
    
}
  
export default UserDBHandler;
 