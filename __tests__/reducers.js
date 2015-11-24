jest.dontMock('../reducers')

const reducer = require('../reducers');
import * as actions from '../actions'

describe('reducers', function(){
  it('should return initial state', function(){
    expect(reducer(undefined, {})).toEqual({
      selectedSize: actions.Sizes.MEDIUM,
      shirts: []
    })
  })
});
