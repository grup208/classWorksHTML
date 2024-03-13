
const form=document.querySelector('form');
const tBody=document.querySelector('tbody');
let UserId=null;
renderUsers(getUsers());

form.addEventListener("submit", (e)=>{
   e.preventDefault();
   let formData = new FormData(form);
   const user=Object.fromEntries(formData);
   user.id= UserId ?? idGenerator();  
   saveUser(user);
   renderUsers(getUsers()); 
   reset();
 });
 
 function reset(){
   form.reset(); 
   UserId=null; 
 }

 function idGenerator(){
   return Math.random().toFixed(4).slice(2);
 }
 

function saveUser(user){
   const users=getUsers();
   let index=users.findIndex((el)=>{return el.id===user.id});
   index>=0?users[index]=user : users.push(user);  
   localStorage.setItem('users',JSON.stringify(users));
}

function deleteUser(id){
   const users=getUsers();
   let index=users.findIndex(el=>el.id===id);
   if(index===-1) return;
   users.splice(index,1);  
   localStorage.setItem('users',JSON.stringify(users));
   renderUsers(getUsers());
}

function editUser(id){
   const users=getUsers();
   let index=users.findIndex(el=>el.id===id);
   if(index===-1) return; 
   UserId=users[index].id;
   const user=users[index];
   Array.from(form.children).forEach((el)=>{
      let inputName=el.name;
      if(Object.keys(user).includes(inputName)){
         el.value=user[inputName];
      }
   });
}


function getUsers(){
   return JSON.parse(localStorage.getItem('users')) ?? [];
}

function setDeleteLisener(){
   const deleteBtns=Array.from(document.querySelectorAll('.delete'));
   deleteBtns.forEach(el=>{
      el.addEventListener('click',(e)=>{
         const userId=e.target.attributes.userId.value;
         deleteUser(userId);   
      })
   })
}

function setEditLisener(){
  const editBtns=Array.from(document.querySelectorAll('.edit'));
  editBtns.forEach(el=>{
        el.addEventListener('click',(e)=>{         
         const userId=e.target.attributes.userId.value;
         editUser(userId);   
      })
   })
}

function renderUsers(arr){
   tBody.innerHTML='';
   arr.forEach(user => {
      tBody.innerHTML+=`
      <tr>
      <td>${user.id}</td>
      <td>${user.fName}</td>
      <td>${user.lName}</td>
      <td>${user.email}</td>
      <td>${user.phone}</td>
      <td>${user.addres}</td>
      <td>
        <img
          userId=${user.id}
          class="edit"
          src="./download (1).png"
          width="30px"
          height="30px"
        />
        <img
          userId=${user.id}
          class="delete"
          src="./6861362.png"
          width="30px"
          height="30px"
        />
      </td>
    </tr>      `
   });
   setDeleteLisener();
   setEditLisener();
}

class nameValidator{
   isValid(value){
      
   }
}

function inputValidator(validator,value){
   return validator.isValid(value)
}


   












