import axios from 'axios';

axios.interceptors.request.use((request) => {
  if(localStorage.jwtToken) {
    request.headers.Authorization = localStorage.jwtToken
  }
  return request;
},error => {
  return Promise.reject(error);
})

axios.interceptors.response.use(response => {
  return response;
},error => {
  console.log(error);
  const {status} = error.response;
  if(status == 401) {
    localStorage.removeItem("jwtToken");
  }
  return Promise.reject(error);
});

export default axios;