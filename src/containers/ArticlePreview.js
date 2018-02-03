import React from 'react';
import PreviewPictureArticle from './PreviewPictureArticle';
import { Link } from 'react-router-dom';
import * as Actions from '../actions';
import { connect } from 'react-redux';

class ArticlePreview extends React.Component {
  handleClick = () => {
    this.props.sendDataToArticleData(this.props.article);
  };
  render() {
    const { title, picture } = this.props.article;
    return (
      <div className="position-relative d-inline-block col-lg-6">
        <Link
          to={`/articledata/${this.props.article.key}`}
          onClick={this.handleClick}
        >
          <div className="text-center">
            <h3 className="position-absolute preview-title text-dark">
              {title}{' '}
            </h3>
          </div>

          <PreviewPictureArticle pictureUrl={picture} />
        </Link>
      </div>
    );
  }
}

export default connect(null, Actions)(ArticlePreview);
