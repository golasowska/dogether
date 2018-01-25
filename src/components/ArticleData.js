import React from 'react';
import PreviewPicture from '../containers/PreviewPicture';

export default class ArticleData extends React.Component {
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
      </div>
    );
  }
}
