import { homeTypes } from '../../constants/actionTypes';
import { IContactsState, IContactState } from '../../types/home';

export const fetchContactsRequest = () => ({
  type: homeTypes.FETCH_CONTACTS_REQUEST
});

export const fetchContactsSuccess = (contacts: IContactsState) => ({
  type: homeTypes.FETCH_CONTACTS_SUCCESS,
  payload: contacts
});

export const fetchContactsFailure = (error: Object) => ({
  type: homeTypes.FETCH_CONTACTS_FAILURE,
  payload: error
});

export const createContactRequest = (contact: IContactState) => ({
  type: homeTypes.CREATE_CONTACT_REQUEST,
  metaData: {
    contact
  }
});

export const createContactSuccess = (contact: IContactState) => ({
  type: homeTypes.CREATE_CONTACT_SUCCESS,
  payload: contact
});

export const createContactFailure = (error: Object) => ({
  type: homeTypes.CREATE_CONTACT_FAILURE,
  payload: error
});


export const updateContactRequest = (id: string, contact: IContactState) => ({
  type: homeTypes.UPDATE_CONTACT_REQUEST,
  metaData: {
    id,
    contact
  }
});

export const updateContactSuccess = (contact: IContactState) => ({
  type: homeTypes.UPDATE_CONTACT_SUCCESS,
  payload: contact
});

export const updateContactFailure = (error: Object) => ({
  type: homeTypes.UPDATE_CONTACT_FAILURE,
  payload: error
});

export const deleteContactRequest = (id: string) => ({
  type: homeTypes.DELETE_CONTACT_REQUEST,
  metaData: {
    id
  }
});

export const deleteContactSuccess = () => ({
  type: homeTypes.DELETE_CONTACT_SUCCESS
});

export const deleteContactFailure = (error: Object) => ({
  type: homeTypes.DELETE_CONTACT_FAILURE,
  payload: error
});