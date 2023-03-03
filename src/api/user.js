export const UserApi = (instance) => ({
  async getMe() {
    const { data } = await instance.get('auth/me')
    return data
  },
  async getAllUsers() {
    const { data } = await instance.get('users')
    return data
  },
  async loginUser(userCred) {
    const { data } = await instance.post('auth/login', userCred)
    return data
  },
  async registerUser(userData) {
    const { data } = await instance.post('auth/register', userData)
    return data
  }
})
