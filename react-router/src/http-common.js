import axios from "axios";

export default axios.create({
    baseURL: 'http://localhost:8890/api/v1/',
    headers: {
        'Content-type': 'application/json'
    }
});
