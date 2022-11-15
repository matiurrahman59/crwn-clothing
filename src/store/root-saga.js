import { all, call } from 'redux-saga/effects';
import { catgoriesSaga } from './categories/category-saga';
import { userSagas } from './user/user-saga';

export function* rootSaga() {
  yield all([call(catgoriesSaga), call(userSagas)]);
}
