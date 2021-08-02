import axios from "axios";

export const read = async () => {
    const res = await axios({
        method: "GET",
        url: "/todos",
        baseURL: "https://todos-go.herokuapp.com/api"    
    })  

    return res.data    
}

