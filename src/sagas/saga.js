import { all, call, put, takeEvery, takeLatest } from "redux-saga/effects";
import { Types } from '../redux/types/types'
import { getBlog } from './apiCall'
function* loadBlog() {
  const blog = yield call(getBlog)


  yield put({ type: Types.LOAD_BLOG, payload: blog });
  yield put({ type: Types.LOADING, payload: false });
}
export function* watchBlogLoad() {
  yield takeEvery(Types.LOAD_BLOG_ASUNC, loadBlog)
}