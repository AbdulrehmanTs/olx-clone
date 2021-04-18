const INITIAL_STATE = [
    {
        id: "1",
        user: "Abdulrehman",
        email: "abdulrehman@gmail.com"
    },
    {
        id: "2",
        user: "Hamdan",
        email: "hamdan@gmail.com"
    },
]

export default (state = INITIAL_STATE, action) => {
    console.log("AuthReducers==>", action, state)
    switch (action.type) {
        case "Set_Data":
            return (
                { ...state },
                state.push({id: 3, user: "khan", email: "khan@gmail.com"})
                )

        default:
            return state;

    }
}
