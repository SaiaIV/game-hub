import axios from "axios";

export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params: {
        key: 'a30c8607d97a49a783c3fcbceba26ee9'
    }
})