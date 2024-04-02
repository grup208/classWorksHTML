// // // 1980-09-11
// // // 

// // const h1=document.querySelector('h1');


// // const D=new Date();
// // // console.log(D.getDay())
// // // console.log(D.getHours() +" : "+ D.getMinutes())
// // // console.log(D.getHours() +" : "+ D.getMinutes()+ " : " + D.getSeconds())
// // // console.log(D.getMonth())
// // const days=['კვირა','ორ','სამ','ოთხ','ხუთ','პარ','შაბ']
// // const P=new Date('"2024-01-02"');
// // console.log(days[P.getDay()])
// // const T=new Date();

// // const deff=T.getTime() -P.getTime();

// // const day=24*60*60*1000


// // console.log('P: '+P.getTime())
// // console.log("T: "+ T.getTime())
// // console.log('deff: ' , deff);
// // console.log('day: '+ day)

// // console.log(parseInt(deff/day));
// //---------------------------------------------------
// // 1. Write a JavaScript function to check whether an `input` is a date object or not.

// // Test Data :
// // console.log(is_date("October 13, 2014 11:13:00"));
// // console.log(is_date(new Date(86400000)));
// // console.log(is_date(new Date(99,5,24,11,33,30,0)));
// // console.log(is_date([1, 2, 4, 0]));
// // Output :
// // false
// // true
// // true
// // false

// const isDate = function(d){
//   return d instanceof Date
// }

// console.log(isDate("October 13, 2014 11:13:00"));
// console.log(isDate(new Date(86400000)));
// console.log(isDate(new Date(99,5,24,11,33,30,0)));
// console.log(isDate([1, 2, 4, 0]));
// Output :
// false
// true
// true
// false



