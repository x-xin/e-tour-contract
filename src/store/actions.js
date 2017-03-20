import { requestSignin } from '../api'
import { SIGN_ACCOUNT, ALL_LOADING } from './types'

export default {
  postLogin ({ commit, state }, { params, success, error }) {
    commit(ALL_LOADING, { isShowLoading: true })
    requestSignin(params)
      .then(res => {
        if (res.data.user) {
          commit(SIGN_ACCOUNT, { account: res.data.user.username })
        }
        success && success(res)
        commit(ALL_LOADING, { isShowLoading: false })
      })
      .catch(res => {
        error && error(res)
        commit(ALL_LOADING, { isShowLoading: false })
      })
  }
}
