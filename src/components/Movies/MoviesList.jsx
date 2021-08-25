import React, { Component } from 'react';
import MovieItem from './MovieItem';
import { API_URL, API_KEY_3 } from '../../api/api';

export default class MovieList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      movies: [],
      total_pages: 1,
    };
  }

  getMovies = (filters, page) => {
    // &with_genres=${with_genres}
    const { sort_by, year, with_genres } = filters;
    const link = `${API_URL}/discover/movie?api_key=${API_KEY_3}&language=ru-RU&sort_by=${sort_by}&page=${page}&primary_release_year=${year}&with_genres=${with_genres}`;
    fetch(link)
      .then(response => {
        return response.json();
      })
      .then(data => {
        console.log(data);
        this.setState({
          movies: data.results,
          total_pages: data.total_pages,
        });
        this.props.setTotalPages(data.total_pages);
      });
  };

  componentDidMount() {
    this.getMovies(this.props.filters, this.props.page);
  }

  componentDidUpdate(prevProps) {
    if (this.props.filters.sort_by !== prevProps.filters.sort_by) {
      this.getMovies(this.props.filters, 1);
      this.props.handlerPageChange(1);
    }

    if (this.props.page !== prevProps.page) {
      this.getMovies(this.props.filters, this.props.page);
    }

    if (this.props.filters.year !== prevProps.filters.year) {
      this.getMovies(this.props.filters, 1);
      this.props.handlerPageChange(1);
    }

    if (this.props.filters.with_genres !== prevProps.filters.with_genres) {
      this.getMovies(this.props.filters, this.props.page);
    }

    // this.props.setTotalPages(this.state.total_pages);
  }

  render() {
    const { movies } = this.state;
    return (
      <div className="row">
        {movies.map(movie => {
          return (
            <div key={movie.id} className="col-6 mb-4">
              <MovieItem item={movie} />
            </div>
          );
        })}
      </div>
    );
  }
}
