const form = document.getElementById('signup-form');
form.addEventListener('submit', async (event) => {
  event.preventDefault();

  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;
  const confirmPassword = document.getElementById('password-confirm').value;

  // 비밀번호와 비밀번호 확인이 일치하는지 확인
  if (password !== confirmPassword) {
    alert('비밀번호와 비밀번호 확인이 일치하지 않습니다.');
    return;
  }

  try {
    const response = await axios.post('/api/signup', {
      email,
      password
    });
    console.log(response.data); // 회원가입 성공
  } catch (error) {
    console.error(error); // 에러 메시지를 출력
  }
});