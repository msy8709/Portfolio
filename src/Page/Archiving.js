import React from 'react';
import styled from 'styled-components';
import Velog from '../assets/skill/velog.png';
import Github from '../assets/skill/github.png';

const Archiving = () => {

    return (
        <ArchivingStyle id='archiving'>
            <p className='title'>ARCHIVE </p>
            <div className='boxgroup'>
                <a href='https://github.com/msy8709'>
                    <div className='box' >
                        <img src={Github}/>
                        <a href='https://github.com/msy8709'>github.com/msy8709</a> 
                        <p>소스 코드 저장소입니다.</p>
                        <p>과거부터 현재까지 진행한 <br/>프로젝트의 활동이력이 담겨 있습니다.</p>
                    </div>
                </a>
                <a href='https://velog.io/@msy8709/posts'>
                    <div className='box'>
                        <img id='velog' src={Velog}/>
                        <a href='https://velog.io/@msy8709/posts'>velog.io/@msy8709</a> 
                        <p>스터디 및 지식 공유 목적 블로그입니다.</p>
                        <p>공부한 내용을 정리하기 위한 기록 </p>
                        <p>알고있는 지식을 공유하고 피드백을 받는 공간</p>
                    </div>
                </a>
            </div>
        </ArchivingStyle>
    );
};

export default Archiving;

const ArchivingStyle = styled.section`
    height: 70vh;
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
        margin: 0;
    }
    .boxgroup{
        display: flex;
        align-items: center;
        justify-content: center;
        .box{
            display: flex;
            flex-direction:column;
            background-color: rgb(33,37,40);
            width: 35vh;
            height: 35vh;
            border-radius: 2vh;
            cursor: pointer;
            color: white;
            margin: 5vh 4vh;
        
            &:hover{
                width: 38vh;
                height: 38vh;
                transition: width 0.5s ease, height 0.5s ease ;
            }
            a{
                color: white;
                margin: 2vh 3vh;
                font-size: 2vh;
                font-weight: 600;
                font-family:'cursive';
            }
            p{
                margin: 1vh 3vh;
                width: 80%;
                font-size: 1.8;
                font-weight: 600;
                font-family:'cursive';
            }
            img{
                height: 5vh;
                width: 20vh;
                margin: 4vh 0 0 3vh;
            }
            #velog{
                height: 4vh;
                width: 12vh;
                margin-left: 3vh;
            }
        }
    }
    
`