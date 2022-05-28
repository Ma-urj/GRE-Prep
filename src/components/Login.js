import React from 'react'
import styled from 'styled-components'
import { useNavigate } from "react-router-dom";

function Login() {
    let navigate = useNavigate();
  return (
    <Container>
        <LContainer>
            <h1>Sign In</h1>
            <form>
                <div>
                    <h5>
                        Username
                    </h5>
                    <input type='text' />
                </div>
                <div>
                    <h5>
                        Password
                    </h5>
                    <input type='password' />
                </div>
                <Sign>Sign In</Sign>
            </form>
            <Sign type='submit' onClick={() => {navigate("/redir",{state:{pname: '/register'}})}}>Register</Sign>
        </LContainer>
        <img src='/images/Logo-Purple.png' alt='logo'/>
    </Container>
  )
}

export default Login

const LContainer = styled.div`
`

const Sign = styled.button`
    margin-top: 2em;
    text-decoration: none;
    color: white;
    background: transparent;
    border: 2px solid white;
    padding: 10px;
    border-radius: 20%;
    &:hover{
        cursor: pointer;
        border-bottom: 2px solid white;
        background: black;
    }
`

const Container = styled.div`
    min-height: calc(100vh - 70px);
    padding: 0 calc(3.5vw + 5px);
    position: relative;
    overflow-x: hidden;
    &:before{
        background: #630f54; 
        no-repeat fixed;
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        z-index: -10;
    }
    color: white;
    overflow: hidden;
`