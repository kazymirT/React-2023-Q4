import './style.css';
import React from 'react';
import { SearchProps, SearchState } from '../../type/type';

export default class Search extends React.Component<SearchProps, SearchState> {
  constructor(props: SearchProps) {
    super(props);
    this.state = {
      inputValue: this.props.value,
    };
  }

  handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({ inputValue: event.target.value });
  };

  render() {
    return (
      <div className="search">
        <div>
          <input
            defaultValue={this.props.value}
            onChange={this.handleInputChange}
            type="text"
          />
          <button onClick={() => this.props.onClick(this.state.inputValue)}>
            Search
          </button>
        </div>
      </div>
    );
  }
}
