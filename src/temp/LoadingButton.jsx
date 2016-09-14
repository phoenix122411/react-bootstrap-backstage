import React from 'react';
var BS = require('react-bootstrap');

const LoadingButton = React.createClass({
  getInitialState() {
    return {
      isLoading: false
    };
  },

  render() {
    let isLoading = this.state.isLoading;
    return (
      <BS.Button
        bsStyle="primary"
        disabled={isLoading}
        onClick={!isLoading ? this.handleClick : null}>
        {isLoading ? 'Loading...' : 'Loading state'}
      </BS.Button>
    );
  },

  handleClick() {
    this.setState({isLoading: true});
    setTimeout(() => {
      this.setState({isLoading: false});
    }, 2000);
  }
});

export default LoadingButton;