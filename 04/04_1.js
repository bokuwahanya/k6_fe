let coins = 10; // 초기 코인 설정

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
                const allImagesAre7 = Array.from(bts1).every((item) => parseInt(item.src.match(/\d+/)[0]) === 7);

                // 결과 메시지를 #msgArea에 설정
                const msg = allImagesAre7 ? '<img src="./img/jackpot.jpg" id="img" >' : "<h2>❌꽝입니다❌<h2>";
                document.querySelector("#msgArea").innerHTML = msg;

                // 코인 차감
                coins -= costPerPlay;

                // 코인 상태 업데이트
                updateCoinDisplay();
            } else {
                alert("코인이 부족합니다.");
            }
        }

        // 추가할 코인 갯수를 입력하고 버튼을 누를 때 실행되는 함수
        const addCoins = () => {
            const coinInputValue = parseInt(document.querySelector("#coinInput").value);
            if (!isNaN(coinInputValue) && coinInputValue > 0) {
                coins += coinInputValue;
                updateCoinDisplay();
                document.querySelector("#coinInput").value = "";
            } else {
                alert("유효한 숫자를 입력해주세요.");
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

        // 초기 코인 상태 표시
        updateCoinDisplay();