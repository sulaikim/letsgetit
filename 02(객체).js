//객체 (배열,함수,객체리터럴...)
//배열 (배열과 요소(element))

const everything = ["사과", 1, undefined, true, "배열", null];
const duplicated = ["가", "가", "가", "가", "가"];
const empty = [];

console.log(everything.length);

const findLastElement = ["a", "b", "c", "d", "e"];
console.log(findLastElement[findLastElement.length - 1]);

const arr = [1, 2, 3, 4, 5];
console.log(arr[arr.length - 3]);
arr.unshift(2);
console.log(arr);
arr.shift(2);
console.log(arr);
arr.splice(1, 3, "타", "파"); //지우고 끼워넣기도 가능함
console.log(arr);
arr.splice(0, 0, "가"); //하나도 안지우고 끼워넣는 법 (원하는 자리,0,원하는 값)
console.log(arr);

const target = ["라", "나", "다", "라", "다"];
const result = target.indexOf("다"); //정확히 몇번째 자리에 있는지 알려줌
const result2 = target.lastIndexOf("라"); //뒤에서 부터 찾으니 값이 3이다.(0아니고
const result3 = target.indexOf("가"); //없으면 -1나옴
console.log(result);
console.log(result2);
console.log(result3);

//=================================배열반복
const target1 = ["가", "나", "다", "라", "마"];
let i = 0;
while (i < target1.length) {
  console.log(target1[i]);
  i++;
}

for (let i = 0; i < target1.length; i++) {
  console.log(target1[i]);
}

//indexOf와 splice 사용해서 '라'를 모두 지우기
const arr1 = ["가", "라", "다", "라", "마", "라"];
while (arr1.indexOf("라") > -1) {
  arr1.splice(arr1.indexOf("라"), 1);
}
console.log(arr1);

//쌤풀이
while (arr1.indexOf("라") > -1) {
  //indexOf에서 -1은 없다는 뜻
  arr1.splice(arr1.indexOf("라", 1));
}
console.log(arr1);

let index = arr1.indexOf("라");
while (index > -1) {
  arr1.splice(index, 1);
  index = arr1.indexOf("라");
}
console.log(arr1);

const arr2 = [1, 2, 3, 4, 5];
arr2.indexOf(1);

if (arr2.indexOf(1)) {
  console.log("찾았다");
} else {
  console.log("못찾았다");
}
// 결과 못찾았다의 이유:
// indexOf(1)값은 0이다. 0은 false이기 때문에 else로 간거다
if (arr2.indexOf(1 > -1)) {
  //-1추가로 넣어주면 해결 된다
  console.log("찾았다");
} else {
  console.log("못찾았다");
}


//=================================함수 
function d() {
  if (false) {
    return;
  }
  console.log("hello");
}

d();

// 선언 = 매개변수 = 파라미터
// 호출 = 인수 = 아규먼트


//=================================객체간 비교
//객체끼리(배열,함수..) 비교하면 false 가 나옴
//변수안에 저장해놓고 비교하면 true나옴

const a = {name:'kiki'};
const arr3 = [1,2,a];
console.log(a===arr3[2])


const zerocho = {
  name: {
    first: '현영',
    last: '조',
  },
  gender: 'm',
};

console.log(zerocho.name.last)
console.log(zerocho['name']['last'])