const handleClick = (n) => {
    const img1 = document.querySelector("#img1");
    const img2 = document.querySelector("#img2");

    const nc = Math.floor(Math.random() * 7) + 1;

    img1.setAttribute("src", `../04/img/${nc}.png`);
    img2.setAttribute("src", `../04/img/${n}.png`);


    if (n == nc) {
        document.querySelector("#msg").innerHTML = "비겼다";
    } else if (n < nc) {
        document.querySelector("#msg").innerHTML = "졌다";
    } else {
        document.querySelector("#msg").innerHTML = "이겼다";
    }
    // === javascrip  데이터 타입까지 같이 본다.

}
