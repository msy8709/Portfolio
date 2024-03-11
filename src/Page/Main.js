import React from "react";
import Nav from "../Component/Nav";
import styles from "./Main.module.css";
import { FaIdCard } from "react-icons/fa";
import { IoCall } from "react-icons/io5";
import { MdOutlineMailOutline } from "react-icons/md";
import { FaSchool } from "react-icons/fa";
import { TfiArrowCircleDown } from "react-icons/tfi";
export default function Main(){
    return(
        <div>
            <Nav/>
            <section id="Intro" className={styles.IntroBack}>
                <div className={styles.box}>
                <div className={`${styles.wave} ${styles['-one']}`}></div>
                <div className={`${styles.wave} ${styles['-two']}`}></div>
                <div className={`${styles.wave} ${styles['-three']}`}></div>
                <ul className={styles.menuMask} style={{transform: 'translateY(-83.65px)'}}>
                    <li>Frontend</li>
                    <li>Portfolio</li>
                </ul>
                </div>
                
            </section>
            <section className={styles.section2}>
            <p style={{fontSize:'2.5vw',fontWeight:'300',marginBottom:'5vw'}}>About</p>
                <div className={styles.projectbox}>
                <div className={styles.introbox}>
                    <p className={styles.intro1}>세상에 있는 무궁무진한 아이디어를 <br/>직접 구현해가는 과정이 재미 있습니다.</p>
                    <p className={styles.intro2}>새로운 시도를 두려워하지 않는 <br/>프론트엔드 개발자가 되겠습니다. </p>
                </div>
                <div className={styles.selfintrobox}>
                    <div className={styles.selfbox}><FaIdCard className={styles.icon}/><div className={styles.inform}><p className={styles.selftext1}>Name</p><p className={styles.selftext2}>문소영</p></div></div>
                    <div className={styles.selfbox}><IoCall className={styles.icon}/><div className={styles.inform}><p className={styles.selftext1}>Phone</p><p className={styles.selftext2}>010-6369-8709</p></div></div>
                    <div className={styles.selfbox}><MdOutlineMailOutline className={styles.icon}/><div className={styles.inform}><p className={styles.selftext1}>Email</p><p className={styles.selftext2}>munsoyeong12@gmail.com</p></div></div>
                    <div className={styles.selfbox}><FaSchool className={styles.icon}/><div className={styles.inform}><p className={styles.selftext1}>Programers</p><p className={styles.selftext2}>웹 풀 사이클 개발 2기</p></div></div>
                </div>
                </div>
            </section>
            <section className={styles.section3}>
                <p style={{fontSize:'2.5vw',fontWeight:'300',marginBottom:'5vw'}}>Projects</p>
                <div className={styles.projectbox}>
                    <div className={styles.project}>
                        <div className={styles.imagebox1}></div>
                        <div className={styles.namebox}><span className={styles.name}>Agrounds</span><span className={styles.name2}>Team Project</span></div>
                        <p className={styles.description}>축구 전술분석 플랫폼. 현재 프로 축구 팀을 위한 전술분석 서비스는 존재하지만 아마추어 팀을 위한 팀은 존재하지 않음. 실제 기기를 직접 개발해 아마추어를 타겟으로 한 전술분석 서비스를 개발함.
                        </p>
                        <div className={styles.stack}>Stack</div>
                        <p className={styles.stackcontents}>React</p>
                    </div>
                    <div className={styles.project}>
                    <div className={styles.imagebox2}></div>
                        <div className={styles.namebox}><span className={styles.name}>moamoa</span><span className={styles.name2}>Team Project</span></div>
                        <p className={styles.description}>포즈추천 서비스. 인생네컷, 스티커 사진 등 사진에 진심인 mz세대를 타겟팅하여 개발한 포즈추천 서비스. 실제로 배포하여 서비스를 런칭했고 Mau가 약 1000명이었음.
                        </p>
                        <div className={styles.stack}>Stack</div>
                        <p className={styles.stackcontents}>React</p>
                    </div>
                    <div className={styles.project}>
                    <div className={styles.imagebox3}></div>
                        <div className={styles.namebox}><span className={styles.name}>Make Campus</span><span className={styles.name2}>Team Project</span></div>
                        <p className={styles.description}>교환학생을 위한 커뮤니티 플랫폼. 현재 현지 대학생들을 위한 커뮤니티 플랫폼은 다수 존재하지만
                            먼 타지에서 온 교환학생을 위한 플랫폼은 존재하지 않음. 교환학생을 위한 웹 사이트를 개발함.
                        </p>
                        <div className={styles.stack}>Stack</div>
                        <p className={styles.stackcontents}>Html,Css,Vanilla Js</p>
                    </div>
                </div>
                
            </section>
        </div>
    )
}