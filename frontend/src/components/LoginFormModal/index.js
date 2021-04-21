import React, { useState } from 'react';
import { Modal } from '../../context/Modal';
import LoginForm from './LoginForm';
import styled from 'styled-components'
import { useHistory } from 'react-router-dom';

const LoginButton = styled.button`
  width:75px;
  margin-bottom:4px;
  margin-top:4px;
  border:solid 1px lightgrey;
  background-color:#FCFAF0;
  color:grey;
  font-family: 'Staatliches', cursive;
  font-weight:100;
  box-shadow: 0 1px 2px 0px rgba(0,0,0,0.6);
  outline:none;
  &:hover{
    color:#EE6262;
    border:solid 0.5px lightgrey;
    box-shadow: 0 3px 9px 0px rgba(238,98,98,0.6);
    font-weight:600;
  }
`;

const Form = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items:center;
  margin-bottom: 5px;
  background-color: white;
  border: 0px solid lightgrey;
`


const SignUpButtone = styled.h3`
  color: grey;
  margin-bottom:4px;
  margin-top:4px;
  font-size:15px;
  text-decoration: underline;
  cursor: default;
  /* align-self:center; */
  &:hover{
    color:red;
  }
`

function LoginFormModal() {
  const [showModal, setShowModal] = useState(false);
  const history = useHistory()

  return (
    <>
      <LoginButton onClick={() => setShowModal(true)}>Log In</LoginButton>
      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          <LoginForm />
          <Form>
            <SignUpButtone type="button" onClick={(e)=>{history.push('/'); setShowModal(false)}}>Sign Up</SignUpButtone>
          </Form>
        </Modal>
      )}
    </>
  );
}

export default LoginFormModal;
