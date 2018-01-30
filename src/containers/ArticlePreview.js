import React from 'react';
import PreviewPicture from './PreviewPicture';
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
      <div>
        <div>
          <h4>{title} </h4>
        </div>
        <Link to="/articledata" onClick={this.handleClick}>
          <PreviewPicture pictureUrl={picture} />
        </Link>
      </div>
    );
  }
}

export default connect(null, Actions)(ArticlePreview);
