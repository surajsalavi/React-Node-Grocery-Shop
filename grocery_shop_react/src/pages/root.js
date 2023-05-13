import React, { useContext } from 'react'
import { Navigate } from 'react-router-dom'
import { AppContext } from '../app_context'

const Root = (props) => {
  if (!useContext(AppContext).isLoggedIn)
    return <Navigate replace to='/login' />
  else return <h1>Hello Dear Welcome</h1>
}

export default Root
