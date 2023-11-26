import { SelectPropsType } from "../type/type";

export const Select = (props: SelectPropsType) => {
  return (
    <>
      <div className="selectContainer">
        <span>Cards per page:</span>
        <select value={props.limit} onChange={props.onChange}>
          <option value="5">5</option>
          <option value="10">10</option>
          <option value="20">20</option>
          <option value="50">50</option>
        </select>
      </div>
    </>
  );
};
