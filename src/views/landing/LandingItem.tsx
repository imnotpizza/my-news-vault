import React from 'react';
import { styled } from 'styled-components';
import LandingTitle from './LandingTitle';
import LandingContents from './LandingContents';
import LandingImage from './LandingImage';

const Container = styled.div`
  height: 800px;
  width: 100%;
  background-color: green;
  margin-bottom: 15rem;
  .contents-box {
    width: 60%;
    height: 100%;
    background-color: pink;
    .title {
      height: 30%;
      background-color: orange;
    }

    .contents {
      height: 70%;
      box-sizing: border-box;
      text-align: center;
      background-color: brown;
    }
  }
  .image-box {
    width: 60%;
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
    <Container className="flex-column flex-center">
      <div className="contents-box">
        <div className="title flex-center">
          <LandingTitle>{title}</LandingTitle>
        </div>
        <div className="contents flex-center">
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
