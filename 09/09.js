// 자바스크립트 데이터 타입
// 기본 타입

let n1 = 10;
let n2 = 10.5;
let s1 = "안녕하세요.";

console.log("정수 :", n1);
console.log("실수 :", n2);
console.log("문자열 :", s1)

//문자열 순회
for (let i in s1) {
    console.log("문자열: ", s1[i]); //인덱스로 
}
for (let c of s1) {
    console.log("문자열: ", c); //요소값 그대로
}


//배열
//tailiing 쉼표가능
let arr = ['🧟‍♂️', 1, '🧛‍♀️', 2, '🧙‍♂️', 3,];
console.log("배열 :", arr);
console.log("배열의 요소 접근 :", arr[1]);

//배열 순회
for (let i in arr) {
    console.log("배열: ", arr[i]); //인덱스로 
}

//배열 map함수
console.log("배열 map 함수")
let arr2 = arr.map((v, i) => { // 각 인덱스에 값을 리턴, 변수를 만들어 배열을 모음. // 동일한 배열길이 
    console.log("map: v", v);
    console.log("map: i", i); // 값하고 인덱스를 받으려면 map으로 받으면 된다.

    return v + "🧚‍♀️";

}); // 배열할 땐 포오브 안쓰고 맵을 쓰면 한개씩 접근함.
//맵을 사용하면 리턴갯수가 똑같다.

console.log("arr2 =" + arr2);

//콜백함수의 문법
//콜백의 바디에 실행문이 없고 리턴문만 있으면 ()와 return 생략가능
console.log("배열 map 함수 : 콜백")
arr2 = arr.map(v => v + "🧚‍♀️");
//실행값 없고 리턴만 있다
arr2 = arr.map((v, i) => v + "🧚‍♀️" + i + "🧜‍♂️");

console.log("arr2 =" + arr2);

//오브젝트
//tailiing 쉼표가능
let obj = { '🧟‍♂️': 1, '🧛‍♀️': 2, '🧙‍♂️': 3, }; //오브젝트는 키와 ㅏ값으로 있다.
console.log("오브젝트 :", obj);
console.log("오브젝트의 요소접근:", obj['🧟‍♂️'])

//오브젝트 순회
for (let c of Object.entries(obj)) { //오브젝트는 키와 값을 세트를 들고와야한다. //엔트리즈 많이 쓴다.
    console.log("오브젝트: ", c); //요소값 그대로
    console.log("오브젝 키: ", c[0]); //요소값 그대로
    console.log("오브젝 값: ", c[1]); //요소값 그대로 // 오브젝트는 키와 값을 나눠서 가져올 수 있다. 키와 값은 배열이다.
}

//오브젝트 구조분해
for (let [k, v] of Object.entries(obj)) {
    console.log("오브젝 키: ", k);
    console.log("오브젝 값: ", v);
} //변수를 따로 설정 해서 따로 받는 것을 구조 분해라고 한다. 
//파이썬 딕셔너리는 대괄호를 안써도 된다. 딕셔너리 중요함.

//백엔드랑 프론트엔드랑 주고받을 때 제이슨 타입.

//콜랙션 자료에 배열과 오브젝트를 구분하여 쓸 줄 알아야한다.
//문자열은 특수한 케이스. 문자의 배열의 개념으로 본다.
//

//const 와 let 함수 선언 타입 주의

//이해 바람