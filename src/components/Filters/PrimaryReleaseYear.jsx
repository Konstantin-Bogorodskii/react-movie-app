import React, { Component } from 'react';
import PropTypes from 'prop-types';

class PrimaryReleaseYear extends Component {
  static propTypes = {
    onChangeFilters: PropTypes.func.isRequired,
    year: PropTypes.number.isRequired,
  };

  static defaultProps = {
    years: [
      {
        lable: '2021',
        value: '2021',
      },
      {
        lable: '2020',
        value: '2020',
      },
      {
        lable: '2019',
        value: '2019',
      },
      {
        lable: '2018',
        value: '2018',
      },
      {
        lable: '2017',
        value: '2017',
      },
      {
        lable: '2016',
        value: '2016',
      },
      {
        lable: '2015',
        value: '2015',
      },
      {
        lable: '2014',
        value: '2014',
      },
      {
        lable: '2013',
        value: '2013',
      },
      {
        lable: '2012',
        value: '2012',
      },
      {
        lable: '2011',
        value: '2011',
      },
      {
        lable: '2010',
        value: '2010',
      },
      {
        lable: '2009',
        value: '2009',
      },
      {
        lable: '2008',
        value: '2008',
      },
      {
        lable: '2007',
        value: '2007',
      },
      {
        lable: '2006',
        value: '2006',
      },
      {
        lable: '2005',
        value: '2005',
      },
      {
        lable: '2004',
        value: '2004',
      },
      {
        lable: '2003',
        value: '2003',
      },
      {
        lable: '2002',
        value: '2002',
      },
      {
        lable: '2001',
        value: '2001',
      },
      {
        lable: '2000',
        value: '2000',
      },
      {
        lable: '1999',
        value: '1999',
      },
    ],
  };
  render() {
    const { year, onChangeFilters, years } = this.props;
    return (
      <div className="form-group">
        <label htmlFor="year">Год релиза:</label>
        <select
          id="year"
          name="year"
          className="form-control"
          value={year}
          onChange={onChangeFilters}
        >
          {years.map(year => {
            return (
              <option key={year.value} value={year.value}>
                {year.lable}
              </option>
            );
          })}
        </select>
      </div>
    );
  }
}
export default PrimaryReleaseYear;
