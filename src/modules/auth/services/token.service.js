const TOKEN_KEY = 'aToken'
const REFRESH_TOKEN_KEY = 'rToken'

/**
 * Manage the how Access Tokens are being stored and retreived from local storage.
**/

const TokenService = {
  getToken () {
    return localStorage.getItem(TOKEN_KEY)
  },

  saveToken (accessToken) {
    localStorage.setItem(TOKEN_KEY, accessToken)
  },

  removeToken () {
    localStorage.removeItem(TOKEN_KEY)
  },

  getRefreshToken () {
    return localStorage.getItem(REFRESH_TOKEN_KEY)
  },

  saveRefreshToken (refreshToken) {
    localStorage.setItem(REFRESH_TOKEN_KEY, refreshToken)
  },

  removeRefreshToken () {
    localStorage.removeItem(REFRESH_TOKEN_KEY)
  }
}

export { TOKEN_KEY, REFRESH_TOKEN_KEY }
export default TokenService
