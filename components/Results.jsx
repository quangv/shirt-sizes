import React from 'react';

class Results extends React.Component {
  render(){
    let results = this.props.images.map(function(uri){
      return <li key={uri}><img src={uri} /></li>
    });
    return  <ul>{results}</ul>
  }
}

Results.propTypes = {
  images: React.PropTypes.array
}

Results.defaultProps = {
  images: []
}

//export default ChoiceBox
module.exports = Results
