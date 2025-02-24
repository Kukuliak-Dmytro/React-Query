
import { PostType, CommentType } from "../types/Posts";
import { QueryKey } from "@tanstack/react-query";

export  async function fetchPost(id:number): Promise<PostType> {
    const requestOptions: RequestInit = {
        method: "GET",
        redirect: "follow"
    };

    try {
        const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, requestOptions);
        const result: PostType = await response.json();
        console.log("Fetch successfull: ", result)
        return result;
    }
    catch (error) {
        throw new Error(`Error: ${error}`)
    }
}

export  async function fetchPostComments({queryKey}:{queryKey:QueryKey}): Promise<CommentType[]>{
    const requestOptions: RequestInit = {
        method: "GET",
        redirect: "follow"
    };
    const id=queryKey[1]
    try {   
        const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}/comments`, requestOptions);
        const result: CommentType[] = await response.json();
        console.log("Fetch successfull: ", result)
        return result;
    }
    catch (error) {
        throw new Error(`Error: ${error}`)
    }

}