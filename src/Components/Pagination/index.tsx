import { PaginationProps } from '../../type/type';

export const Pagination = (props: PaginationProps) => {
  const handlePageChange = (newPage: number) => {
    if (newPage >= 1 && newPage <= props.totalPages) {
      props.onPageChange(newPage);
    }
  };

  return (
    <div className="pagination">
      <button
        onClick={() => handlePageChange(props.currentPage - 1)}
        disabled={props.currentPage === 1}
      >
        Назад
      </button>
      <span>
        Сторінка {props.currentPage} з {props.totalPages}
      </span>
      <button
        onClick={() => handlePageChange(props.currentPage + 1)}
        disabled={props.currentPage === props.totalPages}
      >
        Вперед
      </button>
    </div>
  );
};
