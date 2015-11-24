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

import {Sizes} from './actions'

const initialState = {
  selectedSize: Sizes.MEDIUM,
  shirts: []
}

function app(state, action){
  if(typeof state === 'undefined'){
    return initialState;
  }

  return state;
}

//export default app
module.exports = app;
