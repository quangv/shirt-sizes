import React from 'react';
import ReactDOM from 'react-dom';

import ChoiceBox from '../components/ChoiceBox'

class App extends React.Component {
  render(){
    return  (
      <div>
        <h1>Select a Shirt Size</h1>
        <ChoiceBox />
      </div>
    )
  }
}

//export default App
module.exports = App
