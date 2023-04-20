import axios from "axios";

const api = axios.create({
    baseURL: 'http://taapi/api',
})
export {api}