import React from 'react';
import { styled } from 'styled-components';
import LandingTitle from './LandingTitle';
import LandingContents from './LandingContents';
import LandingImage from './LandingImage';

const Container = styled.div`
  height: 800px;
  background-color: green;
  margin-bottom: 15rem;
  .contents-box {
    width: 50%;
    height: 100%;
    background-color: pink;
    .title {
      height: 20%;
      background-color: orange;
    }

    .contents {
      height: 80%;
      box-sizing: border-box;
      padding-top: 20%;
      background-color: brown;
    }
  }
  .image-box {
    width: 50%;
    height: 100%;
    background-color: purple;
    .image {
    }
  }
`;

const LandingItem = ({
  title,
  contents,
  imgUrl,
}: {
  title: string;
  contents: React.ReactElement | string;
  imgUrl: string;
}) => {
  return (
    <Container className="flex-center">
      <div className="contents-box flex-column">
        <div className="title flex-row align-center">
          <LandingTitle>{title}</LandingTitle>
        </div>
        <div className="contents">
          <LandingContents>{contents}</LandingContents>
        </div>
      </div>
      <div className="image-box flex-center"><LandingImage
        title={title}
        imgUrl={imgUrl}
      /></div>
    </Container>
  );
};

export default LandingItem;
