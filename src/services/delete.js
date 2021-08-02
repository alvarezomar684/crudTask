import axios from "axios";

export const deleteToDo = async id => {
    const promise = await axios({
        method: 'DELETE',
        url: `/todos/${id}`,
        baseURL: "https://todos-go.herokuapp.com/api",
    })

    return promise
}