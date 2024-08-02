import React from 'react';
import styled from 'styled-components';

const Project = () => {
    return (
        <ProjectStyle id='project'>
            <p className='title'>PROJECT</p>
            <Project/>
        </ProjectStyle>
    );
};

export default Project;

const ProjectStyle = styled.section`
    width: 100vw;
    height: 120vh;
    background-color: rgb(0,170,255,0.5);
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
        margin:0;
    }
`