import Palette from '@/styles/palette';

const ScrapIcon = ({ clicked }: { clicked: boolean }) => {
  return (
    <svg viewBox="0 0 10 14" fill="none" xmlns="http://www.w3.org/2000/svg">
      {clicked ? (
        <path
          d="M0 14V1.5C0 1.08333 0.145833 0.729167 0.4375 0.4375C0.729167 0.145833 1.08333 0 1.5 0H8.5C8.91667 0 9.27083 0.145833 9.5625 0.4375C9.85417 0.729167 10 1.08333 10 1.5V14L5 12L0 14Z"
          fill={Palette.Blue.Default}
        />
      ) : (
        <path
          d="M0 14V1.5C0 1.0875 0.146875 0.734376 0.440625 0.440626C0.734375 0.146876 1.0875 0 1.5 0H8.5C8.9125 0 9.26562 0.146876 9.55937 0.440626C9.85312 0.734376 10 1.0875 10 1.5V14L5 12L0 14ZM1.5 11.7708L5 10.375L8.5 11.7708V1.5H1.5V11.7708Z"
          fill={Palette.Blue.Default}
        />
      )}
    </svg>
  );
};

export default ScrapIcon;
