const counterReducers = (state=0,action) => {
    let newState;
    switch (action.type){
        case "ADD_ONE":
            return newState = state + action.payload;
        case "SUBTRACT_ONE":
            return newState = state - action.payload;
        default:
            return state;

            
    }

}

export default counterReducers;