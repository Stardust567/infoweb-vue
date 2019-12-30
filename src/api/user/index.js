import axios from 'axios';

const postUser = form => axios.post('/api/v1/user/login', form).then(res => res.data);

const getUser = id => axios.get(`/api/v1/user/${id}`).then(res => res.data);

export {
  getUser,
  postUser,
};