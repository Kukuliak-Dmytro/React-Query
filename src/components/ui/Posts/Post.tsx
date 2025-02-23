import { PostType } from "../../../types/Posts";
export default function Post({ post }: { post: PostType }) {
    return (
        <div key={post.id}>
            <h2>{post.title}</h2>
            <p>{post.body}</p>
        </div>
    )
}
