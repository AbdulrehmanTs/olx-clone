const INITIAL_STATE = {
    items : [
        {
            id: 1,
            description: "Perfume",
            cost: 9000,
            date: "3 days ago"
        },
        {
            id: 2,
            description: "Perfume",
            cost: 8000,
            date: "3 days ago"
        },
        {
            id: 3,
            description: "Perfume",
            cost: 300,
            date: "3 days ago"
        },

    ]
}

export default (state = INITIAL_STATE, action) => {
    console.log("appReducers==>",action, state)
    switch (action.type) {
        case "Set_Data":
            return {
                ...state,
                items: action.payload,
            }
        default:
            return state;
    }
}
