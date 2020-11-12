import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://atd-app.firebaseio.com/',
});

export default instance;
