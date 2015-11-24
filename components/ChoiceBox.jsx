import React from 'react';
import Choice from './Choice'

class ChoiceBox extends React.Component {
  render(){
    return (
      <div>
        <Choice title="small" />
        <Choice title="medium" />
        <Choice title="large" />
        <Choice title="xl" />
      </div>
    )
  }
}

//export default ChoiceBox
module.exports = ChoiceBox
