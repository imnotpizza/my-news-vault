<p align="center">
  <img src="https://github.com/imnotpizza/my-news-vault/blob/develop/public/img/applogo.png" width="200" height="200">
</p>
<h1 align="center">Welcome to MYNEWSVAULT 👋</h1>
<p>
  <img alt="Version" src="https://img.shields.io/badge/version-1.3.0-blue.svg?cacheSeconds=2592000" />
  <a href="#" target="_blank">
    <img alt="License: MIT License" src="https://img.shields.io/badge/License-MIT License-yellow.svg" />
  </a>
</p>


### 🏠 [사이트 방문](https://www.mynwsvault.com/)

> 스크랩한 뉴스를 통해 나만의 뉴스를 만들어보세요.

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
todo 리스트, 작업 현황, 트러블슈팅 및 히스토리 문서화는 전부 여기서 관리하고 있습니다.
[칸반 보드](https://github.com/users/imnotpizza/projects/1)

## 주요 기능
1. 뉴스기사 검색결과
2. 뉴스기사 스크랩, 스크랩 목록에서 열람
3. 스크롤 시 데이터 추가 로드
4. SEO 관련 작업
  - Google Console에 등록하여 검색결과에 노출되도록 하였습니다.
  - 오픈그래프를 적용하여 링크 전달시 컨텐츠가 나오도록 하였습니다.

## 컴포넌트 구조
<p align="center">
  <img src="https://github.com/imnotpizza/my-news-vault/blob/feature/readme-update/docs/%EA%B5%AC%EC%A1%B0%20%EC%8A%A4%ED%81%AC%EB%9E%9C%EC%83%B7.png">
</p>

## 주안점
1. 코드 품질에 대한 고민
   - 선언형 컴포넌트를 최대한 활용하여 가독성, 직관성을 높였습니다.
   - 단일책임원칙, 순수함수 사용 등으로 책임의 확실한 분리, 코드의 재사용성을 높였습니다.
   - presesnter-viewer 패턴 사용하여 UI 로직과 비즈니스 로직을 분리하였습니다.

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
