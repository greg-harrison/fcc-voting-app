import auth0 from 'auth0-js'

export default class AuthService {

  constructor() {
    this.login = this.login.bind(this)
  }

  // Replace this stuff with env variables

  auth0 = new auth0.WebAuth({
    domain: 'g-harrison.auth0.com',
    clientID: 'qmJ9xmGixz9zEKQ_lu5Wb6DDPVvU03Gm',
    redirectUri: 'http://localhost:8080/auth',
    audience: 'https://g-harrison.auth0.com/userinfo',
    responseType: 'token id_token',
    scope: 'openid'
  })

  login() {
    this.auth0.authorize()
  }
}
