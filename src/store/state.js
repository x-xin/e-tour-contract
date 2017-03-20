const user = sessionStorage.getItem('user')

const state = {
  account: user || '',
  author: '',
  isLogin: Boolean(user),
  isShowLoading: false
}
export default state
