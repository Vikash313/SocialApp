export const addCard = (data) => {
    return {
        type: "ADD_CARD",
        payload:data
    }
}

export const fetchPost = (data) =>  {
    return {
        type:"FETCH_POST",
        payload:data
    }
}

export const editPost = () => {
    return {
        type: "EDIT_POST"
    }
}

export const updatePost = (data) => {
    return {
        type: "UPDATE_POST",
        payload:data
    }
}

export const deletePost = () => {
    return {
        type: "DELETE_POST"
    }

}