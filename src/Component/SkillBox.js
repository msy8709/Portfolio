import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import HtmlIcon from '../assets/skill/htmlIcon.png';
import Css from '../assets/skill/cssIcon.png';
import Js from '../assets/skill/jsIcon.png';
import Tailwind from '../assets/skill/TailwindIcon.png';
import ReactIcon from '../assets/skill/reactIcon.png';
import Tsicon from '../assets/skill/TsIcon.png';
import Sass from '../assets/skill/sassIcon.png';
import FigmaIcon from '../assets/skill/figmaIcon.png';
import Github from '../assets/skill/githubIcon.png';
import Mysql from '../assets/skill/mysqlIcon.png';
import Node from '../assets/skill/nodeIcon.png';
import Postman from '../assets/skill/postmanIcon.png';
import VsCode from '../assets/skill/vscodeIcon.png';
const SkillBox = ({title}) => {
    const [skillData, setSkillData] = useState({ icons: [], message: '' });
    useEffect(() => {
        const skillDictionary = {
          '# Frond-End Skill': {
            icons: [HtmlIcon, Css, Sass, Tailwind, Js, ReactIcon, Tsicon],
            message: 'These are essential front-end development skills.'
          },
          '# Back-End Skill': {
            icons: [Mysql, Node],
            message: 'These are essential back-end development skills.'
          },
          '# Using Tool': {
            icons: [Github, Postman, FigmaIcon, VsCode],
            message: 'These are tools commonly used in development.'
          }
        };

        setSkillData(skillDictionary[title] || { icons: [], message: 'No skills available.' });
    }, [title]);
    return (
        <SkillBoxStyle>
            <div className='titlebox'>{title}</div>
            <StackBox>
                {skillData.icons.map((icon, index) => 
                    (<div className='stack'>
                        <img key={index} src={icon} />
                    </div>)
                )}
                
            </StackBox>
        </SkillBoxStyle>
    );
};

export default SkillBox;

const SkillBoxStyle = styled.div`
    width: 70%;
    border-radius: 3vh;
    display: flex;
    flex-direction: column;
    padding: 3vh 5vh;
    .titlebox{
        width: 14vw;
        height: 4vh;
        border-radius: 3vh;
        text-align: center;
        background-color: black;
        color: white;
        line-height: 2;
        font-size: 2vh;
        font-weight: 500;
        font-family: 'cursive';
        
    }
`

const StackBox = styled.div`
    display: flex;
    width: 50vw;
    margin-top: 4vh;
    .stack{
        width: 8vh;
        height: 8vh;
        font-size: 6vh;
        background-color: white;
        display: flex;
        justify-content: center;
        align-items: center;
        border: .5px solid black;
        box-shadow:5px 5px rgba(0,0,0,.1);
        margin: 0 2vh;
        cursor: pointer;
        img{
            height: 6vh;
        }
    }

`