const express = require('express')
const app = express()
const port = 3000 

let data = [  //emp.json 들고옴.
    {
      "id": "1",
      "first_name": "Massimiliano",
      "last_name": "Rosoni",
      "email": "mrosoni0@ibm.com",
      "salary": "$9.23",
      "department_id": 10,
      "job_id": "it"
    },
    {
      "id": "2",
      "first_name": "Rikki",
      "last_name": "Blue",
      "email": "rred1@nps.gov",
      "salary": "$9.96",
      "department_id": 20,
      "job_id": "sales"
    },
    {
      "id": "3",
      "first_name": "Dorothy",
      "last_name": "Loosemore",
      "email": "dloosemore2@behance.net",
      "salary": "$6.59",
      "department_id": "20",
      "job_id": "sales"
    },
    {
      "id": "4",
      "first_name": "길동",
      "last_name": "Loton",
      "email": "eloton3@dagondesign.com",
      "salary": "$3.38",
      "department_id": 10,
      "job_id": "it"
    },
    {
      "id": "5",
      "first_name": "Emmalee",
      "last_name": "Laboune",
      "email": "elaboune4@salon.com",
      "salary": "$8.40",
      "department_id": 20,
      "job_id": "sales"
    },
    {
      "id": "6",
      "first_name": "Michal",
      "last_name": "Ivanyushkin",
      "email": "mivanyushkin5@hao123.com",
      "salary": "$8.21",
      "department_id": 10,
      "job_id": "it"
    },
    {
      "id": "7",
      "first_name": "Robb",
      "last_name": "Gauche",
      "email": "rgauche6@fc2.com",
      "salary": "$8.09",
      "department_id": 10,
      "job_id": "it"
    },
    {
      "id": "8",
      "first_name": "Ange",
      "last_name": "Leon",
      "email": "aleon7@ucla.edu",
      "salary": "$0.33",
      "department_id": 10,
      "job_id": "sales"
    },
    {
      "id": "9",
      "first_name": "Odilia",
      "last_name": "Paye",
      "email": "opaye8@rakuten.co.jp",
      "salary": "$6.65",
      "department_id": 20,
      "job_id": "it"
    },
    {
      "id": "",
      "first_name": "유미",
      "last_name": "김",
      "job_id": "it",
      "department_id": 20,
      "salary": "1000",
      "email": "a@a.a"
    },
    {
      "id": "11",
      "first_name": "aa",
      "last_name": "aa",
      "email": "a@a.a",
      "phone_number": "",
      "hire_date": "",
      "job_id": "it",
      "salary": "11",
      "commission_pct": "",
      "manager_id": "",
      "department_id": 10
    },
    {
      "id": "12",
      "first_name": "cc",
      "last_name": "cc",
      "email": "a@a.a",
      "phone_number": "",
      "hire_date": "",
      "job_id": "it",
      "salary": "11",
      "commission_pct": "",
      "manager_id": "",
      "department_id": 10
    },
    {
      "id": "21",
      "first_name": "짜잔",
      "last_name": "박",
      "job_id": "it",
      "department_id": "10",
      "salary": "154",
      "email": "jjajan@naver.com"
    },
    {
      "id": "22",
      "first_name": "차홍",
      "last_name": "박",
      "job_id": "it",
      "department_id": "20",
      "salary": "162",
      "email": "chahong@naver.com"
    }
  ]

app.get('/emp', (req, res) => { //클라이언트에서 get 방식으로 요청이 들어오면 응답해줌. 자바의 서블릿과 같음.(노드의 라우터.)
  res.send(data) //데이터만 send하면 됨.
})

app.get('/find', (req, res) => { //부서가 10번인 첫 번째 사원 return
  res.send(data.find( ele => ele.department_id == 10))
})

app.get('/filter', (req, res) => { //jon_id가 it인 사원만.(데이터 확인.)
  res.send(data.filter( ele => ele.job_id = 'it')) 
})

app.get('/sort', (req, res) => {  //first_name 순으로 정렬.
  res.send(data.sort((a, b) => {
    let uppercaseA = a.first_name.toUpperCase()
    let uppercaseB = b.first_name.toUpperCase()

    if(uppercaseA > uppercaseB){
      return 1;
    } else if(uppercaseA == uppercaseB) {
      return 0;
    }else if (uppercaseA < uppercaseB){
      return -1
    }
  }))
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
