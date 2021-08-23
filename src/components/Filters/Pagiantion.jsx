import React, { Component } from 'react';

class Pagiantion extends Component {
  render() {
    const { page, handlerPageChange } = this.props;
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
        <div>{page} из 1000 </div>
      </>
    );
  }
}
export default Pagiantion;
