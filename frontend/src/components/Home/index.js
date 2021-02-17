import "./index.css"
import splash from "./TattooNeon.jpg"
import {NavLink} from "react-router-dom"
import SignUpForm from '../SignupFormPage'
import styled from 'styled-components'

const SignUpFormDiv = styled.div`
    margin-right:200px;
`

const Page = styled.div`
  display:flex;
  /* align-items:center; */
  justify-content:space-between;
`
const TagLine = styled.div`
    margin-left:100px;
    margin-top:30px;
`

const Home = () =>{
    return (
    <Page>
        <TagLine>
            <h1> Find Your </h1>
            <NavLink to ="/spots" id="spots-link">Spot</NavLink>
        </TagLine>
        <SignUpFormDiv>
            <SignUpForm />
        </SignUpFormDiv>
    </Page>
    )
};

export default Home;
