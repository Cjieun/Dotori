import axios from '../../axios';

const emailBtn = document.querySelector('#email_button');
const email = document.querySelector('#email').value;


function emailBtn() {
  axios.post('/api/email', {
    email: full_email,
  })
  .then((response) => { // 성공
    console.log(response);
    window.location.href = './join02.html';
    // 데베에 단순 데이터 저장?
  })
  .catch((error) => { // 실패
    console.error(error);
    alert('Failed!');
  });
}

emailBtn.addEventListener('onclick', (event) => {
  event.preventDefault();
  
  const name = document.querySelector('#name').value;
  const university = document.querySelector('#university').value;
  
  axios.post('/api/email', {
    email: email,
  })
  .then((response) => { // 성공
    console.log(response);
    window.location.href = './join02.html';
    // 데베에 단순 데이터 저장?
  })
  .catch((error) => { // 실패
    console.error(error);
    alert('Failed!');
  });
});