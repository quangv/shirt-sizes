jest.dontMock('../components/Results');

import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-addons-test-utils';

const Results = require('../components/Results');

describe('Results', function(){
  it('should exists', function(){
    let results = TestUtils.renderIntoDocument(<Results />);
    expect(TestUtils.isCompositeComponent(results)).toBeTruthy();
  });

  it('should render its items', function(){
    let renderer = TestUtils.createRenderer();
    renderer.render(<Results images={[0,1,2]} />);
    let output = renderer.getRenderOutput();
    expect(output.props.children.length).toBe(3)
  });

  it('should render its items', function(){
    let renderer = TestUtils.createRenderer();
    renderer.render(<Results images={[0,1,2,3,4,5,6]} />);
    let output = renderer.getRenderOutput();
    expect(output.props.children.length).toBe(7)
  });
})
