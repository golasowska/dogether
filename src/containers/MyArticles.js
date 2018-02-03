import React from 'react';
import * as Actions from '../actions';
import { connect } from 'react-redux';
import _ from 'lodash';

import MyArticleData from './MyArticleData';

class MyArticles extends React.Component {
  componentDidMount = () => {
    this.props.displayMyArticles();
  };

  showMyArticles = () => {
    if (this.props.myArticles) {
      for (const key of Object.keys(this.props.myArticles)) {
        this.props.myArticles[key].key = key;
      }
    }
    return _.map(this.props.myArticles, article => {
      return (
        <MyArticleData
          key={article.key}
          article={article}
          removeArticle={this.props.removeArticle}
        />
      );
    });
  };

  render() {
    return (
      <div>
        {this.props.myArticles ? (
          <div className="my-articles-list">{this.showMyArticles()}</div>
        ) : (
          <div className="alert alert-info">You have no articles</div>
        )}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    myArticles: state.displayMyArticles
  };
}

export default connect(mapStateToProps, Actions)(MyArticles);
