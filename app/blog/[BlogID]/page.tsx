import axios from "axios"

export default async function Blogpage({params}:any){

    const postId=(await params).BlogID
const response=await axios.get(`https://jsonplaceholder.typicode.com/posts/${postId}`)
const data=response.data;

    return <>
        <h1>Welcome to Our Blogs Page you are on page {postId}</h1>
        <h1>{data.title}</h1>
        <h1>{data.body}</h1>
    </>
}