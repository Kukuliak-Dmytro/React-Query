import { useEffect, useState } from "react";
import { useQuery } from "@tanstack/react-query";


export const useFetchPaginated = <T,>(fetchData: () => Promise<T[]>) => {
    const { isFetching, data: posts, error } = useQuery({
        queryKey: ["posts"],
        queryFn: fetchData,
    
        
    });

    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 5;
    const [currentItems, setCurrentItems] = useState<T[]>([]);

    useEffect(() => {
        if (posts) {
            const indexOfLastItem = currentPage * itemsPerPage;
            const newCurrentItems = posts.slice((currentPage - 1) * itemsPerPage, indexOfLastItem);
            setCurrentItems(newCurrentItems);
        }
    }, [posts, currentPage]);

    const totalPages = posts ? Math.ceil(posts.length / itemsPerPage) : 0;

    const goToPreviousPage = () => {
        if (currentPage > 1) {
            setCurrentPage(prev => prev - 1);
        }
    };

    const goToNextPage = () => {
        if (currentPage < totalPages) {
            setCurrentPage(prev => prev + 1);
        }
    };

    return {
        isFetching,
        posts,
        currentItems,
        currentPage,
        totalPages,
        goToPreviousPage,
        goToNextPage,
        setCurrentPage,
        error
    };
};
