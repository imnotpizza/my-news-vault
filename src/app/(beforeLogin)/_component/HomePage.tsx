'use client';

import { APP_NAME } from '@/constants';
import LandingContents from '@/views/landing/LandingContents';
import LandingItem from '@/views/landing/LandingItem';
import ToSearchPageButton from '@/views/landing/ToSearchPageButton';
import Image from 'next/image';
import React from 'react';

function HomePage() {
  return (
    <div className="w-full min-h-[1000px] mx-auto px-4 md:min-h-[800px] md:w-9/10">
      <div className="flex flex-col items-center justify-center w-full h-[900px]">
        <div className="mb-12 w-[500px] h-[130px] md:w-4/5">
          <Image
            width={500}
            height={200}
            src="/svg/landing-icon.svg"
            alt="my news vault"
            className="w-full h-full"
          />
        </div>
        <div className="mb-12">
          <LandingContents>스크랩한 뉴스를 통해 나만의 뉴스를 만들어보세요.</LandingContents>
        </div>
        <div>
          <ToSearchPageButton />
        </div>
      </div>
      <div className="landing-items">
        <div className="mb-[500px] md:mb-[300px]">
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
        </div>
        <div className="mb-[500px] md:mb-[300px]">
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
        </div>
        <div className="mb-[150px] md:mb-[100px]">
          <LandingItem
            title="스크랩 목록 한번에 확인"
            contents={
              <p>
                손쉽게 정보를 확인하세요.
                <br /> 스크랩 목록에서 관심있는 뉴스를 확인하고,
                <br /> 소중한 정보를 쉽게 찾아보세요.
              </p>
            }
            imgUrl="/gif/landing-page-svg3.gif"
          />
        </div>
      </div>
      <div className="w-full h-px" />
    </div>
  );
}

export default HomePage;
