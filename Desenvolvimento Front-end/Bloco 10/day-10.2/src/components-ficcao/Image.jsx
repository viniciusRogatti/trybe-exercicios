import React from 'react';

class Image extends React.Component {
  render() {
    return <img src={this.props.source} alt={this.props.alternativeText} width={this.props.width}height={this.props.height}/>;
  }
}

export default Image;