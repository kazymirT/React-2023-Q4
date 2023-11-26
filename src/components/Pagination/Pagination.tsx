import React from "react";
import { PaginationPropsType } from "../type/type";

export const Pagination: React.FC<PaginationPropsType> = ({
  limit,
  page,
  total,
  onChange,
}) => {
  const skip: number = (Number(page) - 1) * Number(limit);
  const currentPage: number = Number(skip) / Number(limit) + 1;
  const totalPages: number = Math.ceil(Number(total) / Number(limit));

  const handlePrevPage = () => {
    onChange(currentPage - 1, totalPages);
  };
  const handleNextPage = () => {
    onChange(currentPage + 1, totalPages);
  };

  return (
    <div className="pagination" data-testid={"pagination"}>
      <button
        onClick={handlePrevPage}
        data-testid="btn-prev"
        disabled={currentPage === 1}
      >
        &#8656;
      </button>
      <span data-testid={"pagination-page"}>
        {currentPage}/{totalPages}
      </span>
      <button
        onClick={handleNextPage}
        data-testid="btn-next"
        disabled={currentPage === totalPages}
      >
        &#8658;
      </button>
    </div>
  );
};
