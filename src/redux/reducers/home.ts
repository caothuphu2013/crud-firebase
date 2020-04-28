import { homeTypes } from '../../constants/actionTypes';
import { IHomeState, IHomeAction } from '../../types/home';

const initialState: IHomeState = {
  isFetching: false,
  contacts: {},
  error: {}
};

/**
 * Contact reducer
 * @param {IHomeState} state
 * @param {IHomeAction} action
 * @version 1.0.0
 * @returns IHomeState
 */
const homeReducer = (state = initialState, action: IHomeAction) => {
  switch(action.type) {
    case homeTypes.FETCH_CONTACTS_REQUEST:
    case homeTypes.CREATE_CONTACT_REQUEST:
    case homeTypes.DELETE_CONTACT_REQUEST:
      return {
        ...state,
        isFetching: true
      }
    case homeTypes.FETCH_CONTACTS_SUCCESS:
      return {
        ...state,
        isFetching: false,
        contacts: action.payload
      }
    case homeTypes.CREATE_CONTACT_SUCCESS:
    case homeTypes.DELETE_CONTACT_SUCCESS:
      return {
        ...state,
        isFetching: false,
      }
    case homeTypes.FETCH_CONTACTS_FAILURE:
    case homeTypes.CREATE_CONTACT_FAILURE:
    case homeTypes.DELETE_CONTACT_FAILURE:
      return {
        ...state,
        isFetching: false,
        error: action.payload
      }
    default:
      return state;
  }
}

export default homeReducer;