import React from 'react';
import {connect} from 'react-redux';

import ChoiceBox from '../components/ChoiceBox';
import Results from '../components/Results';

export class App extends React.Component {
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

function select(state){
  return state;
}

export default connect(select)(App);
