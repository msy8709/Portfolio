import React from "react";
import Nav from "../Component/Nav";
import styles from "./Main.module.css";
export default function Main(){
    return(
        <div>
        
            <section id="Intro" className={styles.IntroBack} >
                <div className={styles.box}>
                    <div className={`${styles.wave} ${styles['-one']}`}></div>
                    <div className={`${styles.wave} ${styles['-two']}`}></div>
                    <div className={`${styles.wave} ${styles['-three']}`}></div>
                    <ul className={styles.menuMask} style={{transform: 'translateY(-83.65px)'}}>
                        <li className={styles.menuMaskLi}>안녕하세요 !</li>
                        <li className={styles.menuMaskLi2}>FE 개발자 문소영입니다.</li>
                    </ul>
                </div>
            </section>
            {/* <section className={styles.section3}>
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
            </section> */}
        </div>
    )
}