import axios from 'axios';

//Initialize our API to request the info
const api = axios.create({
  baseURL: 'https://shielded-chamber-97646.herokuapp.com/',
  //baseURL: 'http://localhost:8080/',
});

export default api;
