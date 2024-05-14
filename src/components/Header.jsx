import React from "react"
import styled from "styled-components"
import avatar from "/images/image-avatar.jpg"
import moon from "/images/icon-moon.svg"
import logo from "/images/logo.svg"

export default function Header() {
    return (
        <HeaderContainer>
            <LogoMoon>
            <img className="logo" src={logo} alt="" />
            <img className="moon" src={moon} alt="" />
            </LogoMoon>
            <img className="avatar" src={avatar} alt="logo-icon" />

        </HeaderContainer>
    )
}

const HeaderContainer = styled.div`
    height: 72px;
    width: 100%;
    background-color: #373b53;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 24px 0 0;

    .avatar {
        height: 32px;
        width: 32px;
        border-radius: 50%;
        margin-left: 24px;
    }
`

const LogoMoon = styled.div`
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 100%; 
        height: 72px;
        padding: 0 24px 0 0;
        border-right: 1px solid  #494e6e;

        .logo {
        background-color: #9277ff;
        border-radius: 0 20px 20px 0;
        } 
    `


    

