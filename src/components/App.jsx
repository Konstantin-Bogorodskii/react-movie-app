import React from 'react';
import Filters from './Filters/Filters';
import MoviesList from './Movies/MoviesList';

export default class App extends React.Component {
  constructor() {
    super();

    this.state = {
      filters: {
        sort_by: 'popularity.desc',
        year: '2021-07-28',
      },
      page: 1,
      pagesCount: null,
    };
  }

  onChangeFilters = event => {
    const newFilters = { ...this.state.filters, [event.target.name]: event.target.value };
    this.setState({
      filters: newFilters,
    });
  };

  handlerPageChange = page => {
    this.setState({ page });
  };

  render() {
    const { filters, page, pagesCount } = this.state;
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
                />
              </div>
            </div>
          </div>
          <div className="col-8">
            <MoviesList
              filters={filters}
              page={page}
              handlerPageChange={this.handlerPageChange}
              pagesCount={pagesCount}
            />
          </div>
        </div>
      </div>
    );
  }
}
