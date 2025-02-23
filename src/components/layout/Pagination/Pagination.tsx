interface PaginationProps{
    currentPage:number;
    totalItems:number;
    itemsPerPage:number;
    onPageChange:(newPage:number)=>void
}
import Button from "../../common/Button/Button";
export default function Pagination({currentPage, totalItems, itemsPerPage, onPageChange}:PaginationProps){
    const totalPages = Math.ceil(totalItems / itemsPerPage);

    const goToPreviousPage = () => {
        if (currentPage > 1) {
            onPageChange(currentPage - 1);
        }
    };

    const goToNextPage = () => {
        if (currentPage < totalPages) {
            onPageChange(currentPage + 1);
        }
    };
    return(
        <div className="pagination-wrapper">
            <Button disabled={currentPage===1? true :false} onClick={goToPreviousPage}>Previous</Button>
            <Button disabled={currentPage===totalPages? true :false} onClick={goToNextPage}>Next</Button>
        </div>
    )
}
