import { PostsListType } from "../types/Posts";
export default async function fetchPosts(): Promise<PostsListType> {
    const requestOptions: RequestInit = {
        method: "GET",
        redirect: "follow"
    };

    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/posts", requestOptions);
        const result: PostsListType = await response.json();
        console.log("Fetch successfull: ", result)
        return result;
    }
    catch (error) {
        throw new Error(`Error: ${error}`)
    }
}
