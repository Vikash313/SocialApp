const initialState = {
    list : []
}

const postReducer = (state = initialState, action ) => {
    switch(action.type){
        case "ADD_CARD":
            return {
                ...state,
                list:action.payload
            }        
        case "FETCH_POST":
            return {
                ...state,
                list: action.payload      
            }
        case "UPDATE_POST":
            console.log("action",action)
            return {
                ...state,
                list: action.payload
            }
        case "DELETE_POST":
            return {
                ...state,
                list:action.payload
            }
        default: return state;
    }

}

export default postReducer