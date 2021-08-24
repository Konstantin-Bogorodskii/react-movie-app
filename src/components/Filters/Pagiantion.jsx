import React, { Component } from 'react';

class Pagiantion extends Component {
  render() {
    const { page, handlerPageChange, total_pages } = this.props;
    return (
      <>
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
        <div style={{ fontSize: '20px', color: 'lightblue' }}>
          {page} из {total_pages}{' '}
        </div>
      </>
    );
  }
}
export default Pagiantion;
