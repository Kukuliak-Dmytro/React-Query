import PostsLists from "../components/ui/Posts/PostsList"
import { PostsListType } from "../types/Posts";
import Pagination from "../components/layout/Pagination/Pagination";
import { useState } from "react";
export function Posts() {
    const samplePosts: PostsListType = [
        { id: 1, userId: 1, title: "First Post", body: "This is the content of the first post." },
        { id: 2, userId: 1, title: "Second Post", body: "This is the content of the second post." },
        { id: 3, userId: 1, title: "Third Post", body: "This is the content of the third post." },
        { id: 4, userId: 1, title: "Fourth Post", body: "This is the content of the fourth post." },
        { id: 5, userId: 1, title: "Fifth Post", body: "This is the content of the fifth post." },
        { id: 6, userId: 1, title: "Sixth Post", body: "This is the content of the sixth post." },
        { id: 7, userId: 1, title: "Seventh Post", body: "This is the content of the seventh post." },
        { id: 8, userId: 1, title: "Eighth Post", body: "This is the content of the eighth post." },
        { id: 9, userId: 1, title: "Ninth Post", body: "This is the content of the ninth post." },
        { id: 10, userId: 1, title: "Tenth Post", body: "This is the content of the tenth post." }
    ];
    const [currentPage, setCurrentPage] = useState(1)
    const itemsPerPage = 5;
    const currentItems = samplePosts.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage)

    return (
        <>
            <PostsLists posts={currentItems}></PostsLists>
            <Pagination
                totalItems={samplePosts.length}
                itemsPerPage={5}
                currentPage={currentPage}
                onPageChange={setCurrentPage}>
            </Pagination>
        </>
    )
}