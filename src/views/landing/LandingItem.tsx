import React, { useState } from 'react';
import useFadeUIEffect from '@/hooks/useFadeUIEffect';
import { css, keyframes, styled } from 'styled-components';
import LandingTitle from './LandingTitle';
import LandingContents from './LandingContents';
import LandingImage from './LandingImage';

const fadeIn = keyframes`
  0% {
    opacity: 0;
    transform: translateY(20px);
  };
  100% {
    opacity: 1;
    transform: translateY(0);
  };
`;

const animation = css`
  animation: ${fadeIn} 1s ease-in-out;
`;

const Container = styled.div<{ isDetected: boolean }>`
  height: 800px;
  width: 100%;
  background-color: green;
  margin-bottom: 15rem;
  ${(p) => p.isDetected && animation};
  .contents-box {
    width: 100%;
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
    width: 100%;
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
  const [isDetected, setIsDetected] = useState(false);
  const { ref } = useFadeUIEffect(() => setIsDetected(true));

  return (
    <Container className="flex-column flex-center" ref={ref} isDetected={isDetected}>
      <div className="contents-box">
        <div className="title flex-center">
          <LandingTitle>{title}</LandingTitle>
        </div>
        <div className="contents flex-center">
          <LandingContents>{contents}</LandingContents>
        </div>
      </div>
      <div className="image-box flex-center">
        <LandingImage title={title} imgUrl={imgUrl} />
      </div>
    </Container>
  );
};

export default LandingItem;
