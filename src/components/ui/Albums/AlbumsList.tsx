import { AlbumListType } from "../../../types/Albums";
import AlbumCard from "./AlbumCard";
export default function AlbumsLists({ albums }: { albums: AlbumListType }) {
    return (
        <div style={{ display: 'grid', gap: '16px' }}>
            {albums.map(album => (
                <AlbumCard key={album.id} album={album} />
            ))}
        </div>
    );
}
