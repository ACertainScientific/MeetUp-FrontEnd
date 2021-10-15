import { DATABASE_GET_LIST_ALL_BUILDINGS } from "../../Constants/DatabaseConfig";

class BuildingDBHandler {
    constructor() {
      
    }

    getAllBuilding = () => {
        return async (dispatch) => {
            console.log("fetching all building data");
            // any async code you want!
            try {
                console.log("Before response");
    
                let defaultPageSize = 10
                let defaultPageNum =1
    
                const response = await fetch(
                    DATABASE_GET_BUILDING_INFO_URL_GENERATOR()
                    // `http://us-la-cn2-1.natfrp.cloud:23553/list-building?page=${defaultPageNum}&page-size=${defaultPageSize}&name=`,
                    // DATABASE_GET_BUILDING_INFO_URL,
                    ,{
                        mode: "cors",
                        method: "GET",
                        headers:{
                            'Content-Type': 'application/json',
                            'X-Authorization':"WanNeng"
                        }
                    }
                );
                console.log("After response");
                console.log(response);
    
                if (!response.ok) {
                    throw new Error("Something went wrong!");
                }
    
                const resData = await response.json();
                console.log(resData);
    
                dispatch({ type: FETCH_AND_UPDATE_LOGIN_STATUS });
            } catch (err) {
                // send to custom analytics server
                throw err;
            }
        };
    };
    
  }
  
  export default BuildingDBHandler;
 