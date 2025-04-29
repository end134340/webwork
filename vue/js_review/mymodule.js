//모듈 예제.
//모듈화(캡슐화?)의 목적: 접근 범위, 노출 범위를 제어하기 위해.
//export를 적어준 것만 외부에서 접근 가능. (myinfunc는 외부에서 접근 불가)

/* export*/ function myFunc(msg) {
  console.log(msg);
}

function myinfunc(msg) {
  console.log(msg);
}

function defFunction(msg){
  console.log('default: ' + msg);
}

// export default defFunction
//중괄호가 없는 건 디폴트.

//여러개를 한꺼번에 보낼 수도 있음.
export { myFunc, myinfunc }

//중괄호로 보내면 받을 때도 중괄호 사용.
// default로 내보낸 건 중괄호 없이 받아가지고 
// 함수 이름 없이 바로 사용할 수도 있음.