import {  PostsListType } from "../../../../types/Posts";
import Post from "../Post/Post";
import './PostsList.css'
export default function PostsLists({ posts }: { posts: PostsListType }) {
    
        return (
            <div className="posts-lists-wrapper">
            {posts.map(post=>Post({post}))}
            </div>
        )
}