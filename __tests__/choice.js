jest.dontMock('../components/Choice');

import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-addons-test-utils';

const Choice = require('../components/Choice');

function setup(props={}){
  let defaultProps = {
    onSelect: jest.genMockFn()
  }

  props = Object.assign(defaultProps, props);

  let renderer = TestUtils.createRenderer();
  renderer.render(<Choice {...props} />);

  let output = renderer.getRenderOutput();

  return {props, output}

}

describe('Choice', function(){
  it('should exists', function(){
    let choice = TestUtils.renderIntoDocument(<Choice />);
    expect(TestUtils.isCompositeComponent(choice)).toBeTruthy();
  });

  it('should contain radio button', function(){
    const {output} = setup()

    let input = output.props.children[0];
    expect(input.type).toBe('input');
    expect(input.props.type).toBe('radio');
  });

  it('should uncheck the box when not isSelected', function(){
    const {output} = setup({isSelected:false})
    let input = output.props.children[0];
    expect(input.props.checked).toBeFalsy();
  });

  it('should uncheck the box when not isSelected', function(){
    const {output} = setup({isSelected:null})
    let input = output.props.children[0];
    expect(input.props.checked).toBeFalsy();
  });

  it('should check the box when isSelected', function(){
    const {output} = setup({isSelected:true})

    let input = output.props.children[0];
    expect(input.props.checked).toBeTruthy();
  });
  
  it('should display a title', function(){
    const {output} = setup({title:'Blue'})

    let children = output.props.children;
    expect(children).toContain('Blue');
  });

  it('should call onSelect if clicked', function(){
    let props = {
      onSelect: jest.genMockFn()
    }

    let choice = TestUtils.renderIntoDocument(<Choice {...props} />);
    let DOM = ReactDOM.findDOMNode(choice);

    TestUtils.Simulate.click(DOM);

    expect(props.onSelect.mock.calls.length).toBe(1);


  });
})
