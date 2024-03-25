import React, { useEffect, useState } from 'react';
import { BoxContainer, PlanImage } from './styles/SelectPlanStyled';
import { Container, Text } from '../GlobalStyles';

const PlanBox = ({ icons, text, price, checked, id, onClick, activeBox }) => {
  const handleSelectBox = (text, price, id) => {
    onClick(text, price, id);
  };

  return (
    <div>
      <BoxContainer
        active={activeBox === id ? 'active' : ''}
        key={id}
        // activeBox={activeBox}
        onClick={() => handleSelectBox(text, price, id)}
      >
        <PlanImage src={icons} />
        <Container gap='3px'>
          <Text color='#193d68' weight='bold'>
            {text}
          </Text>
          <Text size='12px'>{price}</Text>
          {checked ? (
            <Text size='10px' color='#193d68' weight='lighter'>
              2 months free
            </Text>
          ) : (
            ''
          )}
        </Container>
      </BoxContainer>
    </div>
  );
};

export default PlanBox;
