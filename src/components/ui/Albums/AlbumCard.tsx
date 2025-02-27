import { Link } from "react-router-dom";
import { AlbumType } from "../../../types/Albums";
import useFormState from "../../../hooks/useFormState";
import { usePrefetch } from "../../../hooks/usePrefetch";
import { deleteAlbum, fetchAlbum, fetchAlbumPhotos } from "../../../services/albumsFetches";
import Button from "../../common/Button/Button";
import EditAlbumModal from "../../common/Modal/EditAlbumModal";
import { useMutation } from "@tanstack/react-query";
import { useModal } from "../../../hooks/useModal";
export default function AlbumCard({ album }: { album: AlbumType }) {
    const [modalData, handleModalData] = useFormState<AlbumType>({ ...album });
     const {openModal, closeModal}=useModal()
    const prefetchAlbum = usePrefetch(fetchAlbum);
    const prefetchPhotos=usePrefetch(fetchAlbumPhotos)
    const DeleteAlbum = useMutation({
        mutationFn: deleteAlbum,
        onSuccess: () => {
            // note: json placeholder api does not return a copy of deleted object
            console.log("Delete successful");
        }
    });

    return (
        <>
            
            <div key={album.id} className="album-wrapper" id={album.id.toString()} style={{padding:"16px", backgroundColor:"rgb(146, 146, 146)", borderRadius:'12px'}} onMouseEnter={() => {
                prefetchAlbum(['albums', album.id.toString()]);
                prefetchPhotos(['photos', album.id.toString()])
            }}>
                <span style={{ display: "flex", alignItems:"center",justifyContent: "space-between", height: "50px" }}>
                    <Link to={`${album.id}`}>
                        <h2>{album.title}</h2>
                    </Link>
                    <span style={{ display: "flex", gap: "8px" }}>
                        <Button onClick={() => openModal(<EditAlbumModal formData={modalData} handleChange={handleModalData} onClose={() => closeModal()} />)}>Edit</Button>
                        <Button onClick={() => { DeleteAlbum.mutate({ queryKey: ['albums', album.id.toString(), 'delete'] }) }}>Delete</Button>
                    </span>
                </span>
            </div>
        </>
    );
}







