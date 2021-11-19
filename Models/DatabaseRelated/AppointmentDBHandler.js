import {
    DATABASE_GET_LIST_APPOINTMENT,
} from "../../Constants/DatabaseConfig";
import GeneralDBHelper from "./GeneralDBHelper";

class AppointmentDBHandler {
    constructor() {}
    // static list_all_appointments(authToken = "WanNeng") {
    //     const result = GeneralDBHelper.GET_REQUEST(
    //         DATABASE_GET_LIST_ALL_APPOINTMENTS,
    //         authToken
    //     );
    //     return result;
    // }
    // static list_all_appointments_like(pattern, authToken = "WanNeng") {
    //     const result = GeneralDBHelper.GET_REQUEST(
    //         DATABASE_GET_LIST_ALL_APPOINTMENTS + pattern,
    //         authToken
    //     );
    //     return result;
    // }
    static list_appointment(
        pageNum,
        pageSize,
        roomId,
        userId,
        fromYear,
        toYear,
        fromMonth,
        toMonth,
        fromDate,
        toDate,
        startTime,
        endTime,
        authToken = "WanNeng"
    ) {
        const result = GeneralDBHelper.GET_REQUEST(
            DATABASE_GET_LIST_ROOM(
                pageNum,
                pageSize,
                roomId,
                userId,
                fromYear,
                toYear,
                fromMonth,
                toMonth,
                fromDate,
                toDate,
                startTime,
                endTime
            ),
            authToken
        );
        return result;
    }

    static detail_appointment(id, authToken = "WanNeng") {
        const result = GeneralDBHelper.GET_REQUEST(
            DATABASE_GET_DETAIL_APPOINTMENT + id,
            authToken
        );
        return result;
    }
}

export default AppointmentDBHandler;