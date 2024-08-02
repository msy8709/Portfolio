import React from 'react';
import styled from 'styled-components';
import SkillBox from '../Component/SkillBox';
const Tech = () => {
    return (
        <TechStyle id='skill'>
            <p className='title'>TECH STACK</p>
            <p className='description'>아이콘에 마우스를 올리면 자세한 설명이 나옵니다.</p>

            <Contents>
                <SkillBox title='# Frond-End Skill'/>
                <SkillBox title='# Back-End Skill'/>
                <SkillBox title='# Using Tool'/>
            </Contents>
        </TechStyle>
    );
};

export default Tech;

const TechStyle = styled.section`
    background-color: #FFFFB5;
    height: 100vh;
    width: 100vw;
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
        margin: 10vh 0 0 0;
    }
    .description{
        font-size: 2vh;
        font-weight: 600;
        font-family:'cursive';
        margin: 2vh 0 5vh 0 ;
        -webkit-text-stroke: .4px white;
    }
`

const Contents = styled.div`

`