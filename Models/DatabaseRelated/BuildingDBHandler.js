import { DATABASE_GET_LIST_ALL_BUILDINGS } from "../../Constants/DatabaseConfig";
import GeneralDBHelper from "./GeneralDBHelper";

class BuildingDBHandler {
    constructor() {
      
    }
    static async get_all_building(){
      return GeneralDBHelper.GET_REQUEST(DATABASE_GET_LIST_ALL_BUILDINGS)
    }

  }  

  export default BuildingDBHandler;
