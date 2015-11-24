import React from 'react';
import {connect} from 'react-redux';

import ChoiceBox from '../components/ChoiceBox';
import Results from '../components/Results';

import {fetchShirts} from '../actions';

export class App extends React.Component {
  componentDidMount(){
    console.log('DID MOUNT', this.props);
  }
  render(){
    return  (
      <div>
        <h1>Select a Shirt Size</h1>
        <ChoiceBox selectedSize={this.props.selectedSize} />
        <Results />
      </div>
    )
  }
}

function select(state){
  return state;
}

export default connect(select)(App);
