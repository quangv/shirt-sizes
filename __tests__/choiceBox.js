jest.dontMock('../components/ChoiceBox');

import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-addons-test-utils';

import ChoiceBox from '../components/ChoiceBox';

describe('ChoiceBox', function(){
  it('should exists', function(){
    let choiceBox = TestUtils.renderIntoDocument(<ChoiceBox />);
    expect(TestUtils.isCompositeComponent(choiceBox)).toBeTruthy();
  });
})
