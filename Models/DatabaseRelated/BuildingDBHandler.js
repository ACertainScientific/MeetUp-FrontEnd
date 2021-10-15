import {
    DATABASE_GET_LIST_ALL_BUILDINGS,
} from "../../Constants/DatabaseConfig";
import GeneralDBHelper from "./GeneralDBHelper";

class BuildingDBHandler {
    constructor() {}
    static list_all_buildings(authToken = "WanNeng") {
        const result = GeneralDBHelper.GET_REQUEST(
            DATABASE_GET_LIST_ALL_BUILDINGS,
            authToken
        );
        return result
    }
    static list_all_buildings_like(pattern, authToken = "WanNeng") {
        const result = GeneralDBHelper.GET_REQUEST(
          DATABASE_GET_LIST_ALL_BUILDINGS + pattern,
            authToken
        );
        return result
    }
}

export default BuildingDBHandler;
