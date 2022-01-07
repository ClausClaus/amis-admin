import { useState } from 'react'

export default () => {
  const [user, setUser] = useState('userStoreName')
  return {
    user,
    setUser,
  }
}
