// http://us-la-cn2-1.natfrp.cloud:23553/swagger-ui/index.html?configUrl=/v3/api-docs/swagger-config#/Building

export const DATABASE_HOST = "http://us-la-cn2-1.natfrp.cloud:23553";

// The Building Section
export const DATABASE_GET_LIST_ALL_BUILDINGS =
    DATABASE_HOST + "/list-all-buildings?name=";


export const DATABASE_GET_LIST_BUILDING = (
    buildingName = "",
    pageNum = 1,
    pageSize = 10
) => {
    return (
        DATABASE_HOST +
        `/list-building?page=${pageNum}&page-size=${pageSize}&name=${buildingName}`
    );
};

export const DATABASE_GET_DETAIL_BUILDINGS =
    DATABASE_HOST + "/detail-building?id=";

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

export const DATABASE_GET_LIST_ROOM = (
    roomName = "",
    buildingId,
    floor,
    pageNum = 1,
    pageSize = 10
) => {
    return (
        DATABASE_HOST +
        `/list-room?page=${pageNum}&page-size=${pageSize}&building-id=${buildingId}&floor=${floor}&room-name=${roomName}`
    );
};

export const DATABASE_GET_DETAIL_ROOM =
    DATABASE_HOST + "/detail-room?id=";

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
}

