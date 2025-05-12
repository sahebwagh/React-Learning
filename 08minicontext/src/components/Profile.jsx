import React, { useContext } from 'react'
import UserContext from '../context/UserContext'

function profile() {

  const {user} = useContext(UserContext)

  if(!user) return <h1>Not Logged in</h1>
  return (
    <div>
      <h1>profile : {user.username}</h1>
    </div>
  );
}

export default profile