const form_like = document.getElementById("like-form");
const input = document.getElementById("input-like");
const output = document.getElementById("output-like");
const button = document.getElementById("button_like");

//저장할 데이터의 key값
const LOCAL_DATA = "like_save";
const newDATA = "likeAdd";

//input태그에 이름 입력 후 input태그를 감추고,
//텍스트가 나타나게 해주는 함수
function hiddenAndlike(name) {
  output.style.display = "block";
  form_like.style.display = "block";
  button.style.display = "block";
  button.addEventListener("click", onClick);
  localStorage.setItem(LOCAK_DATA);
  output.innerText = name;
  
}

//버튼 클릭 시, 데이터 삭제 이벤트 발생
function onClick() {
  localStorage.getItem(LOCAL_DATA);
//   console.log("hi");
  loaded();
}

//input태그에 입력 시, lacalStorage의 value값으로 저장
function onSubmit(e) {
  e.preventDefault();
  localStorage.setItem(LOCAL_DATA, input.value);
  hiddenAndlike(input.value);

  input.value = "";
}

//input태그 보이게 설정, 인사 텍스트와 버튼은 숨김.
//form에 submit 이벤트 설정
function askForlike() {
  form_like.style.display = "block";
  output.style.display = "block";
  button.style.display = "none";
  form_like.addEventListener("submit", onSubmit); //form에 submit이벤트 추가
}

// 브라우저의 localStorage에 데이터가 있을때와 없을때
//구분하여 실행 시켜줄 함수.
function loaded() {
  const data = localStorage.getItem(LOCAL_DATA);
  
  if (data === null) { // 데이터가 없을 시
    askForlike(); 
  } else {//데이터가 이미 있을 시
    askForlike();
    newDATA = localStorage.getItem(LOCAL_DATA);
    // hiddenAndlike(data); 
  }
}

//처음 실행할 init함수
function init() {
  loaded();
}

init();