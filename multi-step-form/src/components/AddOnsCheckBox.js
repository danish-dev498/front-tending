import React from 'react';
import { CheckBoxContainer, CheckBoxInput } from './styles/AddOnsStyles';
import { Container, Text } from '../GlobalStyles';
import { AddOnsData } from '../data/AddOnsData';
const AddOnsCheckBox = ({ checked, text, content, price, boxDataHandler }) => {
  console.log('asdfasdfasdfsdfasdfdsafsd', price);
  const handleSelectBox = () => {
    boxDataHandler(text, price);

    console.log('asfjasdfljasdflasdkf', price);
  };

  return (
    <>
      <Container mt='15px'>
        <CheckBoxContainer onClick={() => handleSelectBox(text)}>
          <Container
            flex='row'
            justifyContent='space-between'
            alignItem='center'
            padding='15px'
          >
            <Container flex='row' gap='14px'>
              <CheckBoxInput type='checkbox' />
              <Container>
                <Text color='#193d68' bold='2500'>
                  {text}
                </Text>
                <Text size='11px'>{content}</Text>
              </Container>
            </Container>

            <Text color='hsl(243, 100%, 62%)' size='12px'>
              {price}
            </Text>
          </Container>
        </CheckBoxContainer>

        {/* <CheckBoxContainer>
          <Container
            flex='row'
            justifyContent='space-between'
            alignItem='center'
            padding='15px'
          >
            <Container flex='row' gap='14px'>
              <CheckBoxInput type='checkbox' />
              <Container>
                <Text color='#193d68' bold='2500'>
                  Large Storage
                </Text>
                <Text size='11px'>Extra on 1TB of cloud save</Text>
              </Container>
            </Container>

            <Text color='hsl(243, 100%, 62%)' size='12px'>
              +$10/yr
            </Text>
          </Container>
        </CheckBoxContainer>
        <CheckBoxContainer>
          <Container
            flex='row'
            justifyContent='space-between'
            alignItem='center'
            padding='15px'
          >
            <Container flex='row' gap='14px'>
              <CheckBoxInput type='checkbox' />
              <Container>
                <Text color='#193d68' bold='2500'>
                  Customizable Profile
                </Text>
                <Text size='11px'>Custome theme on your profile</Text>
              </Container>
            </Container>

            <Text color='hsl(243, 100%, 62%)' size='12px'>
              +$10/yr
            </Text>
          </Container>
        </CheckBoxContainer> */}
      </Container>
    </>
  );
};

export default AddOnsCheckBox;
