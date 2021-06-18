// import { all, takeLatest, call, put, select } from "redux-saga/effects"
// import * as types from "../types"
// import Config from '../../service/config'
// import Endpoint from '../../service/endpoint'

// const getStateHome = state => state.Home

// export function* fetchDummy() {
//     try {
//         let stateHome = yield select(getStateHome)
//         // yield put({ type: types.HOME_SET_LOADER, value: true })
//         // const response = yield call(GET, link, { headers: HeaderNonToken() })
//     } catch (err) {
//         console.log("saga > ", err);
//     }
// }

// export default function* rootSaga() {
//     yield all([
//         // takeLatest(types.HOME_SET_LOADER, fetchDummy)
//     ])
// }