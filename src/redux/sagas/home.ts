import { takeLatest, put, call, all } from 'redux-saga/effects';
import { SagaIterator } from 'redux-saga';

import * as homeActions from '../actions/home';
import * as homeServices from '../../firebase/home';
import { homeTypes } from '../../constants/actionTypes';
import { IHomeAction } from '../../types/home';

function* fetchContact(): SagaIterator {
  try {
    const response = yield call(homeServices.getContacts);
    yield put(homeActions.fetchContactsSuccess(response));
  } catch (error) {
    yield put(homeActions.fetchContactsFailure(error));
  }
}

function* createContact(action: IHomeAction): SagaIterator {
  try {
    const { contact } = action.metaData;
    const response = yield call(homeServices.postContact, contact);
    yield call(fetchContact);
    yield put(homeActions.createContactSuccess(response));
  } catch (error) {
    yield put(homeActions.createContactFailure(error))
  }
}

function* updateContact(action: IHomeAction): SagaIterator {
  try {
    const { id, contact } = action.metaData;
    const response = yield call(homeServices.putContact, id, contact);
    yield put(homeActions.updateContactSuccess(response));
    yield call(fetchContact);
  } catch (error) {
    yield put(homeActions.updateContactFailure(error))
  }
}

function* deleteContact(action: IHomeAction): SagaIterator {
  try {
    const { id } = action.metaData;
    yield call(homeServices.deleteContact, id);
    yield call(fetchContact);
  } catch (error) {
    yield put(homeActions.deleteContactFailure(error))
  }
}

export default function* root() {
  yield all([
    takeLatest<IHomeAction>(homeTypes.FETCH_CONTACTS_REQUEST, fetchContact),
    takeLatest<IHomeAction>(homeTypes.CREATE_CONTACT_REQUEST, createContact),
    takeLatest<IHomeAction>(homeTypes.UPDATE_CONTACT_REQUEST, updateContact),
    takeLatest<IHomeAction>(homeTypes.DELETE_CONTACT_REQUEST, deleteContact)
  ])
}