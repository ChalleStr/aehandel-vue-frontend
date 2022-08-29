import axios from 'axios';

export const http =  axios.create({
    baseURL: 'http://localhost:8080/api',
    headers: {
        'content-type': 'application/json',
        'Access-Control-Allow-Origin': '*'
    }
});