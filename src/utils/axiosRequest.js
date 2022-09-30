import axios from 'axios';

const request = axios.create({
  baseURL: 'https://tiktok.fullstack.edu.vn/api/',
});

export const get = async (path, options = {}) => {
  const response = await request.get(path, options);
  return response.data;
};

export const authRequest = axios.create({
  baseURL: 'http://localhost:5000/api/',
});

export const postApiLogin = async (path, options = {}) => {
  const response = await authRequest.post(path, options);
  return response;
};

export default request;
