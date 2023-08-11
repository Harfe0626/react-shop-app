import React from 'react'
import { Link } from 'react-router-dom'
import SignIn from './sing-in/SignIn'

const LoginPage = () => {
  return (
    <div className='page'>
      <div className='form_container'>
        <h1>로그인</h1>
        <SignIn />
        <p>
          계정이 없습니까?<Link to={"/register"}>가입하기</Link>
        </p>
      </div>
    </div>
  )
}

export default LoginPage