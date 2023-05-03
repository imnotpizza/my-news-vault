import React from 'react';
import styled from 'styled-components';

const Button = styled.button`
  width: 100px;
  height: 50px;
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
