import { DATABASE_GET_LIST_USER } from "../../Constants/DatabaseConfig";
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
    //username : test1
    // password: 12345678
    
}
  
export default UserDBHandler;
 