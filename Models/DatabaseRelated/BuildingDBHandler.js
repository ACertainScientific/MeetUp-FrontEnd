import {
    DATABASE_GET_LIST_ALL_BUILDINGS,
    DATABASE_GET_LIST_BUILDING,
    DATABASE_GET_DETAIL_BUILDINGS
} from "../../Constants/DatabaseConfig";
import GeneralDBHelper from "./GeneralDBHelper";

class BuildingDBHandler {
    constructor() {}
    static list_all_buildings(authToken) {
        const result = GeneralDBHelper.GET_REQUEST(
            DATABASE_GET_LIST_ALL_BUILDINGS,
            authToken
        );
        return result;
    }
    static list_all_buildings_like(pattern, authToken) {
        const result = GeneralDBHelper.GET_REQUEST(
            DATABASE_GET_LIST_ALL_BUILDINGS + pattern,
            authToken
        );
        return result;
    }


    static list_building(
        buildingName,
        pageNum,
        pageSize,
        authToken
    ) {
        const result = GeneralDBHelper.GET_REQUEST(
            DATABASE_GET_LIST_BUILDING(buildingName, pageNum, pageSize),
            authToken
        );
        return result;
    }

    static detail_building(id, authToken) {
        const result = GeneralDBHelper.GET_REQUEST(
            DATABASE_GET_DETAIL_BUILDINGS + id,
            authToken
        );
        return result;
    }
}

export default BuildingDBHandler;

