import React, { useState, useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import '../assets/login/login_page.css'
import { AppContext } from '../app_context'
import axios from 'axios'

const LoginPage = () => {
  const [visibleForm, setVisibleForm] = useState('login')
  return (
    <div className='global-container'>
      {visibleForm === 'login' ? (
        <Login setVisibleForm={setVisibleForm} />
      ) : (
        <Register setVisibleForm={setVisibleForm} />
      )}
    </div>
  )
}

const Login = ({ setVisibleForm }) => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [message, setMessage] = useState({ text: null, type: null })
  const appContext = useContext(AppContext)
  const navigate = useNavigate()

  const loginUser = () => {
    const request = {
      url: appContext.SERVER_URL + '/login',
      method: 'POST',
      data: { email, password },
    }

    axios(request)
      .then((response) => {
        if (typeof response.data === 'object') {
          setMessage({ text: 'Login Successfull', type: 'SUCCESS' })
          navigate('/dashboard')
        } else if (typeof response.data === 'string') {
          setMessage({ text: response.data, type: 'FAILURE' })
        }
      })
      .catch((error) => {
        setMessage({
          text: 'Something went wrong, please try again after some time',
          type: 'FAILURE',
        })
      })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (email !== '' && password !== '') {
      //do customer post
      loginUser()
    } else {
      alert('going to validate')
      //do check all fields and error show message

      if (email !== '') {
      }
      if (password !== '') {
      }
    }
  }
  const alert_class =
    message.type === 'SUCCESS' ? 'alert-success' : 'alert-danger'
  return (
    <div className='card login-form'>
      <div className='card-body'>
        <h3 className='card-title text-center'>Log in Grocery Shop</h3>
        <div className='card-text'>
          {message.text ? (
            <div
              className={
                'alert ' +
                alert_class +
                ' alert-dismissible fade show alert_class'
              }
              role='alert'
            >
              {message.text}
            </div>
          ) : (
            <></>
          )}
          <form>
            {/* to error: add className "has-danger" */}
            <div className='form-group '>
              <label htmlFor='exampleInputEmail1'>Email address</label>
              <input
                type='email'
                className='form-control form-control-sm'
                id='exampleInputEmail1'
                aria-describedby='emailHelp'
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className='form-group'>
              <label htmlFor='exampleInputPassword1'>Password</label>

              <input
                type='password'
                className='form-control form-control-sm'
                id='exampleInputPassword1'
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <button
              type='submit'
              className='btn btn-primary btn-block'
              onClick={handleSubmit}
            >
              Log in
            </button>

            <div className='sign-up'>
              Don't have an account?{' '}
              <span
                style={{ color: 'blue' }}
                onClick={() => setVisibleForm('register')}
              >
                Register
              </span>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

const Register = ({ setVisibleForm }) => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [message, setMessage] = useState({ text: null, type: null })

  const appContext = useContext(AppContext)

  const registerUser = () => {
    const request = {
      url: appContext.SERVER_URL + '/users',
      method: 'POST',
      data: { name, email, password },
    }

    axios(request)
      .then((result) => {
        setMessage({
          text: 'Registered Successfully, go to login',
          type: 'SUCCESS',
        })
        setName('')
        setEmail('')
        setPassword('')
        setConfirmPassword('')
      })
      .catch((err) => {
        setMessage({
          text: 'Something went wrong, please try after some time',
          type: 'FAILURE',
        })
      })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (
      name !== '' &&
      email !== '' &&
      password !== '' &&
      password === confirmPassword
    ) {
      //do customer post
      registerUser()
    } else {
      //do check all fields and error show message

      if (name !== '') {
      }
      if (email !== '') {
      }
      if (password !== '') {
      }
      if (password !== confirmPassword) {
      }
    }
  }

  const alert_class =
    message.type === 'SUCCESS' ? 'alert-success' : 'alert-danger'
  return (
    <div className='card login-form'>
      <div className='card-body'>
        <h4 className='card-title text-center'>Register in Grocery Shop</h4>
        <div className='card-text'>
          {message.text ? (
            <div
              className={
                'alert ' +
                alert_class +
                ' alert-dismissible fade show alert_class'
              }
              role='alert'
            >
              {message.text}
            </div>
          ) : (
            <></>
          )}
          <form>
            {/* to error: add className "has-danger" */}
            <div className='form-group '>
              <label htmlFor='exampleInputEmail1'>Name</label>
              <input
                type='text'
                value={name}
                className='form-control form-control-sm'
                aria-describedby='nameHelp'
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className='form-group '>
              <label htmlFor='exampleInputEmail1'>Email address</label>
              <input
                type='email'
                value={email}
                className='form-control form-control-sm'
                aria-describedby='emailHelp'
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className='form-group'>
              <label htmlFor='exampleInputPassword1'>Password</label>

              <input
                type='password'
                value={password}
                className='form-control form-control-sm'
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div className='form-group'>
              <label htmlFor='exampleInputPassword1'>Confirm Password</label>

              <input
                type='password'
                value={confirmPassword}
                className='form-control form-control-sm'
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
            </div>
            <button
              type='submit'
              className='btn btn-primary btn-block'
              onClick={handleSubmit}
            >
              Register
            </button>

            <div className='sign-up'>
              Already have an account?{' '}
              <span
                style={{ color: 'blue' }}
                onClick={() => setVisibleForm('login')}
              >
                Login
              </span>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default LoginPage
