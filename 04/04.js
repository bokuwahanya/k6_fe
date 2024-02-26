
// const handleClick = () => {
//     console.log("click")
//    const rnd1 = Math.floor(Math.random()*7)+1
//    const rnd2 = Math.floor(Math.random()*7)+1
//    const rnd3 = Math.floor(Math.random()*7)+1
//     document.querySelector("#result1").innerHTML = `<img src="./img/${rnd1}.png" id="img">`
//     document.querySelector("#result2").innerHTML = `<img src="./img/${rnd2}.png" id="img">`
//     document.querySelector("#result3").innerHTML = `<img src="./img/${rnd3}.png" id="img">`

    
// }   


// document.addEventListener("DOMContentLoaded", () => {
//  const bts = document.querySelector("bts");
//  bts.addEventListener("click", ()=>{
//     handleClick();
//  })
 
// });

// const handleClick = () => {
//     console.log("click")
// }  

const handleClick = () => {
    const bts = document.querySelectorAll(".c1"); // 이미지 다 잡음
    const btsNum = [1,1,1] ;
    bts.forEach((item) => { // 한개씩 돌림
     const n = Math.floor(Math.random()*7)+1;
     item.setAttribute("src", `./img/${n}.png`)
    });

    let msg;
    if (rnd1==rnd2==7)
        msg = "<img src=\"./img/jackpot.jpg">{
    }
    else{
        msg = "<h2>❌꽝입니다❌<h2>";
    }
    
    document.querySelector("#msgArea").innerHTML = msg;


    //for in // 거의 안씀
    for(let i in bts) {
        const n = Math.floor(Math.random()*7)+1;
        item.setAttribute("src", `./img/${n}.png`)

        console.log("for in i= ", bts[1] )
    }
    //기본 for
    for(let i = 0 ; i < bts.length ; i++) {

    }
    //for of => 파의썬의 for in 추천합니다
    for(let [idx, item] of bts.entries) {
        const n = Math.floor(Math.random()*7)+1;
        item.setAttribute("src", `./img/${n}.png`);
        btsNum[idx] =n ;

        console.log(btsNum);

    }
}