import React from 'react';
import Pagiantion from './Pagiantion';
import PrimaryReleaseYear from './PrimaryReleaseYear';
import SortBy from './SortBy';

export default class Filters extends React.Component {
  render() {
    const {
      filters: { sort_by, year },
      onChangeFilters,
      page,
      handlerPageChange,
    } = this.props;

    return (
      <form className="mb-3">
        <SortBy sort_by={sort_by} onChangeFilters={onChangeFilters} />
        <PrimaryReleaseYear year={year} onChangeFilters={onChangeFilters} />
        <Pagiantion handlerPageChange={handlerPageChange} page={page} />
      </form>
    );
  }
}
