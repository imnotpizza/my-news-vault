import { Button } from '@/components/atoms/Button';
import Link from 'next/link';
import React from 'react';

export default function HomePage() {
  return (
    <main className="bg-gradient-to-b from-primary/80 to-primary/20 w-screen h-screen">
      <section className="py-10 sm:py-16 lg:py-24">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="grid items-center grid-cols-1 gap-12 lg:grid-cols-2">
            <div>
              {/* 좌->우 애니메이션 */}
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
              {/* 좌->우 애니메이션 */}
              <p className="mt-8 text-base text-black sm:text-xl">
                My News Vault는 원하는 뉴스를 쉽고 빠르게 검색하고, 중요한 기사들을 안전하게
                스크랩하여 보관할 수 있는 뉴스 관리 앱입니다.
                <br /> 키워드 기반 검색, 기사 즐겨찾기, 맞춤형 뉴스 알림 기능을 통해 나만의
                뉴스 아카이브를 만들어보세요.
              </p>
              {/* 좌->우 애니메이션 */}
              <div className="mt-10 sm:flex sm:items-center sm:space-x-8">
                <Link href="/search">
                  <Button>My News Vault 시작하기</Button>
                </Link>
              </div>
            </div>

            <div>
              <img
                className="w-full"
                src="https://cdn.rareblocks.xyz/collection/celebration/images/hero/2/hero-img.png"
                alt=""
              />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
