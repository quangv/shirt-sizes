// Action Creators and Constants

import fetch from 'isomorphic-fetch'

// Action types

export const SELECT_SIZE = 'SELECT_SIZE'
export const REQUEST_SHIRTS = 'REQUEST_SHIRTS'
export const RECEIVE_SHIRTS = 'RECEIVE_SHIRTS'

// Other Constants

export const Sizes = {
  SMALL : 'SMALL',
  MEDIUM : 'MEDIUM',
  LARGE : 'LARGE',
  XLARGE : 'XLARGE'
}

// Action Creators

export function selectSize(size){
  return (dispatch)=>{
    dispatch({
      type: SELECT_SIZE,
      size
    });
    return dispatch(fetchShirts(size));
  }
}

export function requestShirts(size){
  return {
    type: REQUEST_SHIRTS,
    size
  }
}

// TODO test
export function receiveShirts(size, json){
  return {
    type: RECEIVE_SHIRTS,
    size,
    shirts: json.d.results.slice(0,9).map(child => child.Thumbnail.MediaUrl)
  }
}

// TODO test
export function fetchShirts(size){
  return (dispatch)=>{
    dispatch(requestShirts(size))

    const sizeMap = {
      SMALL : 'new born',
      MEDIUM : 'children',
      LARGE : 'women',
      XLARGE : 'men'
    }

    // Google AJAX Search API use to work, doesn't work anymore.
    // let url = 'https://crossorigin.me/http://ajax.googleapis.com/ajax/services/search/images?v=1.0&q=shirts%20' + sizeMap[size];

    let accountKey = 'i22TldK9v1oR+Zb0cNvkwI0IVciDHa8aePmOBAiXE/A'  // on production especially client-side sites, this shouldn't be hard-coded.
    let url = 'https://api.datamarket.azure.com/Bing/Search/v1/Image?$format=json&Query=%27shirts%20' + sizeMap[size] + '%27';

    return fetch(url, {
      headers: {
        Authorization: 'Basic ' + btoa(accountKey + ':' + accountKey)  // base64 encode
      }
    })
      .then(req => req.json())
      .then(json => dispatch(receiveShirts(size, json)))
  }
}
