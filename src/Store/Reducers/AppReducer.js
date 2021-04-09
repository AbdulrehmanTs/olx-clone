const INITIAL_STATE = {
    AppName: "Olx Clone",
}

export default (state = INITIAL_STATE, action ) => {
    console.log("AppReducer==> ", action)
    switch (action.type){
        case "SetData":
            return {
                ...state, 
                AppName: action.data
            }
    }
    return state;
}
