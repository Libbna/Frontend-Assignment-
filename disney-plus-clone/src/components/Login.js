import React from 'react';
import styled from 'styled-components';


const Login = () => {
  return (
    <Container>
        <CTA>
            <CTALogoOne src = "/images/cta-logo-one.svg" />
            <SignUp>GET ALL THERE</SignUp>
            <Description>
            With the Disney+ Hotstar Premium subscription, users will get unlimited live sports streaming along with special Hostar specials and Star series before TV broadcast. ... The premium subscription also offers ad-free entertainment across its platform.
            </Description>
            <CTALogoTwo src = "/images/cta-logo-two.png" />

        </CTA>
    </Container>
  );
}
 
export default Login;


const Container = styled.div `
    position: relative;
    height: calc(100vh - 70px);
    display: flex;
    align-items: top;
    justify-content: center;

    &:before {
        position: absolute;
        content: "";
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        z-index: -1;
        background-image: url("/images/login-background.jpg");
        background-position: top;
        background-size: cover;
        background-repeat: no-repeat;
        opacity: 0.7;
    }
`

const CTA = styled.div `
    max-width: 650px;
    width: 90%;
    padding: 80px 40px;
    display: flex;
    flex-direction: column;
    margin-top: 100px;
    align-items: center;
    
`

const CTALogoOne = styled.img `
     
`

const SignUp = styled.a `
    width: 100%;
    background-color: #0063e5;
    font-weight: bold;
    padding: 17px 0;
    color: #f9f9f9;
    border-radius: 4px;
    text-align: center;
    font-size: 18px;
    cursor: pointer;
    transition: all 250ms;
    letter-spacing: 1.5px;
    margin-top: 8px;
    margin-bottom: 12px;

    &:hover {
        background: #0483ee; 
    }

`

const Description = styled.p `
    font-size: 11ox;
    letter-spacing: 1.5px;
    text-align: center;
    line-height: 1.5;
`

const CTALogoTwo = styled.img `
    width: 90%;

`