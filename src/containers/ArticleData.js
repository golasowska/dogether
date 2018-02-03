import React from 'react';
import PreviewPicture from './PreviewPicture';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import Navigation from './Navigation';
import Footer from './Footer';

class ArticleData extends React.Component {
  render() {
    const { title, content, picture } = this.props.article;
    return (
      <div>
        <Navigation />
        <div className="container">
          <div className="card text-center mt-3">
            <div className="card-header">
              <h4 className="card-title">{title} </h4>
            </div>
            <div className="card-body">
              <p className="text-body text-justify">{content}</p>
              <div>
                <PreviewPicture pictureUrl={picture} />
              </div>
              <Link to="/home" className="btn btn-info">
                Go back
              </Link>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}
function mapStateToProps(state) {
  return {
    article: state.sendDataToArticleData
  };
}

export default connect(mapStateToProps, null)(ArticleData);
