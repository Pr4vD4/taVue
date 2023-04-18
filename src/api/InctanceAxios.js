import axios from "axios";

const api = axios.create({
    BaseURL: 'http://taapi/api',
    headers: {

    }
})
export {api}