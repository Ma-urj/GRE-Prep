import React, { useState } from 'react'
import styled from 'styled-components'
import { useNavigate } from "react-router-dom";

function NavBar() {
  const [showTB,setShowTB] = useState("none");

    async function ShowTB(){
        setShowTB("unset");
    }

    async function closeTB(){
        setShowTB("none");
    }
  let navigate = useNavigate();
  function redirect(location){
    navigate('/redir',{state:{pname: location}});
  }
  return (
    <div>
        <Container>
            <Menus>
              <Options onClick={ShowTB}><img src="/images/menu.png" alt='menu'/></Options>
              <Logo src='/images/Logo-Black.png' alt='logo' height={'70px'} onClick = {() => {redirect('/')}}/>
              <NavMenu>
                <MenuO type="submit" onClick = {() => {redirect('/')}}>Home</MenuO>
                <MenuO type="submit" onClick = {() => {redirect('/knownlist')}}>Known Words</MenuO>
                <MenuO type="submit" onClick = {() => {redirect('/userlist')}}>My Words</MenuO>
                <MenuO type="submit" onClick = {() => {redirect('/newwords')}}>New Words</MenuO>
                <MenuO type="submit" onClick = {() => {redirect('/login')}}>Login</MenuO>
              </NavMenu>
            </Menus>
        </Container>
        <Tolbar>
          <Side class="toolbar" style={{display: `${showTB}`}}>
              <Logo src='/images/Logo-Black.png' height={'70px'} onClick = {() => {redirect('/')}}/>
              <div>
                  <ul>
                      <li>
                        <MenuO type="submit" onClick = {() => {redirect('/')}}>Home</MenuO>
                      </li>
                      <li>
                        <MenuO type="submit" onClick = {() => {redirect('/knownlist')}}>Known Words</MenuO>
                      </li>
                      <li>
                        <MenuO type="submit" onClick = {() => {redirect('/userlist')}}>My Words</MenuO>
                      </li>
                      <li>
                        <MenuO type="submit" onClick = {() => {redirect('/newwords')}}>New Words</MenuO>
                      </li>
                      <li>
                        <MenuO type="submit" onClick = {() => {redirect('/login')}}>Login</MenuO>
                      </li>
                  </ul>
              </div>
              <Closer onClick={closeTB}>
                  <img src = "/images/close.png" alt='close'/>
              </Closer>
          </Side>
        </Tolbar>
        <Main />
    </div>
  )
}

export default NavBar

const Options = styled.button`
    background: none!important;
    border: none;
    display: none;
    img{
        max-height: 40px;
        width: auto;
    }
    &:hover{
        cursor: pointer;
    }
    @media (max-width: 768px){
        display: unset;
    }
`

const Closer = styled.button`
    margin-top: 20px;
    background: none!important;
    border: none;
    img{
        max-height: 40px;
        width: auto;
    &:hover{
        cursor: pointer;
    }
`

const Tolbar = styled.header`
    position: fixed;
    top: 0px;
    width: 100%;
    z-index: 2;
    display: flex;
    @media (min-width: 769px){
        display: none;
    }
`

const Side = styled.div`
    background: black;
    opacity: 0.9;
    padding-right: 200px;
    height: 100vh;
    ul{
        list-style-type: none;
        li{
          margin-bottom: 2em;
          &:hover{
            border-bottom: 2px solid white;
          }
        }
    }
`

const Main = styled.div`
    margin-top: 110px;
`

const Logo = styled.img`
  &:hover{
    cursor: pointer;
    border-bottom: 2px solid white; 
  }
`

const Menus = styled.div`
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: space-around;
  padding: 20px;
  margin: 0 10px;
`

const NavMenu = styled.div`
    display: flex;
    justify-content: space-between;
    flex-flow: row norap;
    @media (max-width: 768px){
        display: none;
    }
`

const Container = styled.div`
    position: fixed;
    top: 0;
    background: black;
    width: 100vw;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    z-index: 1000;
`

const MenuO = styled.button`
    text-decoration: none;
    color: white;
    background: transparent;
    border: none;
    &:hover{
        cursor: pointer;
        border-bottom: 2px solid white;
    }
    margin-right: 10em;
`