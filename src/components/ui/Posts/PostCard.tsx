import { Link } from "react-router-dom";
import { useMutation } from "@tanstack/react-query";
import { PostType } from "../../../types/Posts";
import { deletePost, fetchPost, fetchPostComments } from "../../../services/postsFetches";
import useFormState from "../../../hooks/useFormState";
import { usePrefetch } from "../../../hooks/usePrefetch";
import { useModal } from "../../../hooks/useModal";
import Button from "../../common/Button/Button";
import EditPostModal from "../../common/Modal/EditPostModal";
export default function Post({ post }: { post: PostType }) {
    const { openModal, closeModal}=useModal()
    const [modalData, handleModalData] = useFormState<PostType>({ ...post });
    const prefetchPost = usePrefetch(fetchPost);
    const prefetchComments = usePrefetch(fetchPostComments);
    const DeletePost = useMutation({
        mutationFn: deletePost,
        onSuccess: () => {
            // note: json placeholder api does not return a copy of deleted object
            console.log("Delete successful");
        }
    });

    return (
        <>
           
            <div key={post.id} className="post-wrapper" id={post.id.toString()} style={{padding:"16px", backgroundColor:"rgb(146, 146, 146)", borderRadius:'12px'}} onMouseEnter={() => {
                prefetchPost(['posts', post.id.toString()]);
                prefetchComments(['comments', post.id.toString()]);
            }}>
                <span style={{ display: "flex", alignItems:"center",justifyContent: "space-between", height: "50px" }}>
                    <Link to={`${post.id}`}>
                        <h2>{post.title}</h2>
                    </Link>
                    <span style={{ display: "flex", gap: "8px" }}>
                        <Button onClick={() => openModal(<EditPostModal formData={modalData} handleChange={handleModalData} onClose={closeModal}/>)}>Edit</Button>
                        <Button onClick={() => { DeletePost.mutate({ queryKey: ['posts', post.id.toString(), 'delete'] }) }}>Delete</Button>
                    </span>
                </span>
                <p>{post.body}</p>
            </div>
        </>
    );
}







