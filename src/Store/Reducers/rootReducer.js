const INITIAL_STATE = {
    user1: {
        name: "Abdulrehman",
        father: "Abu Tahir",
        class: "12th"
    },
    user2: {
        id: 2,
        name: "Hammad",
        father: "Hussain",
        class: "12th"
    }
}

export default (state = INITIAL_STATE, action) => {
    console.log("state from root reducer", state)
    switch (action.type) {
        case "something":
            console.log("rootReducer","function chal gya")
            break;
        default:
            return state;
    }
}
