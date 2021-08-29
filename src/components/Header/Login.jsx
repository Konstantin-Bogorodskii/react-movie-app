import React, { Component } from 'react';
import { API_URL, API_KEY_3 } from '../../api/api';

export class Login extends Component {
  sendPromise = async () => {
    // const getRequestToken = () => {
    //   return new Promise((resolve, reject) => {
    //     fetch(`${API_URL}/authentication/token/new?api_key=${API_KEY_3}`)
    //       .then(response => {
    //         if (response.status < 400) {
    //           return response.json();
    //         } else {
    //           throw response;
    //         }
    //       })
    //       .then(data => {
    //         resolve(data);
    //       })
    //       .catch(response => {
    //         response.json().then(error => {
    //           reject(error);
    //         });
    //       });
    //   });
    // };

    // const validateWithLogin = body => {
    //   return new Promise((resolve, reject) => {
    //     fetch(`${API_URL}/authentication/token/validate_with_login?api_key=${API_KEY_3}`, {
    //       method: 'POST',
    //       mode: 'cors',
    //       headers: {
    //         'Content-type': 'application/json',
    //       },
    //       body: JSON.stringify(body),
    //     })
    //       .then(response => {
    //         if (response.status < 400) {
    //           return response.json();
    //         } else {
    //           throw response;
    //         }
    //       })
    //       .then(data => {
    //         resolve(data);
    //       })
    //       .catch(response => {
    //         response.json().then(error => {
    //           reject(error);
    //         });
    //       });
    //   });
    // };

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
    console.log(result);
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

    console.log(request_token);
  };

  //   fetchApi(`${API_URL}/authentication/token/new?api_key=${API_KEY_3}`)
  //     .then(data => {
  //       return fetchApi(
  //         `${API_URL}/authentication/token/validate_with_login?api_key=${API_KEY_3}`,
  //         {
  //           method: 'POST',
  //           mode: 'cors',
  //           headers: {
  //             'Content-type': 'application/json',
  //           },
  //           body: JSON.stringify({
  //             username: 'kbogorodsky',
  //             password: 'JirWOW19IWNLswag06',
  //             request_token: data.request_token,
  //           }),
  //         }
  //       );
  //     })
  //     .then(data => {
  //       return fetchApi(`${API_URL}/authentication/session/new?api_key=${API_KEY_3}`, {
  //         method: 'POST',
  //         mode: 'cors',
  //         headers: {
  //           'Content-type': 'application/json',
  //         },
  //         body: JSON.stringify({
  //           request_token: data.request_token,
  //         }),
  //       });
  //     })
  //     .then(data => {
  //       console.log(data);
  //     })
  //     .catch(error => console.warn(error));
  // };

  //   fetch(`${API_URL}/authentication/token/new?api_key=${API_KEY_3}`)
  //     .then(response => response.json())
  //     .then(data => {
  //       fetch(`${API_URL}/authentication/token/validate_with_login?api_key=${API_KEY_3}`, {
  //         method: 'POST',
  //         mode: 'cors',
  //         headers: {
  //           'Content-type': 'application/json',
  //         },
  //         body: JSON.stringify({
  //           username: 'kbogorodsky',
  //           password: 'JirWOW19IWNLswag06',
  //           request_token: data.request_token,
  //         }),
  //       })
  //         .then(response => response.json())
  //         .then(data => {
  //           fetch(`${API_URL}/authentication/session/new?api_key=${API_KEY_3}`, {
  //             method: 'POST',
  //             mode: 'cors',
  //             headers: {
  //               'Content-type': 'application/json',
  //             },
  //             body: JSON.stringify({
  //               request_token: data.request_token,
  //             }),
  //           })
  //             .then(response => response.json())
  //             .then(data => console.log(data));
  //         });
  //     });
  // };

  render() {
    return (
      <div>
        <button className="btn btn-success" type="button" onClick={this.sendPromise}>
          Login
        </button>
      </div>
    );
  }
}

export default Login;
