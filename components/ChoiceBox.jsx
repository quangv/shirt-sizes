import React from 'react';
import Choice from './Choice'

import {Sizes} from '../actions';

class ChoiceBox extends React.Component {
  render(){
    let choices = [
      {
        title: 'small',
        size: Sizes.SMALL
      },
      {
        title: 'medium',
        size: Sizes.MEDIUM
      },
      {
        title: 'large',
        size: Sizes.LARGE
      },
      {
        title: 'xl',
        size: Sizes.XLARGE
      }
    ];

    return (
      <div>
        {choices.map(choice => {
          return <Choice key={choice.title} size={choice.size} title={choice.title} isSelected={this.props.selectedSize === choice.size} onSelect={this.props.selectSize} />
        })}
      </div>
    )
  }
}

ChoiceBox.propTypes = {
  selectedSize : React.PropTypes.oneOf(Object.keys(Sizes)),
  selectSize : React.PropTypes.func
}

//export default ChoiceBox
module.exports = ChoiceBox
