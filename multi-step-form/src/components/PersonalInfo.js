import React from 'react';
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

const PersonalInfo = ({ name, email, phone, handleFormData }) => {
  console.log('heyyyyy name', name);
  return (
    <>
      <InfoContainer>
        <Container>
          <Text color='#193d68' size='34px' mb='9px' weight='bold'>
            Personal Info
          </Text>
          <Text inverse>
            Please provide your name email address, and phone number.
          </Text>
        </Container>

        <StyledForm>
          <StyledLabel>Name</StyledLabel>
          <StyledInput
            type='text'
            value={name}
            name='name'
            onChange={(e) => handleFormData({ name: e.target.value })}
          />
          <StyledLabel>Email Address</StyledLabel>
          <StyledInput
            type='email'
            value={email}
            name='email'
            onChange={(e) => handleFormData({ email: e.target.value })}
          />
          <StyledLabel>Phone Number</StyledLabel>
          <StyledInput
            type='phone'
            value={phone}
            name='phone'
            onChange={(e) => handleFormData({ phone: e.target.value })}
          />

          {/* <StyledButton type='submit'>Login</StyledButton> */}
        </StyledForm>
      </InfoContainer>
    </>
  );
};

export default PersonalInfo;
