import { useFetchPaginated } from "../hooks/useFetchPaginated";
import fetchPosts from "../services/fetchPosts";
import PostsLists from "../components/ui/Posts/PostList/PostsList";
import Pagination from "../components/layout/Pagination/Pagination";

export function Posts() {
    const { isFetching, currentItems, currentPage, totalPages, goToPreviousPage, goToNextPage, error } = useFetchPaginated(fetchPosts,['posts']);

    if (isFetching) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error.message}</div>;
    }

    return (
        <>
            <PostsLists posts={currentItems} />
            <Pagination
                currentPage={currentPage}
                totalPages={totalPages}
                goToPreviousPage={goToPreviousPage}
                goToNextPage={goToNextPage}
            />
        </>
    );
}
