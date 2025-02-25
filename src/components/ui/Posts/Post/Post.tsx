import { PostType } from "../../../../types/Posts";
import { Link } from "react-router-dom";
import './Post.css';
import Button from "../../../common/Button/Button";
import Modal from "../../../common/Modal/Modal";
import EditPostModal from "../../../common/Modal/EditPostModal";
import { useState } from "react";
import useFormState from "../../../../hooks/useFormState";
import {fetchPost, fetchPostComments} from "../../../../services/fetchPost";
import { usePrefetch } from "../../../../hooks/usePrefetch";
export default function Post({ post }: { post: PostType }) {
    const [modal, setModal] = useState(false);
    const [modalData, handleModalData] = useFormState<PostType>({ ...post });
    const prefetchPost=usePrefetch(fetchPost)
    const prefetchComments=usePrefetch(fetchPostComments)

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
                        <Button>Delete</Button>
                    </span>
                </span>
                <p>{post.body}</p>
            </div>
        </>
    );
}