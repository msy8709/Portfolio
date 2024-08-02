import React from 'react';
import styled from 'styled-components';

const Experience = () => {
    return (
        <ExperienceStyle id='experience'>
            <p className='title'>EXPERIENCE</p>
            <div className='box'>
                <p className='etitle'>나랑팀해듀오 해커톤 우수상 수상</p>
                <p className='edate'>2024.06.27</p>
                <p className='econtents'>인하대학교 창업지원단에서 주관한 나랑팀해듀오 해커톤에서 우수상을 수상했습니다.</p>
            </div>
            <div className='box'>
                <p className='etitle'>인하대학교 창업지원단 아랩엑셀러레이팅 예비창업트랙 대상 수상</p>
                <p className='edate'>2023.09.16</p>
                <p className='econtents'>인하대학교 창업지원단에서 주관한 아랩엑셀러레이팅 예비창업트랙에서 대상을 수상했습니다.</p>
            </div>
            <div className='box'>
                <p className='etitle'>GDG Campus Korea x Whatever 메이커톤 3등 수상</p>
                <p className='edate'>2023.09.16</p>
                <p className='econtents'>Google Developer Group에서 주관한 6주 프로덕트 메이커 챌린지에서 3등을 수상했습니다.</p>
            </div>
        </ExperienceStyle>
    );
};

export default Experience;

const ExperienceStyle = styled.section`
    width: 100vw;
    height: 120vh;
    background-color: rgb(231, 174, 255, 0.3);
    position: relative;
    top: 10vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    .title{
        font-size: 7vh;
        font-weight: 600;
        font-family:'cursive';
        text-decoration: underline;
        margin: 4vh 0;
    }
    .box{
        width: 60%;
        height: 20vh;
        margin: 2vh 0;
        background-color: white;
        padding: 2vh 5vh;
        border-radius: 2vh;
        .etitle{
            font-size: 3vh;
            font-weight: 600;
            font-family:'cursive';
            margin: 2vh 0 0 0;
        }
        .edate{
            font-size: 1.8vh;
            font-weight: 600;
            font-family:'cursive';
            margin: 1vh 0 0 0;
        }
        .econtents{
            font-size: 2vh;
            font-weight: 500;
            font-family:'cursive';
            margin: 2vh 0;
        }
    }
`