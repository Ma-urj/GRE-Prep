import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import axios from '../features/axios'
import { useNavigate } from "react-router-dom";
import Loading from './Loading';


function LearntWords() {
    let navigate = useNavigate();
    const [wordList, setWords] = useState();
    const [loading, setLoading] = useState(false);
    useEffect(() => {
        async function fetchData() {
            const req = await axios.get(`/learnt-wordlist?userid=1`);

            setWords(req.data);
            setLoading(true);
        }
        
        

        fetchData();
    },[]);
    
    async function unlearnWord(word){
        setLoading(false);
        await axios.post(`/unlearn?word=${word}&userid=1`);
        navigate("/redir",{
            state:{
                pname: '/knownlist'
            }
        })
    }
  return (
    <Main>
        {loading?
        <Container>
            <CardContainer>
                {wordList.map((word) => {
                    return(
                        <SCC>
                            <Card>
                                <Word>
                                    {word.word}
                                </Word>
                                <Meaning class='meaning'>
                                    {word.meaning}
                                </Meaning>
                            </Card>
                            <Crosses>
                              <Cross type="submit" onClick={() => {unlearnWord(word.word)}}>X</Cross>
                            </Crosses>
                        </SCC>
                    )
                })} 
            </CardContainer>
            <img src='/images/Logo-Purple.png' alt='logo'/>
        </Container>:
        <Loading />
        }
    </Main>
  )
}

export default LearntWords

const Main = styled.div`
  min-height: calc(100vh - 70px);
  background: #630f54; 

`

const Crosses = styled.div`
  display: flex;
  margin-top: 5px;
`

const CardContainer=styled.div`
    display: grid;
    justify-content: center;
    padding: 10px;
    grid-column-gap: 15px;
    grid-row-gap: 15px;
    margin-top: 15px;
    text-align: left;
`

const SCC = styled.div`
    display: flex;
    align-items: center;
    z-index:1;
    @media(max-width: 600px){
      flex-direction: column;
    }
`

const Cross = styled.button`
    background: transparent;
    color: white;
    border: 3px solid white;
    width: 4vw;
    height: 4vh;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 1em 3em;
    margin: 0 1em;
    &:hover{
        cursor: pointer;
    }
`

const Card = styled.div`
    display: flex;
    padding: 10px;
    flex-direction: column;
    border: 3px solid white;
    &:hover{
        div{
            display: block;
        }
        cursor: pointer;
    }
    width: 30vw;
`

const Word = styled.div``

const Meaning = styled.div`
    display: none;
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

