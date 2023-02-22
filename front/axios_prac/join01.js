import axios from 'axios';

// const form = document.getElementById('signup-form');
// form.addEventListener('submit', async (event) => {
//   event.preventDefault();

//   const J_name = document.getElementById('J_name').value;
//   const J_univ = document.getElementById('J_univ').value;
//   const J_email = document.getElementById('J_email').value;

//   // 비밀번호와 비밀번호 확인이 일치하는지 확인
//   if (password !== confirmPassword) {
//     alert('비밀번호와 비밀번호 확인이 일치하지 않습니다.');
//     return;
//   }

//   try {
//     const response = await axios.post('/api/signup', {
//       J_name,
//       J_univ,
//       J_email
//     });
//     console.log(response.data); // 회원가입 성공
//   } catch (error) {
//     console.error(error); // 에러 메시지를 출력
//   }
// });

const form = document.querySelector('form');
const submitBtn = document.querySelector('#submitBtn');

form.addEventListener('submit', (event) => {
  event.preventDefault();
  
  const name = document.querySelector('#name').value;
  const university = document.querySelector('#university').value;
  const email = document.querySelector('#email').value;
  
  axios.post('/api/signup', {
    name: name,
    university: university,
    email: email,
  })
  .then((response) => { // 성공
    console.log(response);
    window.location.href = 'join02.html'; // url 수정 필요
    alert('Join Success!');
  })
  .catch((error) => { // 실패
    console.error(error);
    alert('Join Failed!');
  });
});