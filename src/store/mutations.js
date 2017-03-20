import {
  SIGN_ACCOUNT,
  ALL_LOADING,
  ALL_ISLOGIN
} from './types'

export default {
  [ALL_ISLOGIN] (state, payload) {
    state.isLogin = payload.isLogin
  },
  [SIGN_ACCOUNT] (state, payload) {
    state.account = payload.account
  },
  [ALL_LOADING] (state, payload) {
    state.isShowLoading = payload.isShowLoading
  }
}
