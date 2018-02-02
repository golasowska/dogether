import React from 'react';
import PreviewPicture from '../containers/PreviewPicture';

export default class MyArticleData extends React.Component {
  removeArticle = () => {
    this.props.removeArticle(this.props.article.key);
  };

  render() {
    const { title, picture } = this.props.article;
    return (
      <div className="d-inline-block">
        <div className="card-vet card bg-light mb-3 text-left">
          <h4 className="card-header card-title bg-info">{title} </h4>
          <div className="card-body">
            <PreviewPicture pictureUrl={picture} />
            <button className="btn btn-info" onClick={this.removeArticle}>
              Remove from server
            </button>
          </div>
        </div>
      </div>
    );
  }
}
