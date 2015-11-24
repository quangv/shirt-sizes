/*
 * Shape
 *
 * {
 *  selectedSize: 'SMALL',
 *  shirts: [
 *    'image_uri'
 *  ]
 * }
 *
 */

import {Sizes, RECEIVE_SHIRTS} from './actions'

const initialState = {
  selectedSize: Sizes.MEDIUM,
  shirts: []
}

function app(state, action){
  if(typeof state === 'undefined'){
    return initialState;
  }

  if(action.type === RECEIVE_SHIRTS){
    return Object.assign({}, state, {
      shirts : action.shirts
    });
  }

  return state;
}

//export default app
module.exports = app;
