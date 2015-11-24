// Action Creators and Constants

// Action types

export const SELECT_SIZE = 'SELECT_SIZE'

// Other Constants

export const SIZES = {
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
