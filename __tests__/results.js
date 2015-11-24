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
})
