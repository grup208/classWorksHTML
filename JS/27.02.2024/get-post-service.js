export async function getPost(url){    
    let data=await fetch(url)
    let result=await data.json();
    return result;    
}


export async function createPost(url,post){
    let data= await fetch(url, {
  method: 'POST',
  body: JSON.stringify(post),
  headers: {
    'Content-type': 'application/json; charset=UTF-8',
  }})
  let result=await data.json();
    return result;    
}