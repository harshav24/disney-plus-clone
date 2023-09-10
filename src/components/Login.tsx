import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

export const Login = () => {

    const navigate = useNavigate();
  return (
    <Conatiner>
        <CTA>
            <CTALogoOne src="/images/cta-logo-one.svg" />
            <SignUp onClick={() => navigate("/")}>GET ALL THERE</SignUp>
            <Description>
                Get Premium Access to Raya and the Last Dragon for
                one month with Disney+ subscription. As of now, the price is 25$ per month and the disney bundle will increase by $1.
            </Description>
            <CTALogoTwo src="/images/cta-logo-two.png" />
        </CTA>
    </Conatiner>
  )
};


const Conatiner = styled.div`
    position: relative;
    height: calc(100vh - 70px);
    display:flex;
    align-items: top;
    justify-content: center;

    &::before {
        position: absolute;
        content: "";
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        background-image: url("/images/login-background.jpg");
        background-position: top;
        backgroud-size: cover;
        background-repeat: no-repeat; 
        opacity: 0.96;
        z-index: -1;
    }
    `
const CTA = styled.div`
    position: absolute;
    max-width: 650px;
    padding: 80px 40px;
    width: 90%;
    display: flex;
    flex-direction: column;
    margin-top: 100px;
    align-items: center;c
    `
    
const CTALogoOne = styled.img`
`
const CTALogoTwo = styled.img`
    width: 90%;
`

    
const SignUp = styled.a`
    width: 100%;
    background-color: #0063e5;
    font-weight: bold;
    padding: 17px 0;
    color: #f9f9f9;
    border-radius: 4px;
    text-align: center;
    cursor: pointer;
    transition: all 250ms;
    letter-spacing: 1.5px;
    margin:10px 0;
    font-size: 20px;

    &:hover {
        background-color: #0483ee;
    }

    @media only screen and (max-width: 400px) {
            font-size: 14px
        }
`
const Description = styled.p`
    color: #f9f9f9;
    font-size: 11px;
    letter-spacing: 1.5px;
    text-align: center;
    line-height:1.5;
`

