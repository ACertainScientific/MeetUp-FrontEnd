// http://us-la-cn2-1.natfrp.cloud:23553/swagger-ui/index.html?configUrl=/v3/api-docs/swagger-config#/Building


export const DATABASE_HOST = "http://us-la-cn2-1.natfrp.cloud:23553"



export const DATABASE_GET_BUILDING_INFO_URL =
    DATABASE_HOST + "/list_building?page=1&page_size=10&name=";

export const DATABASE_GET_BUILDING_INFO_URL_GENERATOR = (
    pageNum = 1,
    pageSize = 10,
    buildingName = ""
) => {
    return `http://us-la-cn2-1.natfrp.cloud:23553/list-building?page=${pageNum}&page-size=${pageSize}&name=${buildingName}`;
};
