//접근자 없음
// 자바 스크립트 함수 만들기

/*함수 작성 1
function handleClick(n) {
    //메세지 영역 가져오기 1
   // document.getElementById("msgArea").innerHTML = "안녕하세요" ;

   //메세지 영역 가져오기 2
  
//    document.querySelector("#msgArea").innerHTML = "<h2>버튼" + n + "<h2>안녕하세요<h2>";

   document.querySelector("#msgArea").innerHTML = `<h2>버튼  ${n}  <h2>안녕하세요<h2>`;
   //백틱 문자열

}
*/

// 함수 작성 2 : 화살표 함수
// const : 상수 선언
// let : 변수 선언

const handleClick = (n) => {
    let msg;
    if (n == 1)
        msg = "<h2>안녕하시요<h2>";
    else
        msg = "<h2>안녕히 가시요<h2>";

    document.querySelector("#msgArea").innerHTML = msg;
}   