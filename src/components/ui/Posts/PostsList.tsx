import { PostsListType } from "../../../types/Posts";
import Post from "./PostCard";
export default function PostsLists({ posts }: { posts: PostsListType }) {
    return (
        <div style={{ display: 'grid', gap: '16px' }}>
            {posts.map(post => (
                <Post key={post.id} post={post} />
            ))}
        </div>
    );
}
