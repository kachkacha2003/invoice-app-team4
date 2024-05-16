import React from "react"
import styled from "styled-components"
import avatar from "/images/image-avatar.jpg"
import moon from "/images/icon-moon.svg"
import logo from "/images/logo.svg"

export default function Header() {
    return (
        <HeaderContainer>
            
            <LogoMoon>
            <div className="dark"></div>
            <div className="light"></div>
                <img className="logo" src={logo} alt="" />
                <img className="moon" src={moon} alt="" />
            </LogoMoon>
            <img className="avatar" src={avatar} alt="logo-icon" />

        </HeaderContainer>
    )
}

const HeaderContainer = styled.div`
    width: 100%;
    background-color: #373b53;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 2.4rem 0 0;

    .avatar {
        height: 3.2rem;
        width: 3.2rem;
        border-radius: 50%;
        margin-left: 2.4rem;
    }

    .dark {
            position: relative;
            width: 7.2rem;
            height: 7.2rem;
            background-color: #7c5dfa;
            border-radius: 0 2rem 2rem 0;
        } 

    .light {
            position: absolute;
            width: 7.2rem;
            height: 3.7rem;
            background-color: #9277ff;
            transform: rotate(180deg);
            margin-bottom: -3.7rem;
            border-radius: 2rem 0 2rem 0;
        }
`

const LogoMoon = styled.div`
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 100%;
        height: 7.2rem;
        padding: 0 2.4rem 0 0;
        border-right: 0.1rem solid  #494e6e;

        .logo {
        position: absolute;
        margin-left: 2rem;
        } 

        
    `


    

