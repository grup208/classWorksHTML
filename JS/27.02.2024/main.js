import {getPost,createPost} from './get-post-service.js';

// const newPost={
//             title: 'modus',
//             body: 'modus news',
//             userId:2,
//         }
// const createdPost=await createPost('https://jsonplaceholder.typicode.com/posts',newPost);
// const createdPostId=createdPost.id;
// console.log(createdPostId); 

const singlPostUrl=`https://jsonplaceholder.typicode.com/posts`

const posts=await getPost(singlPostUrl);
 console.log(posts);






