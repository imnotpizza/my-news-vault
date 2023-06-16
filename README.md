<p align="center">
  <img src="https://github.com/imnotpizza/my-news-valut/assets/48155178/82f4ce06-462e-4ec0-8d9d-b5ec518d4095" width="300" height="300">
</p>
<h1 align="center">Welcome to MYNEWSVAULT 👋</h1>
<p>
  <img alt="Version" src="https://img.shields.io/badge/version-0.1.0-blue.svg?cacheSeconds=2592000" />
  <a href="#" target="_blank">
    <img alt="License: MIT License" src="https://img.shields.io/badge/License-MIT License-yellow.svg" />
  </a>
</p>


### 🏠 [사이트 방문](https://www.mynwsvault.com/)

> 신속한 뉴스 검색과 편리한 스크랩 기능을 갖춘 앱으로 최신 뉴스를 손쉽게 관리하세요.

## 프로젝트 소개
Bing News Search API 를 사용한 뉴스검색, 스크랩 기능을 담고있는 프로젝트입니다.<br>
저의 전반적인 프로젝트 세팅, 코딩 스타일 등을 검토하는 용도로 봐주시면 감사하겠습니다.

## 개발 기간
2023.05.12 ~ 현재

## 기술스택
<span>
  <img src="https://img.shields.io/badge/Next.js-000000?style=flat-square&logo=nextdotjs&logoColor=white"/>
  <img src="https://img.shields.io/badge/TypeScript-3178C6?style=flat-square&logo=TypeScript&logoColor=white"/>
  <img src="https://img.shields.io/badge/styledcomponents-DB7093?style=flat-square&logo=styledcomponents&logoColor=white"/>
  <img src="https://img.shields.io/badge/React Query-FF4154?style=flat-square&logo=reactquery&logoColor=white"/>
  <img src="https://img.shields.io/badge/jest-C21325?style=flat-square&logo=jest&logoColor=white"/>
  <img src="https://img.shields.io/badge/Testing Library-E33332?style=flat-square&logo=testinglibrary&logoColor=white"/>
  <img src="https://img.shields.io/badge/Firebase-white?style=flat-square&logo=firebase&logoColor=yellow"/>
</span>

## 칸반 보드
[칸반 보드](https://github.com/users/imnotpizza/projects/1)

## 주요 기능
1. 뉴스기사 검색결과
2. 뉴스기사 스크랩, 스크랩 목록에서 열람
3. 스크롤 시 데이터 추가 로드
4. SEO 관련 작업
  - Google Console에 등록하여 검색결과에 노출되도록 하였습니다.
  - 오픈그래프를 적용하여 링크 전달시 컨텐츠가 나오도록 하였습니다.

## 컴포넌트 구조
![구조 스크랜샷](https://github.com/imnotpizza/my-news-vault/assets/48155178/0e4949b8-2f6f-4eb6-91cd-9e00ebfacb50)


## 주안점
1. 코드 품질 [고민 필요]
   - 선언형 작성
   - 단일책임원칙, 순수함수 사용 등
   - presesnter-viewer 패턴 사용

2. custom hooks의 사용
   - 주요 기능들을 custom hooks로 추상화하여 의존성 분리, 재사용성을 고려하였습니다.

3. react-query를 데이터 캐시 기능을 사용하여 불필요한 api호출 방지를 최소화하였습니다.
   - 검색페이지→스크랩페이지→이전페이지로 이동시 이전데이터를 그대로 유지하게 하였습니다.
   - 스크랩데이터의 경우 페이지 진입시 prefetch하여 초기화, 스크랩 추가/삭제시 캐시를 갱신하는 방식으로 단 한번만 호출하게 하였습니다.

## Author
👤 **imnotpizza**

* Website: https://github.com/imnotpizza
* Github: [@imnotpizza](https://github.com/imnotpizza)

***
_This README was generated with ❤️ by [readme-md-generator](https://github.com/kefranabg/readme-md-generator)_
