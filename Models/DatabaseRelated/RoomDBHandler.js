import {
    DATABASE_GET_LIST_ROOM,
    DATABASE_GET_DETAIL_ROOM,
} from "../../Constants/DatabaseConfig";
import GeneralDBHelper from "./GeneralDBHelper";

class RoomDBHandler {
    constructor() {}
    static list_room(
        roomName,
        buildingId,
        floor,
        pageNum,
        pageSize,
        authToken = "WanNeng"
    ) {
        const result = GeneralDBHelper.GET_REQUEST(
            DATABASE_GET_LIST_ROOM(
                roomName,
                buildingId,
                floor,
                pageNum,
                pageSize
            ),
            authToken
        );
        return result;
    }
    
    static detail_room(id, authToken = "WanNeng") {
        const result = GeneralDBHelper.GET_REQUEST(
            DATABASE_GET_DETAIL_ROOM + id,
            authToken
        );
        return result;
    }
}

export default RoomDBHandler;
