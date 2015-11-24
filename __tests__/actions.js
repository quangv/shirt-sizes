//import {SELECT_SIZE, selectSize} from '../actions';

jest.dontMock('../actions')

const {SELECT_SIZE, selectSize, REQUEST_SHIRTS, requestShirts} = require('../actions');

describe('actions', function(){
  
  describe('selectSize', function(){
    it('should create an action to select a size', function(){
      const size = 'small'
      const expectedAction = {
        type: SELECT_SIZE,
        size
      }
      expect(selectSize(size)).toEqual(expectedAction);
    });
  });

  describe('requestShirts', function(){
    it('should create an action to request shirts', function(){
      const size = 'small'
      const expectedAction = {
        type: REQUEST_SHIRTS,
        size
      }
      expect(requestShirts(size)).toEqual(expectedAction);
    });
  });
  
});
