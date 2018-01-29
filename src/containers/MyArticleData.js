import React from 'react';
import PreviewPicture from '../containers/PreviewPicture';

export default class MyArticleData extends React.Component {
  removeArticle = () => {
    this.props.removeArticle(this.props.article.key);
  };

  render() {
    const { title, content, picture } = this.props.article;
    return (
      <div>
        <div>
          <h4>Title: {title} </h4>
        </div>
        <div>
          <div className="text-justify">Content : {content}</div>
        </div>
        <div>
          <PreviewPicture pictureUrl={picture} />
        </div>
        <button onClick={this.removeArticle}>Remove from server</button>
      </div>
    );
  }
}
