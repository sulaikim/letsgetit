//parseInt(prompt()) //프롬프트는 문자열로 받기 때문에
//console.log(2**3) //거듭제곱
//문자열+숫자로 더하면 문자열로 변경됨 : 형변환
//문자열-/* 숫자는 문자열이 숫자로 변경됨 : 형변환
//(0.3*10 -0.1*10) /10 //이런식으로 10으로 나누면 소숫점 계산 정확해짐

let value = "사과";
let condition = false;
if (condition) {
  value = "바나나";
} else {
  value = "포도";
}
console.log(value);
//===============================================
//if문예시를 삼항연산자(조건부연산자)랑 스위치문으로 바꿔보기
let cond = true;
let value = "";
if (cond) {
  value = "참";
} else {
  value = "거짓";
}

//삼항연산자(조건부 연산자)로 바꿔보기
let value = cond ? "참" : "거짓";

//스위치문으로 바꾸기
let cond = true;
let value = "";
switch (cond) {
  case true:
    value = "참";
    break;
  case false:
    value = "거짓";
    break;
}

//continue
let i = 0;
while (i < 10) {
  i++;
  if (i % 2 === 0) {
    //짝수이면 넘어가라
    continue;
  }
  console.log(i);
}

for (let i = 0; i < 5; i++) {
  if (i % 2 === 0) continue; //컨티뉴 하면 밑에 실행 안됨
  for (let j = 0; j < 5; j++) {
    if (j % 2 === 0) continue;
    for (let k = 0; k < 5; k++) {
      if (k % 2 === 0) continue;
      console.log(i, j, k);
    }
  }
}
// 구구단을 출력하되 짝수가 하나도 안나오게 해보기
for (let i = 2; i < 10; i++) {
  if (i % 2 === 0) continue;
  for (let j = 1; j < 10; j++) {
    if (j % 2 === 0) continue;
    console.log(i, j, i * j);
  }
}

//별 거꾸로 찍기
for (let i = 5; i > 0; i--) {
  console.log("*".repeat(i));
}
// i를 0으로 고정하고 해보기 
for (let i = 0; i < 5; i++) {
  console.log("*".repeat(5 - i));
}

//별 1,3,5,7,9 찍기
for (let i = 1; i < 10; i += 2) {
  console.log("*".repeat(i));
}
//별 9,7,5,3,1 찍기
for (let i = 1; i < 10; i += 2) {
  console.log("*".repeat(10 - i));
}

//별 5,4,3,2,1 앞 공간 남기고 찍기

for (let i = 5; i > 0; i--) {
  console.log(" ".repeat(5 - i) + "*".repeat(i));
}

for (let i = 0; i < 5; i++) {
  console.log(" ".repeat(5 - i) + "*".repeat(i + 1));
}

//마름모 1,3,5,3,1 별 찍기
for (let i = 0; i < 5; i += 2) {
  console.log(" ".repeat((5 - i) / 2) + "*".repeat(i + 1));
}
for (let i = 5; i > 0; i -= 2) {
  if (i == 5) {
    continue;
  } else {
    console.log(" ".repeat((5 - i) / 2) + "*".repeat(i));
  }
}

//크리스마스 트리 만들기 1,3,5,7,9
for (let i = 0; i < 9; i += 2) {
  console.log(" ".repeat((9 - i) / 2) + "*".repeat(i + 1));
}
