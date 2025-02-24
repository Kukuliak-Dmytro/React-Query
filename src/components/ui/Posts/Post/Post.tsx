import { PostType } from "../../../../types/Posts";
import { Link } from "react-router-dom";
import './Post.css'
export default function Post({ post }: { post: PostType }) {
    return (
        <div key={post.id} className="post-wrapper">
            <Link to={`post/?id=${post.id}`}>
                <h2>{post.title}</h2>
            </Link>
            <p>{post.body}</p>
        </div>
    )
}
