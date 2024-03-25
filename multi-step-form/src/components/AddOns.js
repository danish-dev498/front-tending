import React, { useState } from 'react';
import {
  Heading,
  InfoContainer,
  MainHeading,
  StyledButton,
  StyledContaint,
  StyledForm,
  StyledInput,
  StyledLabel,
} from './styles/PersonalInfoStyles.js';
import { Container, Text } from '../GlobalStyles.js';
import AddOnsCheckBox from './AddOnsCheckBox.js';
import { AddOnsData } from '../data/AddOnsData.js';

const AddOns = ({ checked, handleFormData, handleAddOne }) => {
  const [enabled, setEnabled] = React.useState(false);
  const [activeBox, setActiveBox] = useState(0);
  // const [boxData, setBoxData] = useState([]);

  const onClickHandler = (text, price) => {
    handleAddOne(text, price);
  };
  return (
    <>
      <InfoContainer>
        <Container mb='9px'>
          <Text color='#193d68' size='34px' mb='9px' weight='bold'>
            Pick add-ons
          </Text>
          <Text inverse>Add-ons help enhance your gaming experience</Text>
        </Container>
        {AddOnsData.map((data) => (
          <AddOnsCheckBox
            checked={checked}
            text={data.text}
            content={data.content}
            price={checked ? data.price.yearly : data.price.monthly}
            boxDataHandler={onClickHandler}
          />
        ))}
      </InfoContainer>
    </>
  );
};

export default AddOns;
