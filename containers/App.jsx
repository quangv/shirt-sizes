import React from 'react';
import ChoiceBox from '../components/ChoiceBox'
import Results from '../components/Results'

class App extends React.Component {
  render(){
    return  (
      <div>
        <h1>Select a Shirt Size</h1>
        <ChoiceBox />
        <Results />
      </div>
    )
  }
}

//export default App
module.exports = App
