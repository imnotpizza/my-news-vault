import Palette from '@/styles/palette';
import { TNewsItem } from '@/types';
import { styled } from 'styled-components';

const Container = styled.div`
  width: 0.75rem;
  height: 0.75rem;
  position: relative;
  z-index: 100;
  .circle {
    width: 1.88rem;
    height: 1.88rem;
    position: absolute;
    opacity: 0;
    border-radius: 50%;
    top: 50%;
    left: 50%;
    z-index: 1;
    transform: translate(-50%, -43%);
    background-color: ${(p) => p.theme.Blue.Blue_M};
  }
  &:hover {
    .circle {
      opacity: 0.3;
    }
  }
`;

const Svg = styled.svg`
  position: relative;
  z-index: 100;
`;

// prettier-ignore
const filledD = 'M0 14V1.5C0 1.08333 0.145833 0.729167 0.4375 0.4375C0.729167 0.145833 1.08333 0 1.5 0H8.5C8.91667 0 9.27083 0.145833 9.5625 0.4375C9.85417 0.729167 10 1.08333 10 1.5V14L5 12L0 14Z';
// prettier-ignore
const blankD = 'M0 14V1.5C0 1.0875 0.146875 0.734376 0.440625 0.440626C0.734375 0.146876 1.0875 0 1.5 0H8.5C8.9125 0 9.26562 0.146876 9.55937 0.440626C9.85312 0.734376 10 1.0875 10 1.5V14L5 12L0 14ZM1.5 11.7708L5 10.375L8.5 11.7708V1.5H1.5V11.7708Z';

const ScrapIcon = ({ isScrapped }: { isScrapped: TNewsItem['isScrapped'] }) => {
  return (
    <Container>
      <Svg viewBox="0 0 10 14" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d={isScrapped ? filledD : blankD}
          fill={isScrapped ? Palette.Blue.Default : Palette.Blue.Default}
        />
      </Svg>
      <div className="circle" />
    </Container>
  );
};

export default ScrapIcon;
