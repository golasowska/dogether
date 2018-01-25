import React from 'react';
import * as Actions from '../actions';
import { connect } from 'react-redux';
import _ from 'lodash';

import MessageData from './MessageData';

class Messages extends React.Component {
  componentDidMount = () => {
    this.props.displayMessages();
  };

  showMessages = () => {
    if (this.props.messages) {
      for (const key of Object.keys(this.props.messages)) {
        this.props.messages[key].key = key;
      }
    }
    return _.map(this.props.messages, message => {
      return <MessageData key={message.key} message={message} />;
    });
  };

  render() {
    return (
      <div>
        {this.props.messages ? (
          <div className="row justify-content-around">
            {this.showMessages()}
          </div>
        ) : (
          <div className="alert alert-info">You have no messages</div>
        )}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    messages: state.displayMessages
  };
}

export default connect(mapStateToProps, Actions)(Messages);
