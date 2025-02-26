import { useParams } from "react-router-dom";
import useFetchSingle from "../hooks/useFetchSingle";
import { fetchAlbum, fetchAlbumPhotos } from "../services/albumsFetches";
import { PhotoType } from "../types/Albums";
export default function AlbumPage() {
   
    const { id } = useParams<{ id: string }>();

    const { isLoading: isFetchingAlbum, data: albumData, error: albumError } = useFetchSingle(fetchAlbum, ['albums', id!]);
    const { isLoading: isFetchingPhotos, data: photosData, error: photosError } = useFetchSingle(fetchAlbumPhotos, ['photos', id!]);

    if (isFetchingAlbum) {
        return <h1>Loading...</h1>;
    }
    if (albumError) {
        return <h1>{albumError.message}</h1>;
    }

    return (
        <>
            <div>Welcome to album #{id}</div>
            <h1>Title: {albumData?.title}</h1>
            <div>
                <h2>Photos</h2>

                {isFetchingPhotos ? (
                    <p>Loading photos...</p>
                ) : photosError ? (
                    <p>Error loading photos: {photosError.message}</p>
                ) : (
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '16px' }}>
                        {photosData?.map((photo: PhotoType) => (
                            <div key={photo.id} style={{ border: '1px solid #ccc', padding: '8px', borderRadius: '8px', width: '150px', textAlign: 'center' }}>
                                <h3 style={{ fontSize: '14px', margin: '8px 0' }}>{photo.title}</h3>
                                <img src={photo.thumbnailUrl} alt={photo.title} style={{ width: '100%', borderRadius: '4px' }} />
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </>
    );
}