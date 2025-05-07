import { FadeInAnimContainer } from '@/components/atoms/Animation';
import { Button } from '@/components/atoms/Button';
import Link from 'next/link';
import React from 'react';

export default function LandingPageTemplate() {
  return (
    <>
      <main className="bg-gradient-to-b from-primary/80 to-primary/20 w-screen h-auto">
        <section className="py-10 sm:py-16 lg:py-24">
          <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
            <div className="grid items-center grid-cols-1 gap-12 lg:grid-cols-2">
              <div>
                {/* 좌->우 애니메이션 */}
                <FadeInAnimContainer type="left-right">
                  <div className="flex flex-col gap-4">
                    <h1 className="text-4xl font-bold text-black sm:text-6xl lg:text-7xl">
                      <span className="">My News Vault</span>
                    </h1>
                    <div className="relative inline-flex">
                      <span className="absolute inset-x-0 bottom-0 border-b-[30px]"></span>
                      {/* 좌-우 형광펜 애니메이션 */}
                      <h3 className="relative text-2xl font-bold text-black sm:text-4xl lg:text-4xl bg-[#4ADE80]">
                        빠르게 만나는 신선한 뉴스
                      </h3>
                    </div>
                  </div>
                </FadeInAnimContainer>
                {/* 좌->우 애니메이션 */}
                <FadeInAnimContainer type="left-right" delay={0.2}>
                  <p className="mt-8 text-base text-black sm:text-xl">
                    My News Vault는 원하는 뉴스를 쉽고 빠르게 검색하고, 중요한 기사들을
                    안전하게 스크랩하여 보관할 수 있는 뉴스 관리 앱입니다.
                    <br /> 키워드 기반 검색, 기사 즐겨찾기, 맞춤형 뉴스 알림 기능을 통해 나만의
                    뉴스 아카이브를 만들어보세요.
                  </p>
                  {/* 좌->우 애니메이션 */}
                  <div className="mt-10 sm:flex sm:items-center sm:space-x-8">
                    <Link href="/search">
                      <Button>My News Vault 시작하기</Button>
                    </Link>
                  </div>
                </FadeInAnimContainer>
              </div>

              <FadeInAnimContainer type="right-left">
                <div>
                  <img
                    className="w-full"
                    src="https://cdn.rareblocks.xyz/collection/celebration/images/hero/2/hero-img.png"
                    alt=""
                  />
                </div>
              </FadeInAnimContainer>
            </div>
          </div>
        </section>
        {/* 뉴스검색 기능 설명 */}
        <section className="py-10 sm:py-16 lg:py-24">
          <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
            <div className="grid items-center grid-cols-1 gap-12 lg:grid-cols-2">
              <FadeInAnimContainer type="left-right">
                <div className="flex flex-col gap-4">
                  <h2 className="text-3xl font-bold text-black sm:text-5xl">
                    원하는 뉴스를 손쉽게 검색하세요
                  </h2>
                  <p className="mt-4 text-lg text-gray-700">
                    키워드 기반의 검색 기능으로 최신 뉴스를 빠르게 찾을 수 있습니다.
                    <br />
                    기사 제목, 내용, 날짜 필터 등 다양한 조건으로 원하는 정보를 정확하게
                    찾아보세요.
                  </p>
                </div>
              </FadeInAnimContainer>

              <FadeInAnimContainer type="right-left">
                <div className="w-full">
                  <img
                    src="/images/search-demo.png"
                    alt="뉴스 검색 데모 이미지"
                    className="w-full rounded-xl shadow-md"
                  />
                </div>
              </FadeInAnimContainer>
            </div>
          </div>
        </section>
        {/* 스크랩 추가 및 스크랩 열람 추가 */}
        <section className="py-10 sm:py-16 lg:py-24">
          <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
            <div className="grid items-center grid-cols-1 gap-12 lg:grid-cols-2">
              <FadeInAnimContainer type="left-right">
                <div className="w-full">
                  <img
                    src="/images/scrap-demo.png"
                    alt="스크랩 기능 데모 이미지"
                    className="w-full rounded-xl shadow-md"
                  />
                </div>
              </FadeInAnimContainer>

              <FadeInAnimContainer type="right-left">
                <div className="flex flex-col gap-4">
                  <h2 className="text-3xl font-bold text-black sm:text-5xl">
                    중요한 뉴스는 스크랩하고 보관하세요
                  </h2>
                  <p className="mt-4 text-lg text-gray-700">
                    관심 있는 뉴스를 스크랩하여 내 뉴스 아카이브에 보관할 수 있습니다.
                    <br />
                    스크랩한 기사들은 언제든지 열람할 수 있어, 놓치지 않고 확인 가능합니다.
                  </p>
                </div>
              </FadeInAnimContainer>
            </div>
          </div>
        </section>
      </main>
      <footer className="py-10 bg-primary/10 border-t border-gray-200">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8 text-center">
          <p className="text-sm text-gray-600">
            ⓒ {new Date().getFullYear()} My News Vault. All rights reserved.
          </p>
          <div className="mt-2 flex justify-center gap-4 text-sm text-gray-600">
            <a
              href="mailto:bobin6972@gmail.com"
              className="hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              📧 bobin6972@gmail.com
            </a>
            <span>|</span>
            <a
              href="https://github.com/imnotpizza"
              className="hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              💻 GitHub
            </a>
          </div>
        </div>
      </footer>
    </>
  );
}
