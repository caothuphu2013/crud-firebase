import { all, fork } from "redux-saga/effects";
import homeSagas from './home';

export default function* root() {
  yield all([
    fork(homeSagas)
  ]);
}
