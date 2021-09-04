import React, { Component } from 'react';
import { API_URL, API_KEY_3 } from '../../api/api';
import { Modal, ModalBody } from 'reactstrap';
import LoginForm from './LoginForm';

export class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      showModal: false,
    };
  }

  toggleModal = () => {
    this.setState(prevState => ({
      showModal: !prevState.showModal,
    }));
  };

  sendPromise = async () => {
    const fetchApi = (url, options = {}) => {
      return new Promise((resolve, reject) => {
        fetch(`${API_URL}/authentication/token/new?api_key=${API_KEY_3}`)
          .then(response => {
            if (response.status < 400) {
              return response.json();
            } else {
              throw response;
            }
          })
          .then(data => {
            resolve(data);
          })
          .catch(response => {
            response.json().then(error => {
              reject(error);
            });
          });
      });
    };

    const data = await fetchApi(`${API_URL}/authentication/token/new?api_key=${API_KEY_3}`);
    const result = await fetchApi(
      `${API_URL}/authentication/token/validate_with_login?api_key=${API_KEY_3}`,
      {
        method: 'POST',
        mode: 'cors',
        headers: {
          'Content-type': 'application/json',
        },
        body: JSON.stringify({
          username: 'kbogorodsky',
          password: 'JirWOW19IWNLswag06',
          request_token: data.request_token,
        }),
      }
    );
    const { request_token } = await fetchApi(
      `${API_URL}/authentication/session/new?api_key=${API_KEY_3}`,
      {
        method: 'POST',
        mode: 'cors',
        headers: {
          'Content-type': 'application/json',
        },
        body: JSON.stringify({
          request_token: result.request_token,
        }),
      }
    );
  };

  render() {
    return (
      <div>
        <button className="btn btn-success" type="button" onClick={this.toggleModal}>
          Login
        </button>
        <Modal isOpen={this.state.showModal} toggle={this.toggleModal}>
          <ModalBody>
            <LoginForm />
          </ModalBody>
        </Modal>
      </div>
    );
  }
}

export default Login;
