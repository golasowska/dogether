import React from 'react';
import _ from 'lodash';
import { connect } from 'react-redux';
import Navigation from './Navigation';
import { Link } from 'react-router-dom';
import * as Actions from '../actions';
import ArticleData from '../components/ArticleData';

class Home extends React.Component{

  componentDidMount=()=> {
    this.props.displayArticles();
  };



  showArticle=()=>{
    if (this.props.articles) {
      for (const key of Object.keys(this.props.articles)){
        this.props.articles[key].key=(key);
      }
    }
      return _.map(this.props.articles, article=>{
        return <ArticleData key={article.key} article={article}/>
    })
}



  render(){
    console.log('propsiki title' , this.props.articles);
    return (
        <div>
          <Navigation />
          <div>
            {this.showArticle()}
          </div>
          <Link className='btn btn-info' to='/newarticle'>Add new article</Link>
        </div>
    )
  }
}

function mapStateToProps(state) {
  console.log('artykuly', state.displayart);
  return {
    articles: state.displayart
  }
}


export default connect(mapStateToProps, Actions) (Home);
