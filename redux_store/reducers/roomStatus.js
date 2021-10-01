import { ROOM_SANITIZED, ROOM_OCCUPIED, ROOM_UNSANITIZED } from "../actions/roomStatus";

// Step 1: Define an initial state value for the app
const initialState = {
    room_status: "SANITIZED"
};

// Step 2: Create a "reducer" function that determines what the new state
// should be when something happens in the app
// The reducer receives two arguments, the current state and an action object 
// describing what happened. When the Redux app starts up, we don't have any 
// state yet, so we provide the initialState as the default value for this reducer
function roomStatusReducer(state = initialState, action) {
    // Reducers usually look at the type of action that happened
    // to decide how to update the state

    // Based on the type of the action, we either need to return a brand-new object 
    // to be the new state result, or return the existing state object if nothing should 
    // change. Note that we update the state immutably by copying the existing state 
    // and updating the copy, instead of modifying the original object directly.
    switch (action.type) {
        case ROOM_SANITIZED:
            return { ...state, room_status: action.roomSanitized };
        case ROOM_OCCUPIED:
            return { ...state, room_status: action.roomOccupied };
        case ROOM_UNSANITIZED:
            return { ...state, room_status: action.roomUnsanitized };
        default:
            // If the reducer doesn't care about this action type,
            // return the existing state unchanged
            return state;
    }
};

export default roomStatusReducer;