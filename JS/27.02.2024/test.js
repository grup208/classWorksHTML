import {getPost} from './get-post-service.js'

const allpostsUrl='https://jsonplaceholder.typicode.com/posts'

export const posts=await getPost(allpostsUrl);
