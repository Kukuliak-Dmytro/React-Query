import { useFetchPaginated } from "../hooks/useFetchPaginated";
import fetchAlbums from "../services/albumsFetches";
import AlbumsLists from "../components/ui/Albums/AlbumsList";
import Pagination from "../components/layout/Pagination/Pagination";

export function Albums() {
    const { isLoading, currentItems, currentPage, totalPages, goToPreviousPage, goToNextPage, error } = useFetchPaginated(fetchAlbums,['albums']);

    if (isLoading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error.message}</div>;
    }

    return (
        <>
            <AlbumsLists albums={currentItems} />
            <Pagination
                currentPage={currentPage}
                totalPages={totalPages}
                goToPreviousPage={goToPreviousPage}
                goToNextPage={goToNextPage}
            />
        </>
    );
}
