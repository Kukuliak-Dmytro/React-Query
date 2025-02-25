import { useState } from "react";
import { Link } from "react-router-dom";
import { PostType } from "../../../../types/Posts";
import useFormState from "../../../../hooks/useFormState";
import { usePrefetch } from "../../../../hooks/usePrefetch";
import { deletePost, fetchPost, fetchPostComments } from "../../../../services/postsFetches";
import Button from "../../../common/Button/Button";
import Modal from "../../../common/Modal/Modal";
import EditPostModal from "../../../common/Modal/EditPostModal";
import { useMutation } from "@tanstack/react-query";
import './Post.css';
export default function Post({ post }: { post: PostType }) {
    const [modal, setModal] = useState(false);
    const [modalData, handleModalData] = useFormState<PostType>({ ...post });
    const prefetchPost=usePrefetch(fetchPost)
    const prefetchComments=usePrefetch(fetchPostComments)
    const DeletePost=useMutation({
        mutationFn:deletePost,
        onSuccess:()=>{
             // note: json palceholder api does not return a copy of deleted object
            console.log("Delete successfull")
        }
    })


    return (
        <>
            <Modal open={modal} onClose={() => { setModal(false) }}>
                <EditPostModal formData={modalData} handleChange={handleModalData} onClose={() => setModal(false)} />
            </Modal>
            <div key={post.id} className="post-wrapper" id={post.id.toString()} onMouseEnter={() => { 
                prefetchPost(['posts', post.id.toString()]); 
                prefetchComments(['comments', post.id.toString()]); 
            }}>
                <span style={{ display: "flex", justifyContent: "space-between", height: "50px" }}>
                    <Link to={`post/?id=${post.id}`}>
                        <h2>{post.title}</h2>
                    </Link>
                    <span style={{ display: "flex", gap: "8px" }}>
                        <Button onClick={() => setModal(true)}>Edit</Button>
                        <Button onClick={()=>{DeletePost.mutate({queryKey:['posts',post.id.toString, 'delete']})
                        }}>Delete</Button>
                    </span>
                </span>
                <p>{post.body}</p>
            </div>
        </>
    );
}