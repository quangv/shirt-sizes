jest.dontMock('../components/ChoiceBox');

import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-addons-test-utils';

import Choice from '../components/Choice';

describe('Choice', function(){
  it('should exists', function(){
    let choice = TestUtils.renderIntoDocument(<Choice />);
    expect(TestUtils.isCompositeComponent(choice)).toBeTruthy();
  });
})
