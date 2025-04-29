// spread.js

let arr = [ 1, 2, 3 ];

// let arrcp = arr; //배열 복사(얕은 복사)
// arrcp[0] = 10; //arrcp의 값을 바꾸면 기존의 arr값도 바뀜.
// console.log(arr)
// console.log(arrcp)

//깊은 복사
function arrayDeepCopy(){  
  let arrDeepCp = [ ... arr]
  arrDeepCp[0] = 100; //arrDeepCp의 값을 바꿔도 arr값은 바뀌지 않음.
  console.log(arr);
  console.log(arrDeepCp);
}

//객체 얕은 복사
function objectShallowCopy(){
  let emp = { name: '홍길동', age: 20 }
  let empCp = emp;
  empCp.age = 30;

  console.log(emp)
  console.log(empCp);

}
//객체 깊은 복사
function objectDeepCopy(){
  let emp = { name: '홍길동', age: 20 }
  let empCp = { ... emp, name: '김여전' }; //복사 후 이름 고침
  empCp.age = 30;

  console.log(emp)
  console.log(empCp);

}

objectDeepCopy();

//가변인수(variouble argument)
//function fnc(... arg){}