import { SelectProps } from '../../type/type';

export const Select = (props: SelectProps) => {
  return (
    <select value={props.selectedValue} onChange={props.onChange}>
      <option value="5">5</option>
      <option value="10">10</option>
      <option value="15">15</option>
      <option value="20">20</option>
    </select>
  );
};
