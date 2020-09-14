
const TOKEN_KEY = 'aToken'

/**
 * Manage the how Access Tokens are being stored and retreived from local storage.
**/

const TokenService = {
  getToken () {
    return sessionStorage.getItem(TOKEN_KEY)
  },

  saveToken (accessToken) {
    sessionStorage.setItem(TOKEN_KEY, accessToken)
  },

  removeToken () {
    sessionStorage.removeItem(TOKEN_KEY)
  }
}

export { TOKEN_KEY }
export default TokenService
