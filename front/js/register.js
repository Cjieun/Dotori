//import axios from '../axios';
const univ = document.querySelector('#university'); // select 학교선택
var result_univ = document.querySelector('#result'); // @ 뒤의 빈칸
var resultUniv = ""; // 대학교 메일 담을 변수을 만든다.

// 학교이메일 구분
univ.addEventListener("change", (event) => { // 학교를 선택하면
  const selectedUniv = event.target.value; // 선택한 학교의 value값을 넣고

  switch (selectedUniv) { // 선택한 학교의 value값이
    case "sangmyung": // 상명대면
      resultUniv = "sangmyung.kr"; // 해당 대학교의 이메일을 담고
      break;
    case "swu": // 서울여대
      resultUniv = "swu.ac.kr";
      break;
    case "kangnam": //강남대
      resultUniv = "kangnam.ac.kr";
      break;
    case "hufs": //한국외대
      resultUniv = "hufs.ac.kr";
      break;
    case "skuniv": // 서경대
      resultUniv = "skuniv.ac.kr";
      break;
    default: //성결대
      resultUniv = "sungkyul.ac.kr";
      break;
  }
  result_univ.textContent = resultUniv; // 대학교의 이메일이 담긴 변수를 @ 뒤에 넣는다
});


// 이름, 학교, 이메일
const myForm = document.querySelector('#myForm');

myForm.addEventListener('submit', (event) => {
  event.preventDefault();

  const name = document.querySelector('#name').value; // 이름
  const university = document.querySelector('#university').value; // 대학교 이름
  var emailId = document.querySelector('#email').value; // 이메일 앞부분
  var email = emailId + '@' + result_univ.textContent; // 이메일 전체
  const password = document.querySelector('#confirm_pw').value; // 이름

  //console.log(name, university, email);
  //console.log(full_email); // test
  
  // axios
  axios.post('http://localhost:8080/api/user/register', {
    //name: name,
    university: university,
    password: password,
    //email: email,
    email: email,
  })
  .then((response) => { // 성공
    console.log(response);
    window.location.href = './login.html';
    alert('성공!');
    // 데베에 단순 데이터 저장?
  })
  .catch((error) => { // 실패
    console.error(error);
    alert('Failed!');
  });
});

// 인증번호
function emailBtn() {
  console.log(full_email); // test

  axios.post('/api/signup/email', {
    full_email: full_email,
  })
  .then((response) => { // 성공
    console.log(response);
    alert("인증에 성공하였습니다.");
  })
  .catch((error) => { // 실패
    console.error(error);
    alert('인증번호가 다릅니다.');
  });
}

// 비밀번호 넘기기
const confirm_pw = document.querySelector('#confirm_pw').value; // 이름
const submitBtn = document.querySelector('#submitBtn'); // 이름

submitBtn.addEventListener('click', (event) => {
  axios.post('/api/user/register', {
    confirm_pw: confirm_pw,
  })
  .then((response) => { // 성공
    console.log(response);
    alert("회원가입 성공");
  })
  .catch((error) => { // 실패
    console.error(error);
    alert('회원가입 실패');
  });
});