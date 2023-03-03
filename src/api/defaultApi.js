import axios from 'axios'
import { UserApi } from './user'
import { WishListApi } from './wish'
import VueCookies from 'vue-cookies'

export const Api = () => {
  const token = !!VueCookies.get('vue_token') ? VueCookies.get('vue_token') : ''
  const instance = axios.create({
    baseURL: `http://localhost:5555/`,
    headers: {
      Authorization: `Bearer ${token}`
    }
  })

  return {
    user: UserApi(instance),
    wish: WishListApi(instance)
  }
}
