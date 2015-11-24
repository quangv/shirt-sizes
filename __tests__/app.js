jest.dontMock('../containers/App');

import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-addons-test-utils';

const App = require('../containers/App');
const ChoiceBox = require('../components/ChoiceBox');
const Results = require('../components/Results');

describe('App', function(){
  it('should exists', function(){
    let app = TestUtils.renderIntoDocument(<App />);
    expect(TestUtils.isCompositeComponent(app)).toBeTruthy();
    expect(true).toBeTruthy();
  });

  it('should render ChoiceBox', function(){
    let renderer = TestUtils.createRenderer();
    renderer.render(<App />);
    let output = renderer.getRenderOutput();
    
    expect(output.props.children[1].type).toBe(ChoiceBox);

  });

  it('should render Results', function(){
    let renderer = TestUtils.createRenderer();
    renderer.render(<App />);
    let output = renderer.getRenderOutput();
    
    expect(output.props.children[2].type).toBe(Results);

  });
})
