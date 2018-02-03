import React from 'react';

export default class Footer extends React.Component {
  render() {
    return (
      <ul
        style={{ position: 'fixed', bottom: '0', width: '100%' }}
        className="footer nav navbar navbar-light bg-light d-flex justify-content-around mt-5 pt-3 pb-3"
      >
        <li className="nav-item">
          <a
            rel="noopener noreferrer"
            href="mailto:annagolasowska@gmail.com?Subject=Woof%20woof!"
            target="_top"
            className="media text-secondary"
          >
            <i
              className="fa fa-envelope fa-2x text-secondary"
              aria-hidden="true"
            />
          </a>
        </li>
        <li className="nav-item">
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.facebook.com/annagolasowska"
            className="media text-secondary"
          >
            <i
              className="fa fa-facebook fa-2x text-secondary"
              aria-hidden="true"
            />
          </a>
        </li>
        <li className="nav-item">
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://plus.google.com/communities/116921730043933493017"
            className="media text-secondary"
          >
            <i
              className="fa fa-google-plus fa-2x text-secondary"
              aria-hidden="true"
            />
          </a>
        </li>
        <li className="nav-item">
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://twitter.com/dogs"
            className="media text-secondary"
          >
            <i
              className="fa fa-twitter fa-2x text-secondary"
              aria-hidden="true"
            />
          </a>
        </li>
        <li className="nav-item">
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://github.com/golasowska/dogether"
            className="media text-secondary"
          >
            <i
              className="fa fa-github fa-2x text-secondary"
              aria-hidden="true"
            />
          </a>
        </li>
      </ul>
    );
  }
}
