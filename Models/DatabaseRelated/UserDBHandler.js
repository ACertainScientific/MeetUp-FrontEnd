import { DATABASE_GET_LIST_USER } from "../../Constants/DatabaseConfig";
import GeneralDBHelper from "./GeneralDBHelper";

class UserDBHandler {
    constructor() {
      
    }
    static async get_user(){
      return GeneralDBHelper.GET_REQUEST(DATABASE_GET_LIST_USER)
    }
    
  }
  
  export default UserDBHandler;
 