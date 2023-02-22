import axios from 'axios';
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

  const form = document.querySelector('form');
  const submitBtn = document.querySelector('#submitBtn');

  form.addEventListener('submit', (event) => {
    event.preventDefault();
    
    const email = document.querySelector('#L_email').value;
    const password = document.querySelector('#L_pw').value;
    
    axios.post('/api/login', {
      email: email,
      password: password
    })
    .then((response) => { // 성공
      console.log(response);
      window.location.href = 'home.html'; // url 수정 필요
      alert('Login Success!');
    })
    .catch((error) => { // 실패
      console.error(error);
      alert('Login Failed!');
    });
  });