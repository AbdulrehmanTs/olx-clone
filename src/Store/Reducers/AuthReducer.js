const INITIAL_STATE = {
    users: [
        {
            userName: "Abdulrehman",
            id: "42201-6131060-7",
        }
    ]

}

export default (state = INITIAL_STATE, action) => {
    console.log("authReducer==>", action)
    return state;
}
