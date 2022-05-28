import React, { useState } from 'react'
import styled from 'styled-components'
import axios from '../features/axios'
import { useNavigate } from "react-router-dom";
import Loading from './Loading';

function AddWord() {
    let navigate = useNavigate();
    const [word, setWord] = useState(null);
    const [loading, setLoading] = useState(true);
    async function sendWord(){
        if(word.split(' ').length>1){
          alert("Please Enter a single word");
        }else{
        setLoading(false);
        await axios.post(`/new?word=${(word.toLowerCase())}&userid=1`);
        navigate("/redir",{
            state:{
                pname: '/userlist'
            }
        })
      }
    }
  return (
      <div>
        {loading?
        <Container>
            <Form>
                <label>
                    Add New Word :
                    <FormInp type="text" word="word" onChange={(e) => {setWord(e.target.value)}}/>
                </label>
                <FormIn type="submit" value="Submit" onClick={async() =>{sendWord()}}/>
            </Form>
        </Container>:
        <Loading />
        }
    </div>
  )
}

export default AddWord

const FormIn = styled.input`
  text-decoration: none;
  color: white;
  background: transparent;
  border: 2px solid white;
  padding: 10px;
  border-radius: 20%;
  margin: 10px 10px;
  &:hover{
    cursor: pointer;
    background: black;
  }
`

const FormInp = styled.input`
  text-decoration: none;
  color: white;
  background: transparent;
  border: 2px solid white;
  padding: 5px;
  border-radius: 10%;
  margin: 10px 10px;
`

const Form = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

const Container = styled.div`
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
        z-index: -1;
    }
    color: white;
    overflow: hidden;
`
