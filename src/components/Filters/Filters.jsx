import React from 'react';
import SortBy from './SortBy';

export default class Filters extends React.Component {
  render() {
    const {
      filters: { sort_by },
      onChangeFilters,
      page,
      handlerPageChange,
    } = this.props;

    return (
      <form className="mb-3">
        <SortBy sort_by={sort_by} onChangeFilters={onChangeFilters} />

        <div className="btn-group">
          <button
            type="button"
            className="btn btn-light"
            disabled={page === 1}
            onClick={() => handlerPageChange(page - 1)}
          >
            Назад
          </button>
          <button
            type="button"
            className="btn btn-light"
            onClick={() => handlerPageChange(page + 1)}
          >
            Вперёд
          </button>
        </div>
      </form>
    );
  }
}
