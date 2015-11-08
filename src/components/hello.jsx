'use strict';

import React from 'react';

class Hello extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (<h1>{this.props.name}</h1>);
  }
}

Hello.propTypes = { name: React.PropTypes.string };

export default Hello;
