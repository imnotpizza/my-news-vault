import { APP_NAME } from '@/constants';
import LandingContents from '@/views/landing/LandingContents';
import LandingItem from '@/views/landing/LandingItem';
import ToSearchPageButton from '@/views/landing/ToSearchPageButton';
import React from 'react';
import { styled } from 'styled-components';

const Container = styled.div`
  width: 100%;
  height: 100%;
  background-color: blue;
`;

const FirstContent = styled.div`
  & > p {

  }
  & > div {

  }
`;

const LandingPage = () => {
  return (
    <Container>
      {/* fefe */}
      <LandingItem
        title={APP_NAME}
        contents={
          <FirstContent>
            <LandingContents>스크랩한 뉴스를 통해 나만의 뉴스를 만들어보세요.</LandingContents>
            <ToSearchPageButton />
          </FirstContent>
        }
        imgUrl="/images/landing/landing1.png"
      />
      {/* fefe */}
      <LandingItem
        title="편리한 검색 기능"
        contents={`지금 당신이 원하는 뉴스, 검색만으로 끝! 새로운 정보의 세계로 떠나보세요. ${APP_NAME}, 최고의 뉴스 검색 사이트입니다.`}
        imgUrl="/images/landing/landing1.png"
      />
      {/* fefe */}
      <LandingItem
        title="좋아하는 뉴스 스크랩"
        contents="뉴스 스크랩, 한 번에 모아보세요! 다음 앱이 제공하는 간편한 스크랩 기능으로 소중한 뉴스를 저장하고 언제든지 다시 확인해보세요."
        imgUrl="/images/landing/landing1.png"
      />
      <LandingItem
        title="스크랩 목록 한번에 확인"
        contents="스크랩 목록에서 당신의 세상을 만나세요. 다음 앱의 스크랩 목록 기능을 통해 관심있는 뉴스를 한 눈에 확인하고, 소중한 정보를 쉽게 찾아보세요."
        imgUrl="/images/landing/landing1.png"
      />
    </Container>
  );
};

export default LandingPage;
