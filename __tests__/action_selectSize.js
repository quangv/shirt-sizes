//import {SELECT_SIZE, selectSize} from '../actions';

jest.dontMock('../actions')

const {SELECT_SIZE, selectSize} = require('../actions');

describe('selectSize action', function(){
  it('should create an action to select a size', function(){
    const size = 'small'
    const expectedAction = {
      type: SELECT_SIZE,
      size
    }
    expect(selectSize(size)).toEqual(expectedAction);
  });
});
