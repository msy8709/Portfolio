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

const SkillBox = ({ title }) => {
    const [skillData, setSkillData] = useState({ icons: [], message: '' });

    const skillDetails = {
        HtmlIcon: { name: 'HTML', desc: '중급' },
        Css: { name: 'CSS', desc: '고급' },
        Js: { name: 'JavaScript', desc: '중급' },
        Tailwind: { name: 'Tailwind', desc: '중급' },
        ReactIcon: { name: 'React', desc: '고급' },
        Tsicon: { name: 'TypeScript', desc: '중급' },
        Sass: { name: 'Sass', desc: '고급' },
        FigmaIcon: { name: 'Figma', desc: '중급' },
        Github: { name: 'GitHub', desc: '중급' },
        Mysql: { name: 'MySQL', desc: '초급' },
        Node: { name: 'Node.js', desc: '초급' },
        Postman: { name: 'Postman', desc: '초급' },
        VsCode: { name: 'VS Code', desc: '고급' },
    };

    useEffect(() => {
        const skillDictionary = {
            '# Frond-End Skill': {
                icons: [
                    { src: HtmlIcon, ...skillDetails.HtmlIcon },
                    { src: Css, ...skillDetails.Css },
                    { src: Sass, ...skillDetails.Sass },
                    { src: Tailwind, ...skillDetails.Tailwind },
                    { src: Js, ...skillDetails.Js },
                    { src: ReactIcon, ...skillDetails.ReactIcon },
                    { src: Tsicon, ...skillDetails.Tsicon },
                ],
                message: 'These are essential front-end development skills.'
            },
            '# Back-End Skill': {
                icons: [
                    { src: Mysql, ...skillDetails.Mysql },
                    { src: Node, ...skillDetails.Node },
                ],
                message: 'These are essential back-end development skills.'
            },
            '# Using Tool': {
                icons: [
                    { src: Github, ...skillDetails.Github },
                    { src: Postman, ...skillDetails.Postman },
                    { src: FigmaIcon, ...skillDetails.FigmaIcon },
                    { src: VsCode, ...skillDetails.VsCode },
                ],
                message: 'These are tools commonly used in development.'
            }
        };

        setSkillData(skillDictionary[title] || { icons: [], message: 'No skills available.' });
    }, [title]);

    return (
        <SkillBoxStyle>
            <div className='titlebox'>{title}</div>
            <StackBox>
                {skillData.icons.map((icon, index) => (
                    <div key={index} className='stack'>
                        <img src={icon.src} alt={icon.name} />
                        <div className='text'>
                            <div className='name'>{icon.name}</div>
                            <div className='description'>{icon.desc}</div>
                        </div>
                    </div>
                ))}
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
`;

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
        align-items: center;
        border: .5px solid black;
        box-shadow:5px 5px rgba(0,0,0,.1);
        margin: 0 2vh;
        cursor: pointer;
        position: relative;
        overflow: hidden;
        transition: width 0.5s ease;
        &:hover{
            width: 20vh;
        }
        img{
            height: 6vh;
            margin-right: 1vh;
            position: absolute;
            left: 1vh;
        }
        .text {
            opacity: 0;
            position: relative;
            transition: opacity 0.5s ease;
            display: flex;
            flex-direction: column;
            align-items: flex-start;
            
            .name {
                position: relative;
                top: 3vh;
                left: 8.5vh;
                font-size: 1.7vh;
                font-weight: bold;
                font-family: 'cursive';
            }
            .description {
                position: relative;
                top: 1.3vh;
                left: 8.5vh;
                font-size: 1.6vh;
                font-weight: 700;
                color: gray;
                font-family: 'cursive';
            }
        }
        &:hover .text {
            opacity: 1;
        }
        
    }
`;
