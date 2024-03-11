import React from "react";
import Nav from "../Component/Nav";
import styles from "./Main.module.css";
import { FaIdCard } from "react-icons/fa";
import { IoCall } from "react-icons/io5";
import { MdOutlineMailOutline } from "react-icons/md";
import { FaSchool } from "react-icons/fa";
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
            </section>
        </div>
    )
}