import auth0 from 'auth0-js'

export default class AuthService {

  constructor() {
    this.login = this.login.bind(this)
  }

  auth0 = new auth0.WebAuth({
    domain: process.env.VOTE_AUTH0_DOMAIN,
    clientID: process.env.VOTE_AUTH0_CLIENTID,
    redirectUri: 'http://localhost:8080/auth',
    audience: 'https://g-harrison.auth0.com/userinfo',
    responseType: 'token id_token',
    scope: 'openid'
  })

  login() {
    this.auth0.authorize()
  }
}
