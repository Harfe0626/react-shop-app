import React, { useState } from 'react'
import Form from '../../../components/form/Form'
import { useNavigate } from 'react-router-dom';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth'
import app from '../../../firbase'
import { useDispatch } from 'react-redux';
import { setUser } from '../../../store/user/user.slice';
import { setUserId } from '../../../store/cart/cart.slice';

const SignUp = () => {
  const navigate = useNavigate();
  const [firebaseError, setFirebaseError] = useState("");
  
  const dispatch = useDispatch();
  const auth = getAuth(app);

  const handleSignupAndLogin = (email:string, password:string) => {
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        dispatch(setUser({
          email: userCredential.user.email,
          token: userCredential.user.refreshToken,
          id: userCredential.user.uid
        }))
        dispatch(setUserId(userCredential.user.uid));
        navigate('/');
      })
      .catch(error => {
        console.log(error);
        return error && setFirebaseError("이메일 또는 비밀번호가 잘못되었습니다.");
      })
    }
  return (
    <Form
        title={"가입하기"}
        getDataForm={handleSignupAndLogin}
        firebaseError={firebaseError}
    />
  )
}

export default SignUp