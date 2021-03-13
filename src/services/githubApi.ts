import axios from 'axios';

const githubApi = axios.create({
  baseURL: 'https://api.github.com/'
});

export default githubApi;