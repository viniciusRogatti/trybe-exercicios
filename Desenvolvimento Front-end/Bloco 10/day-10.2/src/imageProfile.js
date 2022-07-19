// arquivo Image.js
import React from 'react';

class ImageProfile extends React.Component {
  render() {
    return <img src={this.props.source} alt={this.props.alternativeText} />;
  }
}

export default ImageProfile;