import React, { useState } from 'react';
import useFadeUIEffect from '@/hooks/useFadeUIEffect';
import { responsive } from '@/styles/responsive';
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

const Container = styled.div<{ detected: 1 | 0 }>`
  height: 800px;
  width: 100%;
  ${responsive.mobile} {
    height: 650px;
  }
  ${(p) => (p.detected ? animation : undefined)};
  .contents-box {
    width: 100%;
    height: 100%;
    .title {
      height: 30%;
    }

    .contents {
      height: 70%;
      box-sizing: border-box;
      text-align: center;
    }
  }
  .image-box {
    width: 100%;
    height: 100%;
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
  const [detected, setDetected] = useState(false);
  const { ref } = useFadeUIEffect(() => setDetected(true));

  return (
    <Container className="flex-column flex-center" ref={ref} detected={detected ? 1 : 0}>
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
