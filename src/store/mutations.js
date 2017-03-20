import {
  SIGN_ACCOUNT,
  ALL_LOADING
} from './types'

export default {
  [SIGN_ACCOUNT] (state, payload) {
    state.account = payload.account
  },
  [ALL_LOADING] (state, payload) {
    state.isShowLoading = payload.isShowLoading
  }
}
