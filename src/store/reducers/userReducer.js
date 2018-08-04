import {USER_AUTH_START, USER_AUTH_SUCCESS, USER_AUTH_FAILURE} from '../constants';

const initialState = {
  is_authenticated: false,
  data: null,
  errors: null,
  loading: false
}

export default function (state = initialState, action) {
  switch (action.type) {
    case USER_AUTH_START: 
      return {
	...state,
        loading: true
      }
    case USER_AUTH_SUCCESS: 
      return {
        ...state,
	data: action.data,
	loading: false,
	is_authenticated: true
      }
    case USER_AUTH_FAILURE: 
      return {
        ...state,
	data: null,
	is_authenticated: false,
	errors: action.data,
	loading: false
      }
    default:
      return initialState
  }
}
