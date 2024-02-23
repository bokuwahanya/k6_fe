//접근자 없음

document.addEventListener("DOMContentLoaded", () => {//개발자만 확인 
    console.log("DOMContentLoaded ok"); 

    //버튼생성
    const bt3 = document.createElement("button");
    const bt3Txt = document.createTextNode("버튼3") ;

    const bt4 = document.createElement("button");
    const bt4Txt = document.createTextNode("버튼4") ;

    
    //버튼 추가하기
    document.querySelector("#btArea2").append(bt3) ;
    document.querySelector("#btArea2").append(bt4) ;
    //버튼에 택스트 추가하기
    bt3.appendChild(bt3Txt); // 텍스트를 자식 노드로 넣는다.
    bt4.appendChild(bt4Txt);

    //버튼 이벤트 달기
    bt3.addEventListener("click",() => {
        handleClick(3) ;
    });
    bt4.addEventListener("click",() => {
        handleClick(4) ;
    });

    //속성 설정
    bt3.setAttribute("id","bt3");
    bt4.setAttribute("id","bt4");

    //나중에 react 할 때 이런 식으로 한다. 몰라도 상관없다. 개념은 알고 있어라.

}); //콜백함수 = 인수로 들어가는 함수

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
// 자바습에서 쓰는 
// const : 상수 선언
// let : 변수 선언

const handleClick = (n) => {
    let msg;
    if (n == 1)
        msg = "<h2>🐶나는 강아지<h2>";
    else if ( n==2 )
        msg = "<h2>😼나는 고양이<h2>";
    else if ( n==3 )
        msg = `<h2>버튼 ${n} 이 눌려졌습니다<h2>`;
    else 
        msg = `<h2>버튼 ${n} 이 눌려졌습니다<h2>`;

    document.querySelector("#msgArea").innerHTML = msg;
}   