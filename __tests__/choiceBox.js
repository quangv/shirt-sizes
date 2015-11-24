jest.dontMock('../components/ChoiceBox');

import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-addons-test-utils';

const ChoiceBox = require('../components/ChoiceBox');

describe('ChoiceBox', function(){

  let output;
  beforeEach(function(){
    let renderer = TestUtils.createRenderer();
    renderer.render(<ChoiceBox />);
    output = renderer.getRenderOutput();
  });

  it('should exists', function(){
    let choiceBox = TestUtils.renderIntoDocument(<ChoiceBox />);
    expect(TestUtils.isCompositeComponent(choiceBox)).toBeTruthy();
  });

  it('should render 4 choices', function(){
    expect(output.props.children.length).toBe(4)
  });

  describe('choices', function(){
    it('first choice should be small', function(){
      expect(output.props.children[0].props.title).toBe('small');
    });
    it('second choice should be medium', function(){
      expect(output.props.children[1].props.title).toBe('medium');
    });
    it('first choice should be large', function(){
      expect(output.props.children[2].props.title).toBe('large');
    });
    it('first choice should be xl', function(){
      expect(output.props.children[3].props.title).toBe('xl');
    });
  });
})
