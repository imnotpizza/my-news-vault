import RootLayout from '@/components/layout';
import { APP_NAME } from '@/constants';
import { contentLayoutStyle, responsive } from '@/styles/responsive';
import LandingContents from '@/views/landing/LandingContents';
import LandingItem from '@/views/landing/LandingItem';
import ToSearchPageButton from '@/views/landing/ToSearchPageButton';
import Image from 'next/image';
import React from 'react';
import { styled } from 'styled-components';

const Container = styled.div`
  min-height: 1000px;
  width: 100%;
  ${contentLayoutStyle};
  margin: 0 auto;
  ${responsive.mobile} {
    min-height: 800px;
  }
  .landing-items {
    & > div:first-child {
      margin-top: 200px;
      ${responsive.mobile} {
        margin-top: 300px;
      }
    }
    & > div {
      margin-bottom: 200px;
      ${responsive.mobile} {
        margin-bottom: 300px;
      }
    }
  }
`;

const FirstContent = styled.div`
  width: 100%;
  height: 80%;
  background-color: blue;
  .logo {
    margin-bottom: 50px;
    width: 500px;
    height: 130px;
    ${responsive.mobile} {
      width: 380px;
      height: 100px;
    }
    background-color: pink;
    & > img {
      width: 100%;
      height: 100%;
    }
  }
  .title {
    margin-bottom: 50px;
  }
  .contents {
    margin-bottom: 50px;
  }
  .to-search-button {
  }
`;

const LandingPage = () => {
  return (
    <RootLayout>
      <Container>
        <FirstContent className="flex-center flex-column">
          <div className="logo">
            <Image width={500} height={200} src="/svg/landing-icon.svg" alt="my news vault" />
          </div>
          <div className="contents">
            <LandingContents>스크랩한 뉴스를 통해 나만의 뉴스를 만들어보세요.</LandingContents>
          </div>
          <div className="to-search-button">
            <ToSearchPageButton />
          </div>
        </FirstContent>
        <div className="landing-items">
          <LandingItem
            title="편리한 검색 기능"
            contents={
              <p>
                지금 당신이 원하는 뉴스, 검색만으로 끝!
                <br /> 새로운 정보의 세계로 떠나보세요. <br /> {APP_NAME}, 최고의 뉴스 검색
                사이트입니다.
              </p>
            }
            imgUrl="/gif/landing-page-svg1.gif"
          />
          <LandingItem
            title="좋아하는 뉴스 스크랩"
            contents={
              <p>
                뉴스 스크랩, 클릭 한 번으로 모아보세요!
                <br /> {APP_NAME}이 제공하는 간편한 스크랩 기능으로 <br />
                소중한 뉴스를 저장하고 언제든지 다시 확인해보세요.
              </p>
            }
            imgUrl="/gif/landing-page-svg2.gif"
          />
          <LandingItem
            title="스크랩 목록 한번에 확인"
            contents={
              <p>
                스크랩 목록에서 당신의 세상을 만나세요.
                <br /> {APP_NAME}의 스크랩 목록에서 관심있는 뉴스를 확인하고,
                <br /> 소중한 정보를 쉽게 찾아보세요.
              </p>
            }
            imgUrl="/gif/landing-page-svg3.gif"
          />
        </div>
      </Container>
    </RootLayout>
  );
};

export default LandingPage;
