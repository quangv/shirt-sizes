import React from 'react';
import ReactCSSTransition from 'react-addons-css-transition-group';

class Results extends React.Component {
  render(){
    let results = this.props.images.map(function(uri){
      return <li key={uri}><img src={uri} /></li>
    });
    return (
      <ul>
        <ReactCSSTransition transitionName="result" transitionEnterTimeout={500} transitionLeaveTimeout={300}>
          {results}
        </ReactCSSTransition>
      </ul>
    )
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
