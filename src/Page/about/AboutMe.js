import React from 'react';
import styled from 'styled-components';
import About from '../../Component/About';
import { FaIdCard } from "react-icons/fa";
import { IoCall } from "react-icons/io5";
import { MdOutlineMailOutline } from "react-icons/md";
import { FaSchool } from "react-icons/fa";
const AboutMe = () => {
    return (
        <AboutMeStyle id='aboutMe'>
            <p className='title'>ABOUT ME</p>
            <Contents>
                <Sectence>
                    <p className='intro1'>세상에 있는 무궁무진한 아이디어를 <br/>직접 구현해가는 과정이 재미 있습니다.</p>
                    <p className='intro2'>새로운 시도를 두려워하지 않는 <br/>프론트엔드 개발자가 되겠습니다. </p>
                </Sectence>

                <InfoStyle>
                    <About icon={FaIdCard} title="Name" contents="문소영"/>
                    <About icon={IoCall} title="Phone" contents="010-6369-8709"/>
                    <About icon={MdOutlineMailOutline} title="Email" contents="munsoyeong12@gmail.com"/>
                    <About icon={FaSchool} title="School" contents="인하대학교 소프트웨어융합공학"/>
                </InfoStyle>
            </Contents>
            
        </AboutMeStyle>
    );
};
export default AboutMe;

const AboutMeStyle = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100vw;
    height: 80vh;
    position: relative;
    top: 10vh;
    .title{
        font-size: 7vh;
        font-weight: 600;
        font-family:'cursive';
        text-decoration: underline;
    }
`
const Contents = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 60vh;
`

const Sectence = styled.div`
    width: 30%;
    p{
        font-size: 3vh;
        font-weight: 500;
        font-family:'cursive';
        margin: 5vh 0;
    }
`
const InfoStyle = styled.div`
    width: 30%;
    display: grid;
    grid-template-rows: 4;
    height: 50vh;
    justify-content: center;
`