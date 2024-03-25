import React, { useState } from 'react';
import { InfoContainer } from './styles/PersonalInfoStyles.js';
import { Container, Text } from '../GlobalStyles.js';
import PlanBox from './PlanBox.js';
import PriceToggle from './PriceToggle.js';
import { SelectPlanData } from '../data/SelectPlanData.js';

const SelectPlan = ({ handleFormData, handlePriceToggleMain, checked }) => {
  const [activeBox, setActiveBox] = useState(0);
  // const [checked, setChecked] = useState(false);

  const handlePriceToggle = (value) => {
    handlePriceToggleMain(value);
  };

  const onClick = (plan, price, selectedId) => {
    setActiveBox(selectedId);
    handleFormData({ plan: plan, price: price });
  };

  return (
    <div>
      <InfoContainer>
        <Container>
          <Text color='#193d68' size='34px' mb='9px' weight='bold'>
            Select your plane
          </Text>
          <Text inverse>
            You have the option of monthaly or yearly billing.
          </Text>
        </Container>
        <Container gap='30px'>
          <Container flex='row' gap='15px'>
            {SelectPlanData.map((data) => (
              <PlanBox
                key={data.id}
                icons={data.icons}
                text={data.text}
                price={checked ? data.price.yearly : data.price.monthly}
                checked={checked}
                onClick={onClick}
                activeBox={activeBox}
                id={data.id}
              />
            ))}
          </Container>
          <PriceToggle handlePriceChange={handlePriceToggle} />
        </Container>
      </InfoContainer>
    </div>
  );
};

export default SelectPlan;
