let coins = 10;
const updateCoinDisplay = () => {
    document.querySelector("#cost").innerHTML = `💸: ${coins}`;
}

const handleClick = () => {
    const costperplay = 1;


    if (coins >= costperplay) {
        document.addEventListener("DOMContentLoaded", () => {
            //  dom 생성후 가져오기
            const upDownImg = document.getElementById("img1");
            const numInput = document.getElementById("num1");
            const bt = document.querySelector("button");
            const msg = document.getElementById("msg")

            if (numInput == "") {
                numInput.focus();
                return;
            }

            //변수설정
            let n;
            let flag = false; // 플래그를 폴스로 기본 설정
            bt.addEventListener("click", (e) => {
                e.preventDefault();
                //랜덤 수 생성
                if (!flag) {
                    n = Math.floor(Math.random() * 100) + 1; //1~100
                    console.log("n=", n);
                    flag = true;
                    //초기화
                    numInput.style.display = "inline";
                    bt.innerHTML = "확인";
                    numInput.value = "";
                    numInput.focus();
                }
                // 이프문에 부리안이 트루 폴스 구분할 필요 없다 자동 

                numInput.focus();

                //숫자비교
                if (n === parseInt(numInput.value)) { // 타입까지 맞을려면 parseInt
                    msg.innerHTML = "<span>정답</span>"
                    upDownImg.setAttribute("src", "./img/good.png")
                    numInput.style.display = "none";
                    bt.innerHTML = "재시작";
                    flag = false;

                }
                else if (n > numInput.value) {
                    msg.innerHTML = "<span>업</span>"
                    upDownImg.setAttribute("src", "./img/up.png")
                }
                else if (n < numInput.value) {
                    msg.innerHTML = "<span>다운</span>"
                    upDownImg.setAttribute("src", "./img/down.png")
                }


            });
            coins -= costperplay;
            updateCoinDisplay();
        });


    }
    else {
        alert("기회가 부족합니다");
    }


};