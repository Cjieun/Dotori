const form = document.querySelector('#login_form');

if (form) {
  login_form.addEventListener('submit', (event) => {
    event.preventDefault();

    const name = document.querySelector('#name').value;
    const university = document.querySelector('#university').value;
    const email = document.querySelector('#email').value;

    console.log(name, university, email);
  });
} else {
  console.error('폼을 찾을 수 없습니다.');
}

// import axios from 'axios';
//const axios = require('axios');
// const a = 10;
// const b = 20;
// form.addEventListener('submit', (event) => {
//   event.preventDefault();

//   // const email = document.querySelector('#email').value;
//   // const password = document.querySelector('#password').value;

//   axios.post('/api/login', {
//     email: a,
//     password: b,
//   })
//     .then((response) => { // 성공
//       console.log(response); // test
//       window.location.href = 'home.html'; // 메인 페이지로
//       alert('Login Success!');
//     })
//     .catch((error) => { // 실패
//       console.error(error);
//       window.location.href = '#'; // 로그인 페이지 재로딩
//       alert('Login Failed!');
//     });
// });