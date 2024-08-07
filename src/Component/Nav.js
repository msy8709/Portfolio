import styled from "styled-components"

export default function Nav(){
    
    return(
        <NavStyle>
            <p id='name'>Mun Soyeong</p>
            <div className="navlist" >
                <a href="#aboutMe">About Me</a >
                <a href="#skill">Skill</a >
                <a href="#archiving">Archiving</a >
                <a href="#project">Project</a >
            </div>
        </NavStyle>
    )
}
const NavStyle = styled.div`
    width: 100vw;
    height: 10vh;
    display: flex;
    justify-content: space-between;
    background-color: white;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 1999;
    .navlist{
        display: flex;
        justify-content: center;
        align-items: center;
        margin-right: 10vh;
    }
    p, a{
        font-size: 25px;
        margin-left: 5vh;
        line-height: 2;
        font-weight: 600;
        font-family: 'cursive';
        text-decoration: none;
        color: black;
        cursor: pointer;
        &:hover{
            color: rgb(86,182,230);
            transition: color 1s;
        }
    }
`