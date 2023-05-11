import axios from 'axios';

export const api = axios.create({
  baseURL: 'http://ec2-52-1-25-78.compute-1.amazonaws.com:8080/api/v1',
});
