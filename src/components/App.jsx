import React from 'react';
import Filters from './Filters/Filters';
import MoviesList from './Movies/MoviesList';

export default class App extends React.Component {
  constructor() {
    super();

    this.state = {
      filters: {
        sort_by: 'popularity.desc',
        year: new Date().getFullYear(),
        with_genres: [],
      },
      page: 1,
      total_pages: '',
    };
  }

  onChangeFilters = event => {
    const newFilters = { ...this.state.filters, [event.target.name]: event.target.value };
    this.setState({
      filters: newFilters,
    });
  };

  onChangeGenres = list => {
    this.setState(state => ({
      filters: {
        ...state.filters,
        with_genres: list,
      },
    }));
  };

  onChangeGenre = event => {
    const id = event.target.value;
    const { with_genres } = this.state.filters;
    let newGenres = [];

    if (with_genres.includes(id)) {
      newGenres.filter(el => el !== id);
    } else {
      newGenres = [...with_genres, id];
    }

    this.setState(state => ({
      filters: {
        ...state.filters,
        with_genres: newGenres,
      },
    }));
  };

  handlerPageChange = page => {
    this.setState({ page });
  };

  setTotalPages = total_pages => {
    this.setState({ total_pages });
  };

  render() {
    const { filters, page, total_pages } = this.state;
    return (
      <div className="container">
        <div className="row mt-4">
          <div className="col-4">
            <div className="card" style={{ width: '100%' }}>
              <div className="card-body">
                <h3>Фильтры:</h3>
                <Filters
                  filters={filters}
                  onChangeFilters={this.onChangeFilters}
                  page={page}
                  handlerPageChange={this.handlerPageChange}
                  total_pages={total_pages}
                  onChangeGenre={this.onChangeGenre}
                  onChangeGenres={this.onChangeGenres}
                />
              </div>
            </div>
          </div>
          <div className="col-8">
            <MoviesList
              filters={filters}
              page={page}
              handlerPageChange={this.handlerPageChange}
              setTotalPages={this.setTotalPages}
            />
          </div>
        </div>
      </div>
    );
  }
}
