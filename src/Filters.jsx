import React, { Component } from "react";

class Filters extends Component {
  render() {
    const { onChangeFilter } = this.props;

    return (
      <div className="Filters">
        <button
          className="Filters__button Filters__button--all"
          onClick={onChangeFilter.bind(this, "all")}
        >
          All
        </button>
        <button
          className="Filters__button Filters__button--active"
          onClick={onChangeFilter.bind(this, "active")}
        >
          Active
        </button>
        <button
          className="Filters__button Filters__button--completed"
          onClick={onChangeFilter.bind(this, "completed")}
        >
          Completed
        </button>
      </div>
    );
  }
}

export default Filters;
