import React, { useState } from 'react'
import styled from 'styled-components'
import axios from '../features/axios'
import { useNavigate } from "react-router-dom";

function Register() {
    let navigate = useNavigate();
    const [name, setName] = useState(null);
    const [username, setUsername] = useState(null);
    const [password, setPassword] = useState(null);
    const [email, setEmail] = useState(null);
    const [loading, setLoading] = useState(true);
    async function submission(){
        setLoading(false);
        if(name!=null && password!=null && username!=null && email!=null){
            await axios.post(`/register?name=${name}&username=${username}&password=${password}&email=${email}`);
            navigate("/redir",{
                state:{
                    pname: '/'
                }
            })
        }else{
            console.log("Please Enter Valid Data")
        }
    }
  return (
      <div>
          {loading?
        <Container>
            <LContainer>
                <h1>Register</h1>
                <div>
                    <div>
                        <h5>
                            Name
                        </h5>
                        <input type='text' onChange={(e) => {setName(e.target.value)}}/>
                    </div>
                    <div>
                        <h5>
                            Username
                        </h5>
                        <input type='text' onChange={(e) => {setUsername(e.target.value)}}/>
                    </div>
                    <div>
                        <h5>
                            Password
                        </h5>
                        <input type='password' onChange={(e) => {setPassword(e.target.value)}}/>
                    </div>
                    <div>
                        <h5>
                            E-mail
                        </h5>
                        <input type='text' onChange={(e) => {setEmail(e.target.value)}}/>
                    </div>
                    <Sign type='submit' onClick={() => {submission()}}>Register</Sign>
                </div>
                <Sign type='submit' onClick={() => {navigate("/redir",{state:{pname: '/login'}})}}>Sign In</Sign>
            </LContainer>
        </Container>:
        <Container>
            <LoadingContainer>
                <LoadingImage>
                <div class="wave"></div>
                <div class="wave"></div>
                <div class="wave"></div>
                <div class="wave"></div>
                <div class="wave"></div>
                <div class="wave"></div>
                <div class="wave"></div>
                <div class="wave"></div>
                <div class="wave"></div>
                <div class="wave"></div>
                </LoadingImage>
            </LoadingContainer>
        </Container>
        }
    </div>
  )
}

export default Register

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

const LoadingContainer = styled.div`
`

const LoadingImage = styled.div`
    height: 25vh;
    display: flex;
    justify-content: center;
    align-items: center;
    .wave {
        width: 5px;
        height: 100px;
        background: linear-gradient(45deg, cyan, #fff);
        margin: 10px;
        animation: wave 1s linear infinite;
        border-radius: 20px;
      }
      .wave:nth-child(2) {
        animation-delay: 0.1s;
      }
      .wave:nth-child(3) {
        animation-delay: 0.2s;
      }
      .wave:nth-child(4) {
        animation-delay: 0.3s;
      }
      .wave:nth-child(5) {
        animation-delay: 0.4s;
      }
      .wave:nth-child(6) {
        animation-delay: 0.5s;
      }
      .wave:nth-child(7) {
        animation-delay: 0.6s;
      }
      .wave:nth-child(8) {
        animation-delay: 0.7s;
      }
      .wave:nth-child(9) {
        animation-delay: 0.8s;
      }
      .wave:nth-child(10) {
        animation-delay: 0.9s;
      }
      
      @keyframes wave {
        0% {
          transform: scale(0);
        }
        50% {
          transform: scale(1);
        }
        100% {
          transform: scale(0);
        }
      }
`