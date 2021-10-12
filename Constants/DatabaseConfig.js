export const DATABASE_GET_BUILDING_INFO_URL =
    "http://us-la-cn2-1.natfrp.cloud:23553/list_building?page=1&page_size=10&name=";

export const DATABASE_GET_BUILDING_INFO_URL_GENERATOR = (
    pageNum = 1,
    pageSize = 10,
    buildingName = ""
) => {
    return `http://us-la-cn2-1.natfrp.cloud:23553/list-building?page=${pageNum}&page-size=${pageSize}&name=${buildingName}`;
};
