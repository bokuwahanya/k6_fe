const handleChange = (s1, s2, lb1 ,lb2, t1, t2) => {
    if (s1.value === "℃"){
        s2.value = "℉";
        lb1.innerHTML = "℃";
        lb2.innerHTML = "℉";
    } 
     else{
        s2.value = "℃";
        lb1.innerHTML = "℉";
        lb2.innerHTML = "℃";
     } 

     t1.value=""
     t1.focus();
     t2.value=""
}


document.addEventListener("DOMContentLoaded", ()=>{
    const sel1 = document.querySelector("#sel1");
    const sel2 = document.querySelector("#sel2");

    const txt1 = document.querySelector("#txt1");
    const txt2 = document.querySelector("#txt2");

    txt1.addEventListener("input", ()=>{
        console.log(txt1.value)
        if(sel1.value === "℃"){
            txt2.value = (parseFloat(txt1.value) * (9/5)) + 32;
        }
        else{
            txt2.value = (parseFloat(txt1.value - 32) * 5/9);
        }
        console.log(labels[0].textContent)
    });
    
    const labels = document.querySelectorAll("label");

    sel1.addEventListener("change",()=>{
        handleChange(sel1,sel2, labels[0], labels[1], txt1, txt2);
        // console.log(sel1.value) ; // 폼 값은  .벨류값으로 가져온다
        // 찝어 올려는 데 폼테크 인지 일반 테그 인지 일반은 이너 html
        // if (sel1.value === "℃") sel2.value === "℉"
        // else sel1.value === "℃";
    });

    sel2.addEventListener("change",()=>{
        handleChange(sel2, sel1, labels[1], labels[0], txt1, txt2);
        // console.log(sel2.value) ;
        // if (sel2.value === "℃") sel1.value === "℉"
        // else sel1.value === "℃";
    });

});




