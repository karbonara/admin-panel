import axios from "axios";

export const $api = axios.create({
  withCredentials: true,
  baseURL: 'http://localhost:5000/api/',
  headers: {
    crossDomain: "true",
    authorization: `Bearer ${localStorage.getItem('token')}`,
    "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
    "Access-Control-Allow-Headers": "Origin, Content-Type, Authorization, X-Auth-Token",
    "Content-Type": "application/x-www-form-urlencoded",
  },
});

