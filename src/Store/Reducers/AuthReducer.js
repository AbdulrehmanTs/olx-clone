const INITIAL_STATE = {
    id1:
    {
        user: "Abdulrehman",
        email: "abdulrehman@gmail.com"
    },
    id2:
    {
        user: "Hamdan",
        email: "hamdan@gmail.com"
    },
}
const AuthReducer =  (state = INITIAL_STATE, action) => {
    console.log("AuthReducers==>", action, state)
    switch (action.type) {
        case "Set_Data":
            return (
                {   
                    ...state,
                    id3: { user: 'khan', email: 'khan@gmail.com' }
                }
            )

        default:
            return state;

    }
}
    

export default AuthReducer;
