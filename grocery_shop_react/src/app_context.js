import React from 'react'

export const AppContext = React.createContext()

export const state = {
  isLoggedIn: sessionStorage.getItem('isLoggedIn') || false,
  loggedInUserRole: sessionStorage.getItem('loggedInUserRole') || '',
  loggedInUserId: sessionStorage.getItem('loggedInUserId') || -1,
  loggedInUserName: sessionStorage.getItem('loggedInUserName') || '',
  SERVER_URL: 'http://localhost:5000/api/v1',
}

// const [isLoggedIn, setIsLogged] = useStae(
//   sessionStorage.getItem('isLoggedIn') || false
// )
// const [loggedInUserRole, setLoggedInUserRole] = useState(
//   sessionStorage.getItem('loggedInUserRole') || ''
// )
// const [loggedInUserId, setLoggedInUserId] = useState(
//   sessionStorage.getItem('loggedInUserId') || -1
// )
// const [loggedInUserName, setLoggedInUserName] = useState(
//   sessionStorage.getItem('loggedInUserName')||''
// )
