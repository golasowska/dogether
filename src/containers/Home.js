import React from 'react';
import Navigation from './Navigation';
import NewArticle from './NewArticle';

class Home extends React.Component{
  render(){
    return (
        <div>
          <Navigation />
          <div>home</div>
          <NewArticle />
        </div>
    )
  }
}

export default Home;
