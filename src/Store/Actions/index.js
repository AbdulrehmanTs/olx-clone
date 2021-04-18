const set_data = (data) =>{
    return (dispatch) => {
        dispatch({type: "Set_Data", payload: data})
    }
}

const get_data = ()=>{
    return (dispatch)=>{
        dispatch({type: "Get_Data"})
    }
}

export {
    set_data,
    get_data
}