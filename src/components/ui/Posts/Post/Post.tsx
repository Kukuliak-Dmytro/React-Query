import { PostType } from "../../../../types/Posts";
import { Link } from "react-router-dom";
import { fetchPost, fetchPostComments } from "../../../../services/fetchPost";
import './Post.css'
import { useQueryClient } from "@tanstack/react-query";
export default function Post({ post }: { post: PostType }) {
    const QueryClient= useQueryClient()
    const PrefetchPost = async () => {
        await QueryClient.prefetchQuery({
            queryKey: ['posts', post.id.toString()],
            queryFn: fetchPost
        });
        await QueryClient.prefetchQuery({
            queryKey: ['comments', post.id.toString()],
            queryFn: fetchPostComments
        })
    }
    return (
        <div key={post.id} className="post-wrapper" id={post.id.toString()} onMouseEnter={PrefetchPost}>
            <Link to={`post/?id=${post.id}`}>
                <h2>{post.title}</h2>
            </Link>
            <p>{post.body}</p>
        </div>
    )
}
