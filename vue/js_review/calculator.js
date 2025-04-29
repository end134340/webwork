const defaultValue = 1;

function add(num1, num2){
  return num1 + num2;
}

function minus(num1, num2){
  return num1 - num2;
}

//ES6어쩌고 모듈 방법(Vue에서 default로 사용됨)
// export { defaultValue, add, minus }

//CommonJS 모듈 방법(Node에서 default로 사용됨.)
module.exports = { defaultValue, add, minus }