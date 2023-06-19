import LandingItem from '@/views/landing/LandingItem';
import React from 'react';
import { styled } from 'styled-components';

const Container = styled.div`
  width: 100%;
  height: 100%;
  background-color: blue;
`;

const Page = () => {
  return (
    <Container>
      {/* fefe */}
      <LandingItem
        title="뉴스를 스크랩하고"
        contents={<div>스크랩한 뉴스를 통해 나만의 뉴스를 만들어보세요.</div>}
        imgUrl="/images/landing/landing1.png"
      />
      {/* fefe */}
      <LandingItem
        title="뉴스를 스크랩하고"
        contents="스크랩한 뉴스를 통해 나만의 뉴스를 만들어보세요."
        imgUrl="/images/landing/landing1.png"
      />
      {/* fefe */}
      <LandingItem
        title="뉴스를 스크랩하고"
        contents="스크랩한 뉴스를 통해 나만의 뉴스를 만들어보세요."
        imgUrl="/images/landing/landing1.png"
      />
    </Container>
  );
};

export default Page;
