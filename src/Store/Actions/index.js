const set_data = (data) =>{
    return (dispatch) => {
        dispatch({type: "SetData" , data: data})

    }
}

export {
    set_data
}