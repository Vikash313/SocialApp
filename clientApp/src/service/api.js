import Axios from "axios";
let API_URL
export const fetchData = () => {
    return Axios.get('http://localhost:5000/user/fetch-data')
        .then(response => response)
        .catch((error) => error.response);
}

export const addData = (data) => {
    return Axios.post('http://localhost:5000/user/add-data',data)
        .then(response => response)
        .catch((error) => error.response);
}

export const singleData = (payload) => {
    return Axios.get(`${API_URL}/user/fetch-single-data/:id`, payload)
        .then(response => response)
        .catch((error) => error.response);
}

export const updateData = (id, payload)  => {
    return Axios.patch(`http://localhost:5000/user/update-data/${id}`,payload)
    .then(response => response)
    .catch((error) => error.response)
}

export const removeCard = (id, payload) => {
    return Axios.delete(`http://localhost:5000/user/delete-data/${id}`, payload)
        .then(response => response)
        .catch((error) => error.response);
}