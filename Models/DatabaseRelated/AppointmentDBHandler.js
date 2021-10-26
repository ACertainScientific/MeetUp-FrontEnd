// import {
//     DATABASE_GET_LIST_ALL_APPOINTMENTS,
//     DATABASE_GET_LIST_APPOINTMENTS,
//     DATABASE_GET_DETAIL_APPOINTMENTS
// } from "../../Constants/DatabaseConfig";
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


    // static list_appointments(
    //     authToken = "WanNeng"
    // ) {
    //     const result = GeneralDBHelper.GET_REQUEST(
    //         DATABASE_GET_LIST_APPOINTMENTS(),
    //         authToken
    //     );
    //     return result;
    // }

    // static detail_appointment(id, authToken = "WanNeng") {
    //     const result = GeneralDBHelper.GET_REQUEST(
    //         DATABASE_GET_DETAIL_APPOINTMENTS + id,
    //         authToken
    //     );
    //     return result;
    // }
}

export default AppointmentDBHandler;