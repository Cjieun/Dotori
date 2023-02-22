import axios from 'axios';

const form = document.getElementById('signup-form');
form.addEventListener('submit', async (event) => {
  event.preventDefault();

  const J_pw = document.getElementById('J_pw').value;
  const J_pw_confirm = document.getElementById('J_pw_confirm').value;

  // 비밀번호와 비밀번호 확인이 일치하는지 확인
  if (J_pw !== J_pw_confirm) {
    alert('비밀번호와 비밀번호 확인이 일치하지 않습니다.');
    $('.false_pw').css('display', 'inline');
    return;
  }

  try {
    const response = await axios.post('/api/signup', {
      J_pw,
    });
    console.log(response.data); // 회원가입 성공
    window.location.href = './join_success.html';
  } catch (error) {
    console.error(error); // 에러 메시지를 출력
  }
});

// const form = document.querySelector('form');
// const submitBtn = document.querySelector('#submitBtn');

// form.addEventListener('submit', (event) => {
//   event.preventDefault();
  
//   const J_name = document.querySelector('#J_name').value;
//   const J_univ = document.querySelector('#J_univ').value;
//   const J_email = document.querySelector('#J_email').value;
  
//   axios.post('/api/signup', {
//     J_name: J_name,
//     J_univ: J_univ,
//     J_email: J_email,
//   })
//   .then((response) => { // 성공
//     console.log(response);
//     window.location.href = 'join02.html'; // url 수정 필요
//     alert('Join Success!');
//   })
//   .catch((error) => { // 실패
//     console.error(error);
//     alert('Join Failed!');
//   });
// });