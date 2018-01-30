import React from 'react';
import _ from 'lodash';
import { connect } from 'react-redux';
import Navigation from './Navigation';
import { Link } from 'react-router-dom';
import * as Actions from '../actions';
import ArticlePreview from './ArticlePreview';
import HomeGallery from './HomeGallery';

class Home extends React.Component {
  componentDidMount = () => {
    this.props.displayArticles();
  };

  showArticle = () => {
    if (this.props.articles) {
      for (const key of Object.keys(this.props.articles)) {
        this.props.articles[key].key = key;
      }
    }
    return _.map(this.props.articles, article => {
      return <ArticlePreview key={article.key} article={article} />;
    });
  };

  render() {
    // console.log('propsiki title', this.props.articles);
    return (
      <div>
        <Navigation />
        <HomeGallery />
        <div>{this.showArticle()}</div>
        <Link
          className="btn btn-info btn-lg btn-block mt-4 mb-4"
          to="/newarticle"
        >
          Add new article
        </Link>
      </div>
    );
  }
}

function mapStateToProps(state) {
  console.log('artykuly', state.displayart);
  return {
    articles: state.displayart
  };
}

export default connect(mapStateToProps, Actions)(Home);
