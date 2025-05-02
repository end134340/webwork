//콜백지옥을 프로미스를 이용해 변경.

function wakeUp() { //실행할 구문 자체를 프로미스로 변경해 리턴.
  return new Promise(function (resolve, reject) { //프로미스의 인수: 정상처리시 실행될 함수, 실패했을 때 실행될 함수.
    setTimeout(() => {
      console.log("1. 일어났어요! ⏰");
      resolve(); //resolve: 다음 then절 내용을 가리킴.
    }, 1000);
  })
}

function washFace() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("2. 세수했어요! 💦");
      resolve();
    }, 2000);
  })
}

function eatBreakfast() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("3. 아침 먹었어요! 🍞");
      resolve();
    }, 1000);
  })
}

/*wakeUp() //함수가 실행되고 나서 resolve로 다음 .then()을 가리키고, .then이 있으면 그걸 실행하는 게 아닐까???하는데...
  .then(washFace)
  .then(eatBreakfast)
  .then(() => console.log('준비 완료. . . . .'))*/

//await를 사용하기 위해서는 함수가 필요함.
//async function morningRoutin(){ 이 방법도 사용할 수 있지만
const morningRoutin = async function() {   //이 방법을 더 선호.
  await wakeUp();
  await washFace();
  await eatBreakfast();
  console.log('await 준 비 완 료');
}

morningRoutin();