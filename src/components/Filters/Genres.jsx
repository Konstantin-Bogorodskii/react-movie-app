import React, { Component } from 'react';

class Genres extends Component {
  static defaultProps = {
    genresList: [
      { id: 28, name: 'Action' },
      { id: 12, name: 'Adventure' },
      { id: 16, name: 'Animation' },
      { id: 35, name: 'Comedy' },
      { id: 80, name: 'Crime' },
      { id: 99, name: 'Documentary' },
      { id: 18, name: 'Drama' },
      { id: 10751, name: 'Family' },
      { id: 14, name: 'Fantasy' },
      { id: 36, name: 'History' },
      { id: 27, name: 'Horror' },
      { id: 10402, name: 'Music' },
      { id: 9648, name: 'Mystery' },
      { id: 10749, name: 'Romance' },
      { id: 878, name: 'Science Fiction' },
      { id: 10770, name: 'TV Movie' },
      { id: 53, name: 'Thriller' },
      { id: 10752, name: 'War' },
      { id: 37, name: 'Western' },
    ],
  };

  render() {
    const { genresList, onChangeGenre } = this.props;

    return (
      <div className="form-group">
        {genresList.map(item => {
          return (
            <div className="custom-control custom-checkbox" key={item.id}>
              <input
                type="checkbox"
                className="custom-control-input"
                id={item.id}
                value={item.id}
                onClick={onChangeGenre}
              />
              <label htmlFor={item.id} className="custom-control-label">
                {item.name}
              </label>
            </div>
          );
        })}
      </div>
    );
  }
}

export default Genres;
