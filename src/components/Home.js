import React from 'react'
import styled from 'styled-components'

function Home() {
  return (
    <Container>
        <Main>
            <h1>Welcome to GRE Words Prep</h1>
            <p>This Website allows you to prepare GRE words</p>
            <p>You can Add Any Word you want</p>
            <p>You can add words from our list of words as well</p>
            <p>You can mark words you already know or have learnt</p>
        </Main>
        <img src='/images/Logo-Purple.png' alt='logo'/>
    </Container>
  )
}

export default Home

const Main = styled.div``

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