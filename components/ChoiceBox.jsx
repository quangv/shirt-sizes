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
          return <Choice key={choice.title} title={choice.title} isSelected={this.props.selectedSize === choice.size} />
        })}
      </div>
    )
  }
}

ChoiceBox.propTypes = {
  selectedSize : React.PropTypes.oneOf(Object.keys(Sizes))
}

//export default ChoiceBox
module.exports = ChoiceBox
