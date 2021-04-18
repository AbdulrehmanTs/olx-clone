const INITIAL_STATE = {
    appName: "Olx Clone",
}

export default (state = INITIAL_STATE, action) => {
    console.log("appReducers==>",action, state)
    switch (action.type) {
        case "Set_Data":
            return {
                ...state,
                appName: action.payload,
            }
        default:
            return state;
    }
}
