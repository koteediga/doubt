import {Component} from 'react'
import {Redirect} from 'react-router-dom'
import Cookies from 'js-cookie'

class Login extends Component {
  state = {username: 'rahul', password: 'rahul@2021'}

  onSuccess = jwtToken => {
    const {history} = this.props
    Cookies.set('jwt_token', jwtToken, {expires: 30, path: '/'})

    history.replace('/')
  }

  submission = async () => {
    const {username, password} = this.state
    const userDetails = {username, password}
    const url = 'https://apis.ccbp.in/login'
    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }

    const response = await fetch(url, options)
    const data = await response.json()
    console.log(response)
    console.log(data)
    if (response.ok === true) {
      this.onSuccess(data.jwt_token)
    }
  }

  render() {
    if (Cookies.get('jwt_token') === undefined) {
      return (
        <div>
          <h1>Please Login</h1>
          <button type="button" onClick={this.submission}>
            Login with Sample Creds
          </button>
        </div>
      )
    }
    return <Redirect to="/" />
  }
}

export default Login
