import axios from "axios";

export const create = async phrase => {
    const promise = axios ({
        method: 'POST',
        url: "/todos",
        baseURL: "https://todos-go.herokuapp.com/api",
        data: phrase

    })
    return promise
}