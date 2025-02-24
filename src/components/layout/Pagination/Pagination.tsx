import Button from "../../common/Button/Button";

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  goToPreviousPage?: () => void;
  goToNextPage?: () => void;
}

export default function Pagination({
  currentPage,
  totalPages,
  goToPreviousPage,
  goToNextPage,
}: PaginationProps) {
  return (
    <div className="pagination-wrapper">
      <Button
        disabled={currentPage === 1}
        onClick={goToPreviousPage}
      >
        Previous
      </Button>
      <span>
        Page {currentPage} of {totalPages}
      </span>
      <Button
        disabled={currentPage === totalPages}
        onClick={goToNextPage }
      >
        Next
      </Button>
    </div>
  );
}
