import React, { useEffect, useState } from 'react';

import { NumberCircle, NumberSpan } from '../components/styles/StepsStyles.js';
import { Container, MainContainer, Text } from '../GlobalStyles.js';

const Steps = ({ stepCount, step, aboutStep, currentPage }) => {
  return (
    <>
      <MainContainer gap='15px' margin='15px'>
        <NumberCircle active={stepCount - 1 === currentPage ? 'active' : null}>
          <NumberSpan active={stepCount - 1 === currentPage ? 'active' : null}>
            {stepCount}
          </NumberSpan>
        </NumberCircle>
        <Container>
          <Text size='10px' color='hsl(231, 11%, 63%)' mb='2px'>
            {step}
          </Text>
          <Text size='10px' color='hsl(231, 100%, 99%)' spacing='1px'>
            {aboutStep}
          </Text>
        </Container>
      </MainContainer>
    </>
  );
};

export default Steps;
