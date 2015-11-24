jest.dontMock('../containers/App');

import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-addons-test-utils';

import App from '../containers/App';

describe('App', function(){
  it('should exists', function(){
    let app = TestUtils.renderIntoDocument(<App />);
    expect(TestUtils.isCompositeComponent(app)).toBeTruthy();
    expect(true).toBeTruthy();
  });
})
