import {  PostsListType } from "../../../types/Posts";
import Post from "./Post";
export default function PostsLists({ posts }: { posts: PostsListType }) {
    
        return (
            posts.map(post=>Post({post}))
        )
}