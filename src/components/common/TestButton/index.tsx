import React from 'react';
import styled from 'styled-components';

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

const Button = styled.button`
  width: 100px;
  height: 50px;
`;

export default TestButton;
