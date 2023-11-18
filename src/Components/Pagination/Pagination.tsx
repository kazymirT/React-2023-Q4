import { PaginationPropsType } from '../../type/type';

export const Pagination = (props: PaginationPropsType) => {
  const skip: number = (Number(props.page) - 1) * Number(props.limit);
  const totalPages: number = Math.ceil(
    Number(props.total) / Number(props.limit)
  );
  const currentPage: number = Number(skip) / Number(props.limit) + 1;

  const handlePrevPage = () => {
    props.onChange(currentPage - 1, totalPages);
  };
  const handleNextPage = () => {
    props.onChange(currentPage + 1, totalPages);
  };

  return (
    <div className="pagination">
      <button onClick={handlePrevPage} disabled={currentPage === 1}>
        &#8656;
      </button>
      <span>
        {currentPage}/{totalPages}
      </span>
      <button onClick={handleNextPage} disabled={currentPage === totalPages}>
        &#8658;
      </button>
    </div>
  );
};
