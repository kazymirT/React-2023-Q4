import { PaginationPropsType } from '../type/type';

export const Pagination = (props: PaginationPropsType) => {
  const totalPages: number = Math.ceil(
    Number(props.total) / Number(props.limit)
  );
  const currentPage: number = props.page === 0 || isNaN(props.page) ? 1 : props.page;
  const handlePrevPage = () => {
    props.onChange(currentPage - 1, totalPages);
  };
  const handleNextPage = () => {
    props.onChange(currentPage + 1, totalPages);
  };

  return (
    <div className="pagination">
      <button
        onClick={handlePrevPage}
        data-testid="btn-prev"
        disabled={currentPage === 1}
      >
        &#8656;
      </button>
      <span>
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
