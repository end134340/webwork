function wakeUp(callback) {
  setTimeout(() => {
    console.log("1. 일어났어요! ⏰");
    // washFace(); //예전에 사용한 비동기를 동기식으로 처리하는 방법.
    callback(2000); //다음에 실행할 행동을 함수로 받아 실행.
  }, 1000);
}

function washFace(callback) {
  setTimeout(() => {
    console.log("2. 세수했어요! 💦");
    callback(); 
  }, 2000);
}

function shower() {
  setTimeout(() => {
    console.log("2. 샤워했어요! 🚿");
  }, 2000);
}

function eatBreakfast(callback) {
  setTimeout(() => {
    console.log("3. 아침 먹었어요! 🍞");
    callback();
  }, 1000);
}

//비동기 처리이기 때문에 wakeUp이 실행 결과가 나오고 나서 washFace가 실행되는 게 아니라, 동시에 실행됨.
// wakeUp();
wakeUp(function(){ //다음에 실행할 행동을 함수로 주고싶음.
  washFace(()=> { //함수에 매개변수가 들어가야 하면 wrapper함수가 필요함.
    eatBreakfast(()=>{
      console.log('준비 완료...'); //콜백 지옥의 완성.
    })
  }) 
}); 
// washFace();

