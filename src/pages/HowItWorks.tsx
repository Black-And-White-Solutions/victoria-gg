import React, { VoidFunctionComponent } from 'react';
import styled from 'styled-components';

const Text = styled.div`
  display: flex;
  height: calc(100vh - 5rem);
  align-items: center;
  justify-content: center;
  font-size: 2rem;
  font-weight: 700;
`;

const HowItWorks: VoidFunctionComponent = () => {
  return <Text>How It Works</Text>;
};

export default HowItWorks;
