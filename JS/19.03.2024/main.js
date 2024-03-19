// const h1=document.querySelector('h1');
// const start=document.querySelector('.start');
// const stop=document.querySelector('.stop');
// const reklam=document.querySelector('.reklam');
// const closeReklam=document.querySelector('.close-reklam');



// function addOne(){
//    let s=h1.innerText;
//    h1.innerText=+s+1
  
// }

// function showRekalm(){
//     reklam.classList.add('active')
// }

// setTimeout(showRekalm,3000);

// closeReklam.addEventListener('click',()=>{
//     reklam.classList.remove('active');
// })


// let interval;
// start.addEventListener('click',()=>{
//     if(!interval){
//         interval=setInterval(addOne,1000);
//     }
// });
// stop.addEventListener('click',()=>{
//     if(interval){
//         clearInterval(interval);
//         interval=undefined;
//     }
// });








// const tBody=document.querySelector('tbody');


// h1.innerText='hello world';

// const users=[];

// const user1={
//     fName:'john-1',
//     lName:'doe-1',
//     phones:{
//         phone1:1111,
//         phone2:2222
//     },
//     addres:'rustavi-1'
// }

// const user2={
//     fName:'john-2',
//     lName:'doe-2',
//     phones:{
//         phone1:1111,
//         phone2:2222
//     },
//     addres:'rustavi-2'
// }

// function addUser(user){
//     users.push(user)
// }

// addUser(user1);
// addUser(user2);

// console.log(users);

// function saveUsers(arra){
//     localStorage.setItem('myUsers',JSON.stringify(arra))
// }


// saveUsers(users)

// function renderUsers(){
//     const users=JSON.parse(localStorage.getItem('myUsers'));
//     tBody.innerHTML='';
//     users.forEach(user => {
//         tBody.innerHTML+=`
//             <tr>
//                 <td>${user.fName}</td>
//                 <td>${user.lName}</td>
//                 <td>${user.addres}</td>
//             </tr>
//         `
//     });
   
// }
// renderUsers()


//--------------------------------------------------------

// 26. Write a JavaScript program to find a pair of elements (indices of the two numbers) in 
//    a given array whose sum equals a specific target number.

// Input: numbers= [5,20,10,40,50,60,70], target=60
// Output: 1, 3


function main(numbers,target){
    let number1;
    let number2;
    let initArray=[...numbers];
  function getIndex(numbers,target){
        if(numbers.length===0) return ' numbers not found';
        number1=numbers[0];
        for(let i=1; i<numbers.length; i++){
            number2=numbers[i]
            if(number1+number2===target){
                return [initArray.indexOf(number1),initArray.indexOf(number2)]
            }            
        }
        numbers.shift();
        return getIndex(numbers,target);
    }
   return getIndex(numbers,target)
}
     const numbers= [5,20,10,40,50,60,70]   ;
    console.log(main(numbers,80));








