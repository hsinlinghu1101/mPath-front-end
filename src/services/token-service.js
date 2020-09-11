import config from '../config'
import jwtDecode from 'jwt-decode'

const TokenService = {
  //The saveAuthToken method accepts a token variable (a string) and stores it in local storage under the key configured in the TOKEN_KEY property.
  saveAuthToken(token) {
    window.localStorage.setItem(config.TOKEN_KEY, token)
  },
  getAuthToken() {
    return window.localStorage.getItem(config.TOKEN_KEY)
  },
  clearAuthToken() {
    window.localStorage.removeItem(config.TOKEN_KEY)
  },
  hasAuthToken() {
    return !!TokenService.getAuthToken()
  },
  //The makeBasicAuthToken method accepts a username and password and combines them together into 1 string with a colon between the words. The new string is passed into the window.btoa function, which creates a base64 encoded string. 
  makeBasicAuthToken(userName, password) {
    return window.btoa(`${userName}:${password}`)
  },
  parseJwt(jwt) {
    return jwtDecode(jwt)
  },
  parseAuthToken() {
    const authToken = TokenService.getAuthToken()
    if (authToken)
      return TokenService.parseJwt(authToken)
    else
      return undefined
  },
}

export default TokenService