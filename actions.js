// Action Creators and Constants

import fetch from 'isomorphic-fetch'

// Action types

export const SELECT_SIZE = 'SELECT_SIZE'
export const REQUEST_SHIRTS = 'REQUEST_SHIRTS'

// Other Constants

export const Sizes = {
  SMALL : 'SMALL',
  MEDIUM : 'MEDIUM',
  LARGE : 'LARGE',
  XLARGE : 'XLARGE'
}

// Action Creators

export function selectSize(size){
  return {
    type: SELECT_SIZE,
    size
  }
}

export function requestShirts(size){
  return {
    type: REQUEST_SHIRTS,
    size
  }
}

export function fetchShirts(size){
}
