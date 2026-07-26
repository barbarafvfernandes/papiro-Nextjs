import axios from 'axios';

const hygraphClient = axios.create({
    baseURL: process.env.HYGRAPH_HIGH_PERFORMANCE_URL,
});

export default hygraphClient;

