import {Link, withRouter} from 'react-router-dom'
import Cookies from 'js-cookie'
import LogOut from '../LogoutButton'

const Header = props => {
  const removeToken = () => {
    const {history} = props
    Cookies.remove('jwt_token')
    history.replace('/login')
  }
  return (
    <>
      <nav>
        <Link to="/">
          <li>Home</li>
        </Link>
        <Link to="/about">
          <li>About</li>
        </Link>
      </nav>
      <LogOut removeToken={removeToken} />
    </>
  )
}

export default withRouter(Header)
