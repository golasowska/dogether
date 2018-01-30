import React from 'react';
import PreviewPicture from './PreviewPicture';
import { connect } from 'react-redux';

import Navigation from './Navigation';

class ArticleData extends React.Component {
  render() {
    const { title, content, picture } = this.props.article;
    return (
      <div>
        <Navigation />
        <div>
          <h4>{title} </h4>
        </div>
        <div>
          <div className="text-justify">{content}</div>
        </div>
        <div>
          <PreviewPicture pictureUrl={picture} />
        </div>
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
