import { defineStore } from 'pinia'
import { Api } from '../api/defaultApi'

export const useAuthStore = defineStore('commonStore', {
  state: () => ({
    isAuth: !!$cookies.get('vue_token'),
    fullName: '',
    email: '',
    _id: '',
    token: $cookies.get('vue_token'),
    isError: false,
    anyErrorMessage: ''
  }),
  actions: {
    async authUser(userCred) {
      const res = await Api().user.loginUser(userCred)
      $cookies.set('vue_token', res.token, '1d', '/', '', '', 'Lax')
      this.fullName = res.fullName
      this.email = res.email
      this._id = res._id
      this.token = res.token
      this.isAuth = true
    },
    logoutUser() {
      this.fullName = ''
      this.email = ''
      this._id = ''
      this.token = ''
      this.isAuth = false
    }
  }
})
