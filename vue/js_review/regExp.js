//Regular Expression 정규 표현식 

let text = "Visit W3Schools!"; //찾을 문자열
const exp = /^W3Schools/i; //i: 대소문자 구분 안함. $: endwith(문장 끝이 찾으려는 단어?로 끝나는지 찾는거) ^: startswith(그 단어로 시작하는지 찾는거.)
let n = exp.test(text); //search: 포함되었는지 찾는거. test(): 표현식에 맞는지? 검사하고 boolean값 리턴
// text.search(exp) / exp.test(text) 처럼 다른 방식임.
// console.log(n)

//숫자 3자리만
// [a-z] //소문자만
// [A-Z] //영어 대문자만 가능
// [a-zA-Z] //대소문자 가능
// [0-9] //숫자만 가능
// 범위는 -로 구분. n1, n2, n3은 이 3개만 가능.

//0~9까지 3자리
let numExp = /[0-9A-Z]{3}/ //{수}: 갯수 지정, +: 1개 이상 / ?: 0이거나 있거나 
// /^[a-z][0-9a-z]/이면 무조건 소문자 시작, 뒤는 숫자나 소문자 상관 X
// /^[a-z][0-9a-z]${2}/ 무조건 소문자 시작, 뒤는 숫자나 문자 1자리
// \S: 공백을 제외한 모든 문자 대응 \d: [0-9]와 같음
let numText = '3Z1'
let bool = numExp.test(numText);
console.log(bool);
