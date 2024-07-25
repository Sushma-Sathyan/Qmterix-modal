import {AppapiConstants} from "../constants/constants";
import axios from 'axios';


const api = axios.create({
  baseURL: AppapiConstants.API_BASE_URL, // Your API base URL
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json', // You might also want to set Content-Type if you're sending JSON data
  },
});

api.interceptors.request.use(
    function (config) {
      const token = localStorage.getItem('qmetrix-token');
    if (token) {
      config.headers['qmetrix-token'] = `${token}`;
    }
    return config;
    },
    function (error) {
      return Promise.reject(error);
    }
  );
  
  // Add a response interceptor
  api.interceptors.response.use(
    function (response) {
      return response;
    },
    function (error) {
      return Promise.reject(error);
    }
  );
  export default api;
  
  
  
