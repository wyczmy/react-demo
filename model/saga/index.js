
import { put, takeEvery,delay } from 'redux-saga/effects'

export function* incrementAsync() {
  console.log(delay)
   yield delay(2000)
   yield put({ type: 'add',payload:[0,0,0,0] })
}

export function* watchIncrementAsync() {
  console.log("8")
  yield takeEvery('INCREMENT_ASYNC', incrementAsync)
}