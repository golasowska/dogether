import React from 'react';

export default class Footer extends React.Component {
  render() {
    return (
      <ul className="nav d-flex justify-content-center">
        <li className="nav-item mb-5 mr-5">
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.facebook.com/annagolasowska"
            className="media text-dark"
          >
            <i className="fa fa-facebook fa-2x text-dark" aria-hidden="true" />
          </a>
        </li>
        <li className="nav-item mb-5 mr-5">
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.facebook.com/annagolasowska"
            className="media text-dark"
          >
            <i
              className="fa fa-google-plus fa-2x text-dark"
              aria-hidden="true"
            />
          </a>
        </li>
        <li className="nav-item mb-5 mr-5">
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.facebook.com/annagolasowska"
            className="media text-dark"
          >
            <i className="fa fa-twitter fa-2x text-dark" aria-hidden="true" />
          </a>
        </li>
      </ul>
    );
  }
}
