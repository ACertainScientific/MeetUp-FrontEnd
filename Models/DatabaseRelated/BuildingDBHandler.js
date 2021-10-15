import {
    DATABASE_GET_LIST_ALL_BUILDINGS,
} from "../../Constants/DatabaseConfig";
import GeneralDBHelper from "./GeneralDBHelper";

class BuildingDBHandler {
    constructor() {}
    static async list_all_buildings(authToken = "WanNeng") {
        return GeneralDBHelper.GET_REQUEST(
            DATABASE_GET_LIST_ALL_BUILDINGS,
            authToken
        );
    }
    static async list_all_buildings_like(pattern, authToken = "WanNeng") {
        return GeneralDBHelper.GET_REQUEST(
          DATABASE_GET_LIST_ALL_BUILDINGS + pattern,
            authToken
        );
    }
}

export default BuildingDBHandler;
