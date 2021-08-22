import React, { Component } from 'react';
import PropTypes from 'prop-types';

class SortBy extends Component {
  static propTypes = {
    onChangeFilters: PropTypes.func.isRequired,
    sort_by: PropTypes.string.isRequired,
  };

  static defaultProps = {
    options: [
      {
        lable: 'Популярные по убыванию',
        value: 'popularity.desc',
      },
      {
        lable: 'Популярные по возростанию',
        value: 'popularity.asc',
      },
      {
        lable: 'Рейтинг по убыванию',
        value: 'vote_average.desc',
      },
      {
        lable: 'Рейтинг по возростанию',
        value: 'vote_average.asc',
      },
    ],
  };

  render() {
    const { sort_by, onChangeFilters, options } = this.props;

    return (
      <div className="form-group">
        <label htmlFor="sort_by">Сортировать по:</label>
        <select
          id="sort_by"
          name="sort_by"
          className="form-control"
          value={sort_by}
          onChange={onChangeFilters}
        >
          {options.map(option => {
            return (
              <option key={option.value} value={option.value}>
                {option.lable}
              </option>
            );
          })}
        </select>
      </div>
    );
  }
}
export default SortBy;
