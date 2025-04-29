//mymodule.js를 불러 쓰는 js.

// import { myFunc } from "./mymodule.js";

//불러 쓰려는 함수를 import해주면 됨(저기서 export한 함수.)
// import { myFunc, myinfunc } from "./mymodule.js"; //.js 생략 가능.
//필요하다면 export한 함수 여러개 적으면 됨.

// import my from './mymodule.js'; //로 받아올 수도 있?음
//그러면 사용할 때 my.myFunc라고 써야함.

import * as my from './mymodule.js'; //저 모듈에 있는 모든 함수를 받아옴
//만약 전체로 받아오면 as로 알리아스를 지정해주어야 함.

my.myFunc('모듈화 성공');
// defFunction('디폴트함수...')

// my.myinfunc('모듈 2');

// my('디폴트 함수');