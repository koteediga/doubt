// Write your JS code here
const LogoutButton = props => {
  const {removeToken} = props

  const removetoken = () => {
    removeToken()
  }

  return (
    <button type="button" onClick={removetoken}>
      LogOut
    </button>
  )
}

export default LogoutButton
