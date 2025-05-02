//setTimeout: 한번만 실행
//타이머를 걸어 설정한 시간이 경과되면 콜백함수를 실행.
// setTimeout(() => { // setTimeout함수에는 콜백함수, 설정 (지연)시간 인수가 들어감.
//   console.log('타이머 후 한번 실행.')
// }, 2000) 

//interval: 반복 실행.
setInterval(() => { //콜백함수, 반복 간격?이 인수로 들어감.
  console.log(new Date()); //서버와 계속 통신해야 하는 경우에 사용.
}, 1000)