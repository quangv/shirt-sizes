import React from 'react';
import {connect} from 'react-redux';

import ChoiceBox from '../components/ChoiceBox';
import Results from '../components/Results';

import {fetchShirts} from '../actions';

export class App extends React.Component {
  componentDidMount(){
    // Initial Shirt Fetch!
    this.props.dispatch(fetchShirts(this.props.selectedSize));
  }
  render(){
    return  (
      <div>
        <h1>Select a Shirt Size</h1>
        <ChoiceBox selectedSize={this.props.selectedSize} />
        <Results images={this.props.shirts} />
      </div>
    )
  }
}

App.defaultProps = {
  dispatch : function(){}  //noop
}

function select(state){
  return state;
}

export default connect(select)(App);
