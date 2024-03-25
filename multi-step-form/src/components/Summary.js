import React, { useState } from 'react';
import { InfoContainer } from './styles/PersonalInfoStyles.js';
import { Container, Text } from '../GlobalStyles.js';
import PlanBox from './PlanBox.js';
import PriceToggle from './PriceToggle.js';
import FinalBox from './FinalBox.js';
const iconAdvan = '/assets/images/icon-advanced.svg';
const iconArcade = '/assets/images/icon-arcade.svg';
const iconPro = '/assets/images/icon-pro.svg';

const Summary = () => {
  const [checked, setChecked] = useState(false);

  const handleChange = (value) => {
    setChecked(value);
  };

  return (
    <div>
      <InfoContainer>
        <Container>
          <Text color='#193d68' size='34px' mb='9px' weight='bold'>
            Funishing up
          </Text>
          <Text inverse>
            Double-Check everythings looks OK before confirming.
          </Text>

          <FinalBox />
        </Container>
      </InfoContainer>
    </div>
  );
};

export default Summary;
