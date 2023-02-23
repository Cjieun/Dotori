import axios from 'axios';

const login_form = document.querySelector('#login_form');
const submitBtn = document.querySelector('#submitBtn');

login_form.addEventListener('submit', (event) => {
  event.preventDefault();

  const email = document.querySelector('#email').value;
  const password = document.querySelector('#password').value;

  axios.post('/api/user/login', {
    email: email,
    password: password
  })
    .then((response) => { // 성공
      console.log(response); // test
      window.location.href = 'home.html'; // 메인 페이지로
      alert('Login Success!');
    })
    .catch((error) => { // 실패
      console.error(error);
      window.location.href = '#'; // 로그인 페이지 재로딩
      alert('Login Failed!');
    });
});


//const axios = require('axios');
/* 
const form = document.getElementById('login-form');

form.addEventListener('submit', async (event) => {
  event.preventDefault();

  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;

  try {
    const response = await axios.post('/api/login', {
      username,
      password
    });
    console.log(response.data); // 로그인 성공
  } catch (error) {
    console.error(error); // 에러 메시지를 출력
  }
});
*/