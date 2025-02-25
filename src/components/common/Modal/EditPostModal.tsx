import InputText from "../../inputs/InputText";
import Button from "../Button/Button";
import './Modal.css';
import { PostType } from "../../../types/Posts";
import { useMutation } from "@tanstack/react-query";
import { editPost } from "../../../services/postsFetches";

interface EditPostModalProps {
    formData: PostType;
    handleChange: (event: any) => void;
    onClose: () => void;
}

export default function EditPostModal({ formData, handleChange, onClose }: EditPostModalProps) {
    const editPostMutation = useMutation({
        mutationFn: editPost,
        onSuccess: (data, variables, context) => {
            console.log("Post edited successfully: ", variables);
            onClose(); // Close the modal on success
        },
});

    const sendPutRequest = () => {
        editPostMutation.mutate({ post: formData });
    };

    return (
        <form className="edit-modal" onSubmit={(e) => { e.preventDefault(); sendPutRequest(); }}>
            <InputText label="Title" id="title" placeholder="Enter title" onChange={handleChange} defaultValue={formData.title} />
            <InputText label="Body" id="body" placeholder="Enter body" onChange={handleChange} defaultValue={formData.body} textArea />
            <Button type="submit">Submit</Button>
        </form>
    );
}