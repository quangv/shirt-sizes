// Action Creators and Constants

// Action types

export const SELECT_SIZE = 'SELECT_SIZE'

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
