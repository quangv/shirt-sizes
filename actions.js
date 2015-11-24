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

// TODO test
export function receiveShirts(size, json){
  return {
    type: RECEIVE_SHIRTS,
    size,
    shirts: json.data.children.map(child => child.data)
  }
}

// TODO test
export function fetchShirts(size){
  return (dispatch)=>{
    dispatch(requestShirts(size))

    const sizeMap = {
      SMALL : 'baby',
      MEDIUM : 'children',
      LARGE : 'women',
      XLARGE : 'men'
    }

    let url = 'https://api.datamarket.azure.com/Bing/Search/v1/Image?Query=%27shirts%20' + sizeMap[size] + '%27&ImageFilters=%27Size%3ASmall%2BAspect%3ASquare%27&accessToken=Bearer+Audience%3Dhttps%253a%252f%252fapi.datamarket.azure.com%252f%26ExpiresOn%3D1448351380%26Issuer%3Dhttps%253a%252f%252fdatamarket.accesscontrol.windows.net%252f%26http%253a%252f%252fschemas.xmlsoap.org%252fws%252f2005%252f05%252fidentity%252fclaims%252fnameidentifier%3Df6abd771-2d23-4149-9022-22c38d200e36%26http%253a%252f%252fschemas.xmlsoap.org%252fws%252f2009%252f09%252fidentity%252fclaims%252factor%3Dexplorer%26http%253a%252f%252fschemas.microsoft.com%252faccesscontrolservice%252f2010%252f07%252fclaims%252fpermissions%3Daccount%26http%253a%252f%252fschemas.microsoft.com%252faccesscontrolservice%252f2010%252f07%252fclaims%252fidentityprovider%3DDataMarketIdentityProvider%26HMACSHA256%3DiJER%252fURgMQrtDW9Pqu1kOQpFvhE6hcN9CHqEg837Rbo%253d&%24top=100&$format=json'

    return fetch(url)
      .then(req => req.json())
      .then(json => dispatch(receiveShirts(size, json)))
  }
}
