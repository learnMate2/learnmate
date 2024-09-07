import axios from "axios"

const token = "";

const custom_axios = axios.create({
    baseURL : 'http://localhost:8000/',
withCredentials:true,
    headers:{
        Authorization:token,
        Accept:"*/*",
       'Content-Type': 'multipart/form-data',
    },
    timeout:5000
})

export default custom_axios;