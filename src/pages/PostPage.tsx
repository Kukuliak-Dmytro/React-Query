import { useSearchParams } from "react-router-dom";
import useFetchSingle from "../hooks/useFetchSingle";
import { fetchPost, fetchPostComments } from "../services/fetchPost";

export default function PostPage() {
    const [searchParams] = useSearchParams();
    const id = searchParams.get('id') || "0";
    const { isFetching: isFetchingPost, data: postData, error: postError } = useFetchSingle(fetchPost, ['posts', id]);
    const { isFetching: isFetchingComments, data: commentsData, error: commentsError } = useFetchSingle(fetchPostComments, ['comments', id]);

    if (isFetchingPost) {
        return <h1>Loading...</h1>;
    }

    return (
        <>
            <div>Welcome to post #{id}</div>
            {postData?.body}, {postData?.id}, {postData?.title}, {postData?.userId}
            <div>
                <h2>Comments</h2>
                {isFetchingComments ? (
                    <p>Loading comments...</p>
                ) : (  
                    commentsData?.map((comment: any) => (
                        <div key={comment.id}>
                            <p>{comment.body}</p>
                            <p>By User {comment.email}</p>
                        </div>
                    ))
                )}
            </div>
        </>
    );
}