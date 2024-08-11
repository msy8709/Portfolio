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
      <ProjectStyle style={{height: '55vh'}}>
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
          <a href='https://github.com/msy8709/AGROUNDS/blob/main/frontend/aground_demo/README.md'>github.com/msy8709/AGROUNDS</a>
          <p>2024.06.01 ~ 2024.08.31(백엔드 2, 프론트 1)</p>
          <b style={{fontSize:'2vh'}}>정부 예비창업패키지 참여중</b>
          <p>AGROUNDS는 아마추어 축구 커뮤니티의 요구를 반영하여 기획된 서비스로, 리그 관리와 GPS 기반 전술 분석을 통해 팀과 선수가 경기력을 극대화할 수 있도록 지원합니다. 이 프로젝트에서 저는 프론트엔드 개발을 담당했으며, 사용자 경험을 최적화하기 위해 다양한 기술을 활용하고, 복잡한 문제를 팀과 협력하여 해결했습니다.</p>
          
          <b style={{fontSize:'2vh'}}>주요성과</b>
          <p>실시간 GPS 데이터를 기반으로 한 전술 분석 페이지를 구현하면서, Canvas API를 사용하여 경기 중 선수들의 움직임을 시각적으로 표현했습니다. GPS 데이터는 매 0.1초마다 갱신되며, 이를 시각화하는 과정에서 성능 최적화를 위해 requestAnimationFrame을 사용하여 애니메이션의 부드러움을 유지했습니다. </p>
          <b style={{fontSize:'1.9vh'}}>주요기여: GPS 데이터 시각화, 소셜 로그인 연동, 사용자 피드백 반영 및 개선</b>
        </DescriptionStyle>
      </ProjectStyle>

    <ProjectStyle style={{height: '60vh'}}>
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
        <a href='https://github.com/msy8709/Movie_View/tree/main'>github.com/msy8709/Movie_View</a>
        <p>2024.06.29 ~ 2024.07.15(기능별 구현, 팀원 5)</p>
        <b style={{fontSize:'2vh'}}>미니 프로젝트</b>
        <p>MovieView는 사용자들이 영화 정보를 조회하고 리뷰를 작성할 수 있는 웹 서비스로, 팀원들이 맡은 기능별로 역할을 분담하여 개발했습니다. 저는 마이페이지의 프로필 사진 및 닉네임 수정 기능을 담당하며, AWS를 활용한 이미지 관리와 운영체제 간의 호환성 문제를 해결하는 데 주력했습니다.</p>
        <b style={{fontSize:'2vh'}}>주요성과</b>
        <p>1. 초기에는 Next.js 서버의 스토리지에 프로필 사진을 static하게 저장했으나, 서버 부하 문제와 저장 공간의 한계로 인해 장기적인 운영에 어려움이 발생했습니다. 이를 해결하기 위해 AWS S3를 도입하였고 그 결과, 서버 부하는 감소하였고 안정성은 증가하였습니다.</p>
        <p style={{marginTop:'.5vh'}}>2. Mac과 Windows 운영체제 간의 이미지 경로 차이로 인해 발생한 문제를 해결하기 위해, 코드 상단에서 경로 분리 로직을 추가하여 호환성을 확보했습니다.</p>
        <b style={{fontSize:'1.9vh'}}>주요 기여: S3 연동을 통한 프로필 사진 관리, 닉네임 수정 기능 구현, 운영체제 간 경로 문제 해결</b>
      </DescriptionStyle>
    </ProjectStyle>

    <ProjectStyle style={{height: '60vh'}}>
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
          <a href='https://github.com/msy8709/GoldenHour-FE'>github.com/msy8709/GoldenHour-FE</a>
          <p>2024.04.10 ~ 2024.05.13(프론트 2)</p>
          <b style={{fontSize:'2vh'}}>나랑팀해듀오 해커톤 우수상 수상</b>
          <p>Golden Hour Prototype은 사용자가 지각을 방지할 수 있도록 돕는 서비스 "Golden Hour"의 핵심 기능을 실험하기 위해 개발된 프로토타입입니다. 프로젝트에서 저는 프론트엔드 개발을 담당하며, 사용자 경험을 극대화하기 위한 다양한 기술적 도전과 해결을 이끌었습니다.</p>
          <br/>
          <b style={{fontSize:'2vh'}}>주요성과</b>
          <p>앱이 백그라운드 상태로 전환될 때 타이머가 중단되는 문제에 직면했습니다. 이 문제는 타이머가 중단될 경우, 사용자의 준비 시간을 정확하게 측정할 수 없다는 치명적인 오류로 이어졌습니다. 이를 해결하기 위해 Animated API와 setInterval을 사용해 앱이 백그라운드 상태에서의 타이머가 작동을 보장하고 시스템 시간과 연동하여 100% 정확하게 작동하도록 구현하였습니다.</p>
          <b style={{fontSize:'1.9vh'}}>주요 기여: 타이머 기능 구현, 상태 관리 최적화, 사용자 중심의 UI/UX 설계</b>
        </DescriptionStyle>
      </ProjectStyle>

    <ProjectStyle style={{height: '120vh'}}>
      <SliderStyle className='slider-container'  style={{width: '15vw',height: '40vh'}}>
        <Slider {...settings}>
          <div className='sliderInbox'>
            <img src='https://github.com/user-attachments/assets/89b6244c-8584-4b48-b239-17e33a38b8cc'/>
          </div>
          <div className='sliderInbox'>
            <img src='https://github.com/user-attachments/assets/7773edff-1a2f-4e7a-ac66-152071785534'/>
          </div>
          <div className='sliderInbox'>
            <img src='https://github.com/user-attachments/assets/6c082554-e694-43ef-a04f-3cad5bbf99ec'/>
          </div>
          <div className='sliderInbox'>
            <img src='https://github.com/user-attachments/assets/b3f0b698-16c6-4c16-b250-6b8309d14212'/>
          </div>
          <div className='sliderInbox'>
            <img src='https://github.com/user-attachments/assets/9406fd01-658a-4247-ad3d-79d90471335d'/>
          </div>
          <div className='sliderInbox'>
            <img src='https://github.com/user-attachments/assets/ff45a9ef-7936-4994-b1b1-fa3dc42dcded'/>
          </div>
          <div className='sliderInbox'>
            <img src='https://github.com/user-attachments/assets/384e3377-82eb-4da8-a086-57f1a4247eb9'/>
          </div>
          <div className='sliderInbox'>
            <img src='https://github.com/user-attachments/assets/93334d38-66bd-4ee1-9a76-f9fb7e69f2f2'/>
          </div>
          
        </Slider>
      </SliderStyle>
      <DescriptionStyle>
        <p className='subject'>📸 Moa Moa</p>
        <b style={{fontSize:'2vh'}}>프로젝트 개요</b>
        <p>Moa Moa는 사용자가 랜덤으로 포즈를 추천받아 사진을 찍고, 공유 사진첩을 통해 추억을 간직할 수 있는 서비스입니다. 이 프로젝트는 GDG Campus Korea x Whatever 메이커톤에서 3등을 수상하고, 인하대학교 창업지원단 아랩엑셀러레이팅 예비창업트랙에서 대상을 수상했습니다. 프로젝트의 목표는 사용자가 쉽게 사진을 찍고 공유할 수 있는 커뮤니티를 제공하는 것이었습니다.</p>
        {/* <a href='https://github.com/moonKooFE/moamoa_new'>github.com/moonKooFE/moamoa_new</a> */}
        <b style={{fontSize:'2vh', fontWeight:'700'}}>1차 스프린트</b>
        <p>2023.09.01 ~ 2023.09.30(백엔드 2, 프론트 2, PM 1, 디자이너 1)</p>
        <b style={{fontSize:'2vh'}}>GDG Campus Korea x Whatever 메이커톤 3등 수상</b>
        <p>첫 팀 프로젝트로, 6주라는 짧은 기간 동안 기획부터 배포까지 빠르게 진행되었습니다. 이 시기에는 프로젝트의 기본 레이아웃과 주요 기능을 구현하는 데 주력했습니다. </p>
        <br/>
        <b style={{fontSize:'2vh'}}>주요 성과</b>
        <p>사용자가 자신의 프로필 사진과 닉네임을 변경할 수 있는 기능을 구현했습니다. React와 useState 훅을 사용해 사용자 입력을 관리하고, useEffect 훅을 활용해 기존 프로필 정보를 불러오는 로직을 추가했습니다. 이미지 파일은 FileReader를 통해 Base64로 인코딩하여 미리보기를 제공했으며, 파일 크기가 1MB를 초과할 경우 imageCompression 라이브러리를 사용해 이미지 크기를 자동으로 압축했습니다. 이를 통해 대용량 이미지도 안정적으로 서버에 전송하고, 사용자 인터페이스에서 이미지가 빠르게 로드되도록 최적화했습니다.</p>
        <b style={{fontSize:'1.9vh'}}>주요 기여: 레이아웃 및 핵심 기능 구현, 이미지 업로드 최적화</b>
        <br/>
        <b style={{fontSize:'2vh', fontWeight:'700'}}>2차 출시</b>
        <p>2023.11.01 ~ 2024.01.02(백엔드 2, 프론트 2, PM 1, 디자이너 1)</p>
        <b style={{fontSize:'2vh'}}>인하대학교 창업지원단 아랩엑셀러레이팅 예비창업트랙 대상 수상</b>
        <p>두 번째 스프린트에서는 개발의 완성도를 높이고, 실제 사용자 유입에 주력했습니다. 1차로 대학생 커뮤니티에, 2차로 홍대, 신촌 등 대학가에 QR 코드를 배포하여 약 2000명의 사용자를 유치했습니다. Google Analytics를 도입해 사용자 행동을 분석하고, 이를 바탕으로 UI/UX를 지속적으로 개선했습니다. 사용자 피드백을 반영하여 주요 기능의 사용성을 개선하고, 서비스 만족도를 높였습니다.</p>
        <br/>
        <b style={{fontSize:'2vh'}}>주요 성과</b>
        <p>유저에게 서비스를 배포한 뒤, GA를 통해 사용자 행동을 분석했습니다. 분석 결과, 랜덤 포즈 뽑기 기능의 페이지뷰와 체류시간이 높은 반면, 공유 사진첩 생성 수는 단 한 건도 발생하지 않은 것을 확인하였습니다. UI/UX 분석을 통해 처음 사용하는 유저가 공유 사진첩에 접근하기 어렵다는 문제를 확인했습니다. 이에 따라, 공유 사진첩에 접근하기 쉽도록 UI/UX를 개선하였고 홈 화면에서 공유 사진첩으로의 진입 경로를 직관적으로 개선하며 주요 기능으로 강조했습니다. 개선 결과, 공유 사진첩 생성 수가 29건으로 증가하였고 약 2000명의 사용자를 유치할 수 있었습니다.  </p>
        <b style={{fontSize:'1.9vh'}}>주요 기여: 사용자 유입을 위한 기능 개발 및 홍보, UI/UX 개선을 통한 사용자 경험 향상</b>

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
    margin-bottom: 1vh;
  }
  a{
    color: blue;
    margin-bottom: 2vh;
  }

    p{
      font-size: 1.8;
      font-weight: 500;
      font-family:'cursive';
    }
`