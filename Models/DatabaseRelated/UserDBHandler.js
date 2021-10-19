import { DATABASE_GET_LIST_USER } from "../../Constants/DatabaseConfig";
import GeneralDBHelper from "./GeneralDBHelper";

class UserDBHandler {
    constructor() {}

    static get_user(){
      const result = GeneralDBHelper.GET_REQUEST(
        DATABASE_GET_LIST_USER
        )
      return result;
    }
    
  }
  
  export default UserDBHandler;
 