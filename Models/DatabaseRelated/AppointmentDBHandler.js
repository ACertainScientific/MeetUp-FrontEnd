import {
    DATABASE_GET_LIST_APPOINTMENT,
    DATABASE_GET_DETAIL_APPOINTMENT,
    DATABASE_GET_APPOINTMENT_ADD,
    DATABASE_GET_APPOINTMENT_UPDATE,
} from "../../Constants/DatabaseConfig";
import GeneralDBHelper from "./GeneralDBHelper";

class AppointmentDBHandler {
    constructor() {}

    static list_appointment(
        authToken,
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
    ) {
        const result = GeneralDBHelper.GET_REQUEST(
            DATABASE_GET_LIST_APPOINTMENT(
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

    static post_add_appointment(userinputs) {
        const result = GeneralDBHelper.POST_REQUEST(
            userinputs,
            DATABASE_GET_APPOINTMENT_ADD()
        );
        return result;
    }

    static post_update_appointment(userinputs) {
        const result = GeneralDBHelper.POST_REQUEST(
            userinputs,
            DATABASE_GET_APPOINTMENT_UPDATE()
        );
        return result;
    }
}

export default AppointmentDBHandler;
