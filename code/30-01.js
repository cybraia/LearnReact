//api configuration

import axios from "axios";

const axiosInstance = axios.create({
    baseURL: "http://localhost:8000",
    // headers can be added here
})

export const GET = (url, headers) => {
    return axiosInstance({
        method: "get",
        url: url,
        headers: headers || {},
        //timeout: timeouts.TWO_MIN,
    });
};

//for POST, PUT, PATCH, DELETE - body is an additional parameter
export const POST = (url, body, headers) => {
    return axiosInstance({
        method: "post",
        url: url,
        headers: headers || {},
        data: body || {},
        //timeout: timeouts.TWO_MIN,
    });
}
