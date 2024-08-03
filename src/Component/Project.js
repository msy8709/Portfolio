import React, { useState } from 'react';
import styled from 'styled-components';
import Slider from 'react-slick';
import Login from '../assets/project/agrounds_demo_screenshot/Login.png';
import AfterMatch from '../assets/project/agrounds_demo_screenshot/AfterMatch.png';
import Mainpage from '../assets/project/agrounds_demo_screenshot/MainPage.png';
import TeamAnal from '../assets/project/agrounds_demo_screenshot/TeamAnal.png';

import Movie1 from '../assets/movie_view/movie1.png';
import Movie2 from '../assets/movie_view/movie2.png';
import Movie3 from '../assets/movie_view/movie3.png';
import Movie4 from '../assets/movie_view/movie4.png';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import PersonalAnal from '../assets/project/agrounds_demo_screenshot/PersonalAnal.png'
const ProjectC = () => {
  const settings = {
    dots: false,
    lazyLoad: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 2,
    arrow: true,
    autoplay: true,
    autoplaySpeed: 3000,
  }
  return (
    <>
      <ProjectStyle>
        <SliderStyle className='slider-container'  style={{width: '15vw',height: '40vh'}}>
          <Slider {...settings}>
            <div className='sliderInbox'>
              <img src={Login}/>
            </div>
            <div className='sliderInbox'>
              <img src={Mainpage}/>
            </div>
            <div className='sliderInbox'>
              <img src={AfterMatch}/>
            </div>
            <div className='sliderInbox'>
              <img src={TeamAnal}/>
            </div>
            <div className='sliderInbox'>
              <img src={PersonalAnal}/>
            </div>
          </Slider>
        </SliderStyle>
        <DescriptionStyle>
          <p className='subject'>⚽️ AGROUNDS Demo</p>
          <p>2024.06.01 ~ 2024.08.31(백엔드 2, 프론트 1)</p>
          <b>정부 예비창업패키지 참여중</b>
          <p>AGROUNDS는 아마추어 축구 커뮤니티의 요구를 반영하여 기획된 서비스로, 경기 기록 및 전술 분석을 통해 팀과 선수들이 더 나은 경기를 할 수 있도록 돕습니다. 이 데모 버전은 일부 유저들에게 배포되어 피드백을 수집하고, 이를 바탕으로 필요한 기능을 강화하고 불필요한 기능은 제거하여 서비스의 완성도를 높일 계획입니다.</p>
          <br/>
          <p>홀로 2명의 개발자와 개발을 진행하며 Restful API에 대한 이해를 증가시킬 수 있었고, 리액트에 대해 심층적으로 이해할 수 있었습니다.</p>
        </DescriptionStyle>
      </ProjectStyle>

    <ProjectStyle>
      <SliderStyle className='slider-container'  style={{width: '20vw',height: '20vh', marginLeft: '6vh'}}>
        <Slider {...settings}>
          <div className='sliderInbox'>
            <img className='wide'src={Movie1}/>
          </div>
          <div className='sliderInbox'>
            <img className='wide'src={Movie2}/>
          </div>
          <div className='sliderInbox'>
            <img className='wide'src={Movie3}/>
          </div>
          <div className='sliderInbox'>
            <img className='wide' src={Movie4}/>
          </div>
          
        </Slider>
      </SliderStyle>
      <DescriptionStyle>
        <p className='subject'>📺 Movie View</p>
        <p>2024.06.29 ~ 2024.07.15(기능별 구현, 팀원 5)</p>
        <b>미니 프로젝트</b>
        <p>영화 정보 조회와 리뷰를 작성할 수 있는 웹 프로젝트입니다. 프론트엔드, 백엔드를 따로 나누지 않고 맡은 기능별로 역할을 분담하여 프로젝트를 진행했습니다. 마이페이지에서 프로필 사진, 닉네임 수정을 담당했으며 S3에 사진을 저장하는 방식을 이용하여 클라우드 사용 경험을 얻을 수 있었습니다.</p>
        <p>프로젝트를 진행하며, 맥과 window의 운영체제 차이때문에 이미지가 제대로 로드되지 않는 문제를 직면하였고 이를 해결하기 위해 코드 상단에서 경로 분리를 사용하여 해결했습니다. </p>
      </DescriptionStyle>
    </ProjectStyle>

    <ProjectStyle>
        <SliderStyle className='slider-container'  style={{width: '15vw',height: '40vh'}}>
          <Slider {...settings}>
            <div className='sliderInbox'>
              <img src='https://github.com/user-attachments/assets/e38ecc92-d8b7-4904-a70a-96c7bb61b2e3'/>
            </div>
            <div className='sliderInbox'>
              <img src='https://github.com/user-attachments/assets/5ed18b35-9a84-42e7-a5ab-378ba58dac3e'/>
            </div>
            <div className='sliderInbox'>
              <img src='https://github.com/user-attachments/assets/d3162f90-adfe-4543-b05d-ee1130a52362'/>
            </div>
            <div className='sliderInbox'>
              <img src='https://github.com/user-attachments/assets/d9998337-a25b-40c5-9add-b9c588038839'/>
            </div>
            <div className='sliderInbox'>
              <img src='https://github.com/user-attachments/assets/c86af651-3f4f-42e6-a2f0-8c4709ee0816'/>
            </div>
            <div className='sliderInbox'>
              <img src='https://github.com/user-attachments/assets/5257b928-3a36-47b2-876c-be7efbd73bf0'/>
            </div>
            <div className='sliderInbox'>
              <img src='https://github.com/user-attachments/assets/98fb5ada-2bd1-44bd-adb5-f0209bb2c6c6'/>
            </div>
            <div className='sliderInbox'>
              <img src='https://github.com/user-attachments/assets/1f0be134-308d-4ba3-b6b5-121da5eac5d2'/>
            </div>
            <div className='sliderInbox'>
              <img src='https://github.com/user-attachments/assets/129ed43b-891e-4540-a012-912adf016ce3'/>
            </div>
            <div className='sliderInbox'>
              <img src='https://github.com/user-attachments/assets/1ffebea3-2043-4b67-852c-6720dadc7368'/>
            </div>
          </Slider>
        </SliderStyle>
        <DescriptionStyle>
          <p className='subject'>⏰ Golden Hour Prototype</p>
          <p>2024.04.10 ~ 2024.05.13(프론트 2)</p>
          <b>나랑팀해듀오 해커톤 우수상 수상</b>
          <p>Golden Hour Prototype은 지각 방지 서비스 Golden Hour의 주요기능 실험을 위해 만든 프로토타입 입니다. 지각의 근본적인 원인은 '본인의 준비시간을 인지하지 못하기 때문이다' 라는 가설을 세우고 유저의 준비시간을 직접 측정할 수 있도록 구현하였습니다.</p>
          <br/>
          <p>React Native를 사용하여 background에서도 타이머가 작동할 수 있게 구현하였습니다.</p>
        </DescriptionStyle>
      </ProjectStyle>

    <ProjectStyle style={{height: '80vh'}}>
      <SliderStyle className='slider-container'  style={{width: '15vw',height: '40vh'}}>
        <Slider {...settings}>
          <div className='sliderInbox'>
            <img src='https://github-production-user-asset-6210df.s3.amazonaws.com/78317343/354684290-46a40e64-9ef1-46f6-af89-2ce3f181002f.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAVCODYLSA53PQK4ZA%2F20240803%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20240803T055011Z&X-Amz-Expires=300&X-Amz-Signature=db5f863128298c6668fbd7be300238368a3337d5bcf3554f845e9d7ab67cfde6&X-Amz-SignedHeaders=host&actor_id=0&key_id=0&repo_id=712910675'/>
          </div>
          <div className='sliderInbox'>
            <img src='https://github-production-user-asset-6210df.s3.amazonaws.com/78317343/354678694-4da23182-57a1-4021-b4f5-931a85b212e6.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAVCODYLSA53PQK4ZA%2F20240803%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20240803T074831Z&X-Amz-Expires=300&X-Amz-Signature=385e2ab7a0931c0ec8ae9f42f6d06f9aac8c0f046f29af6ee9a3f1811f977696&X-Amz-SignedHeaders=host&actor_id=0&key_id=0&repo_id=712910675'/>
          </div>
          <div className='sliderInbox'>
            <img src='https://github-production-user-asset-6210df.s3.amazonaws.com/78317343/354685313-6862c924-2a14-4933-bc3b-c80ca2967b25.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAVCODYLSA53PQK4ZA%2F20240803%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20240803T075027Z&X-Amz-Expires=300&X-Amz-Signature=87789a8db56325524f42b54afe01911f39124e0b25d69a7f434143c2edb18cb4&X-Amz-SignedHeaders=host&actor_id=0&key_id=0&repo_id=712910675'/>
          </div>
          <div className='sliderInbox'>
            <img src='https://github-production-user-asset-6210df.s3.amazonaws.com/78317343/354678703-71459175-db19-40b4-9b92-577ec937aa5f.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAVCODYLSA53PQK4ZA%2F20240803%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20240803T055123Z&X-Amz-Expires=300&X-Amz-Signature=5c7071eb1f68df23b275f7125772cfe7af88ecb6aad63f1777db0800a74fa205&X-Amz-SignedHeaders=host&actor_id=0&key_id=0&repo_id=712910675'/>
          </div>
          <div className='sliderInbox'>
            <img src='https://github-production-user-asset-6210df.s3.amazonaws.com/78317343/354678683-8550d74a-2f7a-4462-9db6-9455672aaf77.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAVCODYLSA53PQK4ZA%2F20240803%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20240803T054958Z&X-Amz-Expires=300&X-Amz-Signature=768a8862291cb61b0bc3df6985990099cd007804e685794369456c1408f36870&X-Amz-SignedHeaders=host&actor_id=0&key_id=0&repo_id=712910675'/>
          </div>
          <div className='sliderInbox'>
            <img src='https://github-production-user-asset-6210df.s3.amazonaws.com/78317343/354678700-03d3ab9d-cfb8-4142-acef-13e81f790eda.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAVCODYLSA53PQK4ZA%2F20240803%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20240803T055154Z&X-Amz-Expires=300&X-Amz-Signature=b71c733d1a31f945d8f635e6246d8ff9b9f3575220fa4affa97dd6e36ec4363b&X-Amz-SignedHeaders=host&actor_id=0&key_id=0&repo_id=712910675'/>
          </div>
          
        </Slider>
      </SliderStyle>
      <DescriptionStyle>
        <p className='subject'>📸 Moa Moa</p>
        <b style={{fontSize:'2vh', fontWeight:'700'}}>1차 스프린트</b>
        <p>2023.09.01 ~ 2023.09.30(백엔드 2, 프론트 2, PM 1, 디자이너 1)</p>
        <b>GDG Campus Korea x Whatever 메이커톤 3등 수상</b>
        <p>Google Developer Group에서 주관한 6주 프로덕트 메이커 챌린지에 참여하여 진행한 첫 팀프로젝트 입니다. 이 서비스는 랜덤으로 포즈를 추천받아 사진을 찍은 후 공유 사진첩에서 추억을 간직할 수 있는 서비스입니다.</p>
        <p>무한스크롤, 탭, 이미지 업로드 처리 등을 구현하였습니다. </p>
        <br/>
        <br/>
        <b style={{fontSize:'2vh', fontWeight:'700'}}>2차 출시</b>
        <p>2023.11.01 ~ 2024.01.02(백엔드 2, 프론트 2, PM 1, 디자이너 1)</p>
        <b>인하대학교 창업지원단 아랩엑셀러레이팅 예비창업트랙 대상 수상</b>
        <p>Google Developer Group에서 주관한 6주 프로덕트 메이커 챌린지에 참여하여 진행한 첫 팀프로젝트 입니다. 이 서비스는 랜덤으로 포즈를 추천받아 사진을 찍은 후 공유 사진첩에서 추억을 간직할 수 있는 서비스입니다.</p>
        <p>무한스크롤, 탭, 이미지 업로드 처리 등을 구현하였습니다. </p>

      </DescriptionStyle>
    </ProjectStyle>
    </>
    

    
  );
};

export default ProjectC;

const ProjectStyle = styled.section`
  background-color: white;
  width: 70%;
  height: 50vh;
  border-radius: 2vh;
  margin-top: 10vh; 
  display: flex;
  justify-content: center;
  align-items: center;
  
`;
const SliderStyle = styled.div`
  width: 40%;
  margin-left: 3vh;
  .slick-prev:before,
  .slick-next:before {
    color: #5a7ae3; // 화살표 색상 설정
  }

  .slick-arrow {
    z-index: 1;
  }
  .sliderInbox{
    display: flex;
    justify-content: center;
    align-items: center;
  }
  
  img{
    height: 40vh;
    margin: auto;
    &.wide{
      height: 20vh;
      margin: auto;
    }
  }
`

const DescriptionStyle = styled.div`
  display: flex;
  flex-direction: column;
  width: 60%;
  padding: 7vh;
  .subject{
    font-size: 3vh;
    font-weight: 700;
    font-family:'cursive';
  }

    p{
      font-size: 2vh;
      font-weight: 500;
      font-family:'cursive';
    }
`