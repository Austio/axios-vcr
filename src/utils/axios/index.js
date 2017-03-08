import axios from 'axios';

const baseInstance = axios.create({
  validateStatus: status => status > 199 && status < 305,
});

export default baseInstance;
