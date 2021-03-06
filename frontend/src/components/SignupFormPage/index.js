import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
import styled from "styled-components";
import * as sessionActions from "../../store/session";
import './SignupForm.css';
import { Modal } from '../../context/Modal';
import LoginForm from '../LoginFormModal/LoginForm';

const Input = styled.input`
  margin-bottom:20px;
  margin-top:10px;
  padding: 8px 0 8px 8px;
  border:solid 0.5px lightgrey;
  /* box-shadow: 0 1px 2px 0px rgba(0,0,0,0.6); */
  justify-self: center;
  color:grey;
  outline:none;
`;



const SignUpButton = styled.button`
  width:75px;
  margin-bottom:4px;
  margin-top:4px;
  border:solid 0.5px lightgrey;
  color:grey;
  box-shadow: 0 1px 2px 0px rgba(0,0,0,0.6);
  outline:none;
  &:hover{
    color:#EE6262;
    border:solid 0.5px lightgrey;
    box-shadow: 0 3px 9px 0px rgba(238,98,98,0.6);
  }
`;

const LoginButton = styled.button`
  width:75px;
  margin-bottom:4px;
  margin-top:4px;
  border:solid 1px lightgrey;
  color:grey;
  box-shadow: 0 1px 2px 0px rgba(0,0,0,0.6);
  outline:none;
  &:hover{
    color:#EE6262;
    border:solid 0.5px lightgrey;
    box-shadow: 0 3px 9px 0px rgba(238,98,98,0.6);
  }
`;


const Page = styled.div`
  display:flex;
  align-items:center;
  justify-content:space-around;
`
function SignupFormPage() {
  const dispatch = useDispatch();
  const sessionUser = useSelector((state) => state.session.user);
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errors, setErrors] = useState([]);
  const [showModal, setShowModal] = useState(false);

  if (sessionUser) return <Redirect to="/spots" />;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password === confirmPassword) {
      setErrors([]);
      return dispatch(sessionActions.signup({ email, username, password }))
        .catch(res => {
          if (res.data && res.data.errors) setErrors(res.data.errors);
        });
    }
    return setErrors(['Confirm Password field must be the same as the Password field']);
  };

  return (
    <Page>
    <form onSubmit={handleSubmit} className="form">
      <div className='formContainer'>
        <ul>
          {errors.map((error, idx) => <li key={idx}>{error}</li>)}
        </ul>
          <h1 className="signup-label" >Sign Up</h1>
          <Input
            type="text"
            value={email}
            placeholder="Email"
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <Input
            type="text"
            value={username}
            placeholder="Username"
            onChange={(e) => setUsername(e.target.value)}
            required
          />


          <Input
            type="password"
            value={password}
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <Input
            type="password"
            value={confirmPassword}
            placeholder="Confirm Password"
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
          />

        <SignUpButton type="submit">Sign Up</SignUpButton>
        <LoginButton type="button" onClick={() => setShowModal(true)}>Login</LoginButton>
        {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          <LoginForm />
        </Modal>
      )}
        </div>
      </form>
    </Page>
  );
}

export default SignupFormPage;
