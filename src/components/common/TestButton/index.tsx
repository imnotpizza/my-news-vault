import React from 'react';
import styled from 'styled-components';

const Button = styled.button`
  width: 6.25rem;
  height: 3.13rem;
`;

const TestButton = () => {
  const [clicked, setClicked] = React.useState(false);

  return (
    <div>
      {clicked && <p>button clicked</p>}
      <Button
        onClick={() => {
          setClicked(!clicked);
        }}
      >
        TestButton
      </Button>
    </div>
  );
};

export default TestButton;
