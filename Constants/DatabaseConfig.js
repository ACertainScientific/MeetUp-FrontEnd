// http://us-la-cn2-1.natfrp.cloud:23553/swagger-ui/index.html?configUrl=/v3/api-docs/swagger-config#/Building

export const DATABASE_HOST = "http://us-la-cn2-1.natfrp.cloud:23553";
//export const DATABASE_HOST = "http://pi.jackhe.online:41474";

// The Building Section

export const DATABASE_GET_LIST_ALL_BUILDINGS =
    DATABASE_HOST + "/building/list/all?name=";

// http://us-la-cn2-1.natfrp.cloud:23553/building/list?page=1&page-size=10&name=name
export const DATABASE_GET_LIST_BUILDING = (
    buildingName = "",
    pageNum = 1,
    pageSize = 10
) => {
    return (
        DATABASE_HOST +
        `/building/list?page=${pageNum}&page-size=${pageSize}&name=${buildingName}`
    );
};

// http://us-la-cn2-1.natfrp.cloud:23553/building/detail?id=4
export const DATABASE_GET_DETAIL_BUILDINGS =
    DATABASE_HOST + "/building/detail?id=";

export const DATABASE_GET_BUILDING_INFO_URL =
    DATABASE_HOST + "/list_building?page=1&page_size=10&name=";

export const DATABASE_GET_BUILDING_INFO_URL_GENERATOR = (
    pageNum = 1,
    pageSize = 10,
    buildingName = ""
) => {
    return `http://us-la-cn2-1.natfrp.cloud:23553/list-building?page=${pageNum}&page-size=${pageSize}&name=${buildingName}`;
};

// The Room Section
// http://us-la-cn2-1.natfrp.cloud:23553/room/list?page=1&page-size=2&building-id=3&floor=4
export const DATABASE_GET_LIST_ROOM = (
    roomName = "",
    buildingId,
    floor,
    pageNum = 1,
    pageSize = 10
) => {
    return (
        DATABASE_HOST +
        `/room/list?page=${pageNum}&page-size=${pageSize}&building-id=${buildingId}&floor=${floor}&room-name=${roomName}`
    );
};

// http://us-la-cn2-1.natfrp.cloud:23553/room/detail?id=123
export const DATABASE_GET_DETAIL_ROOM = DATABASE_HOST + "/room/detail?id=";

// The User Section

export const DATABASE_GET_LIST_USER = (
    name = "",
    pageNum = 1,
    pageSize = 10
) => {
    return (
        DATABASE_HOST +
        `/list-user?page=${pageNum}&page-size=${pageSize}&name=${name}`
    );
};

export const DATABASE_GET_USER_LOGIN = () => {
    return DATABASE_HOST + "/login";
};

export const DATABASE_GET_USER_SIGN_UP = () => {
    return DATABASE_HOST + "/sign-up";
};

// The Appointment Section
export const DATABASE_GET_LIST_APPOINTMENT = (
    pageNum = 1,
    pageSize = 10,
    roomId = "",
    userId = "",
    fromYear = "",
    toYear = "",
    fromMonth = "",
    toMonth = "",
    fromDate = "",
    toDate = "",
    startTime = "",
    endTime = ""
) => {
    return (
        DATABASE_HOST +
        `/appointment/list?page=${pageNum}&page-size=${pageSize}&room-id=${roomId}&start-time=${startTime}&end-time=${endTime}&user-id=${userId}&from-month=${fromMonth}&from-year=${fromYear}&from-date=${fromDate}&to-month=${toMonth}&to-year=${toYear}&to-date=${toDate}`
    );
};

export const DATABASE_GET_DETAIL_APPOINTMENT =
    DATABASE_HOST + "/appointment/detail?id=";

export const DATABASE_GET_APPOINTMENT_ADD = () => {
    return DATABASE_HOST + "/appointment/add";
};

export const DATABASE_GET_APPOINTMENT_UPDATE = () => {
    return DATABASE_HOST + "/appointment/update";
};
// The Profile Section
