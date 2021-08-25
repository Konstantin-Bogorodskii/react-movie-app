import React from 'react';
import Genres from './Genres';
import Pagiantion from './Pagiantion';
import PrimaryReleaseYear from './PrimaryReleaseYear';
import SortBy from './SortBy';

export default class Filters extends React.Component {
  render() {
    const {
      filters: { sort_by, year, with_genres },
      onChangeFilters,
      page,
      handlerPageChange,
      total_pages,
      onChangeGenre,
      onChangeGenres,
    } = this.props;

    return (
      <form className="mb-3">
        <SortBy sort_by={sort_by} onChangeFilters={onChangeFilters} />
        <PrimaryReleaseYear year={year} onChangeFilters={onChangeFilters} />
        <Genres
          onChangeGenre={onChangeGenre}
          onChangeGenres={onChangeGenres}
          with_genres={with_genres}
        />
        <Pagiantion handlerPageChange={handlerPageChange} page={page} total_pages={total_pages} />
      </form>
    );
  }
}
