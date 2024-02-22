//접근자 없음
// 자바 스크립트 함수 만들기
function handleClick(n) {
    //메세지 영역 가져오기 1
   // document.getElementById("msgArea").innerHTML = "안녕하세요" ;

   //메세지 영역 가져오기 2
  
//    document.querySelector("#msgArea").innerHTML = "<h2>버튼" + n + "<h2>안녕하세요<h2>";

   document.querySelector("#msgArea").innerHTML = `<h2>버튼  ${n}  <h2>안녕하세요<h2>`;
   //백틱 문자열

}