import axios from "axios";

const instance = axios.create({
    baseURL: "http://localhost:4000/api/user",
    timeout: 1000
});

export default instance;