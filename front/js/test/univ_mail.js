const university = document.getElementById("university"); // 대학교 선택
const result_univ = document.getElementById("result"); //
const univ_email = document.getElementById("univ_email"); // 학교 이메일 칸

university.addEventListener("change", (event) => {
  const selectedUniv = event.target.value; // 대학교 이름
  let resultUniv = ""; // 대학교 메일 담을 변수

  switch (selectedUniv) { // 대학교 이름이
    case "sangmyung": // 상명대면
      resultUniv = "sangmyung.kr"; // 상명대 메일을 담기 
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
  result_univ.textContent = resultUniv; // 담긴 대학교 메일 출력
  //univ_email.placeholderContent = resultUniv;   
});