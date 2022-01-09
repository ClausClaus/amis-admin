import { createModel } from 'hox'
import { useState } from 'react'

const userStore = () => {
  const [user, setUser] = useState('userStoreName')
  return {
    user,
    setUser,
  }
}

export default createModel(userStore)
