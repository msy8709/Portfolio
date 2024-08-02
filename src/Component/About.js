import React from 'react';
import styled from 'styled-components';

const About = ({icon:Icon,title, contents}) => {
    return (
        <AboutStyle>
            <Icon className='icon'/>
            <div className='inform'>
                <p>{title}</p>
                <p>{contents}</p>
            </div>
        </AboutStyle>
    );
};

export default About;

const AboutStyle = styled.div`
    width: 20vw;
    height: 5vw;
    border: 1px solid black;
    display: flex;
    align-items: center;
    border-radius: .5vw;
    box-shadow: 0 10px 30px rgba(92, 92, 92, 0.19), 0 6px 6px rgba(183, 183, 183, 0.23);
    cursor: pointer;
    .icon{
        width: 5vw;
        height: 1.8vw;
        margin-left: .7vw;
    }
    .inform{
        display: flex;
        flex-direction: column;
        p{
        font-size: 2vh;
        font-weight: 600;
        font-family:'cursive';
        margin: 0;
        &:last-child{
            margin-top: .5vh;
        }
        }
        
    }
`