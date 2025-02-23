import Button from "../../common/Button/Button";

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (newPage: number) => void;
  goToPreviousPage?: () => void;
  goToNextPage?: () => void;
}

export default function Pagination({
  currentPage,
  totalPages,
  onPageChange,
  goToPreviousPage,
  goToNextPage,
}: PaginationProps) {
  return (
    <div className="pagination-wrapper">
      <Button
        disabled={currentPage === 1}
        onClick={goToPreviousPage || (() => onPageChange(currentPage - 1))}
      >
        Previous
      </Button>
      <span>
        Page {currentPage} of {totalPages}
      </span>
      <Button
        disabled={currentPage === totalPages}
        onClick={goToNextPage || (() => onPageChange(currentPage + 1))}
      >
        Next
      </Button>
    </div>
  );
}
