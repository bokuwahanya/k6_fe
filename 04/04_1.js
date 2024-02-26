let coins = 0;
const updateCoinDisplay = () => {
    document.querySelector("#coinCount").innerHTML = `💸: ${coins}`;
}

const handleClick = () => {
    const costPerPlay = 1; // 한 번 플레이당 차감되는 코인의 양

    if (coins >= costPerPlay) {
        // 이미지 무작위로 변경
        const bts1 = document.querySelectorAll(".c1");
        bts1.forEach((item) => {
            const n = Math.floor(Math.random() * 7) + 1;
            item.setAttribute("src", `./img/${n}.png`);
        });

        // 모든 이미지가 7인지 확인
        const allImagesAre7 = Array.from(bts1).every((item) => item.src.includes('7.png'));

        // 모든 이미지가 7.png인지 확인
        if (allImagesAre7) {
            // 결과 메시지를 #msgArea에 설정
            const msg = '<img src="./img/jackpot.jpg">';
            document.querySelector("#msgArea").innerHTML = msg;
        } else {
            const msgArea = document.querySelector("#msgArea");
            if (msgArea) {
                msgArea.innerHTML = "<h2>❌꽝입니다❌</h2>";
            } else {
                console.error("#msgArea not found in the document");
            }
        }

        // 코인 차감
        coins -= costPerPlay;

        // 코인 상태 업데이트
        updateCoinDisplay();
    } else {
        alert("코인이 부족합니다.");
    }
}

// 초기 코인 설정 함수
const setInitialCoins = () => {
    const initialCoins = parseInt(prompt("초기 코인 갯수를 입력하세요:"));
    if (!isNaN(initialCoins) && initialCoins >= 0) {
        coins = initialCoins;
        updateCoinDisplay();
    } else {
        alert("올바른 숫자를 입력하세요.");
    }
}


