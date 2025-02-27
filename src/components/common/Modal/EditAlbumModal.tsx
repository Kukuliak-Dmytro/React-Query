import InputText from "../../inputs/InputText";
import Button from "../Button/Button";
import './Modal.css';
import { AlbumType } from "../../../types/Albums";
import { useMutation } from "@tanstack/react-query";
import { editAlbum } from "../../../services/albumsFetches";

interface EditAlbumModalProps {
    formData: AlbumType;
    handleChange: (event: any) => void;
    onClose: () => void;
}

export default function EditAlbumModal({ formData, handleChange, onClose }: EditAlbumModalProps) {
   
    const editAlbumMutation = useMutation({
        mutationFn: editAlbum,
        onSuccess: (variables) => {
            console.log("Album edited successfully: ", variables);
            onClose(); // Close the modal on success
        },
});

    const sendPutRequest = () => {
        editAlbumMutation.mutate({ album: formData });
    };

    return (
        <form className="edit-modal" onSubmit={(e) => { e.preventDefault(); sendPutRequest(); }}>
            <InputText label="Title" id="title" placeholder="Enter title" onChange={handleChange} defaultValue={formData.title} />
            <Button type="submit">Submit</Button>
        </form>
    );
}