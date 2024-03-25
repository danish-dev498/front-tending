import React, { useState } from 'react';
import sidebarM from '.';
import SelectPlan from './components/SelectPlan';
import PersonalInfo from './components/PersonalInfo';
import styled from 'styled-components';
import GlobalStyles, {
  BodyContainer,
  ButtonContainer,
  Container,
  ImgContainer,
  MainContainer,
  Wrapper,
} from './GlobalStyles';
import { StyledButton } from './components/styles/PersonalInfoStyles';
import Steps from './components/Steps';
import AddOns from './components/AddOns';
import Summary from './components/Summary';
import useFormHooks from './hooks/useFormHooks';
const sidebarImage = '../asset/images/bg-sidebar-desktop.svg';

export const planOptions = {
  Arcade: {
    monthly: 9,
    yearly: 90,
  },
  Advanced: {
    monthly: 12,
    yearly: 120,
  },
  Pro: {
    monthly: 15,
    yearly: 150,
  },
  onlineServices: {
    monthly: 1,
    yearly: 10,
  },
  largerStorage: {
    monthly: 2,
    yearly: 20,
  },
  customizableProfile: {
    monthly: 2,
    yearly: 20,
  },
};

const stepOption = [
  {
    id: 1,
    step: 'STEP 1',
    aboutStep: 'YOUR INFO',
  },
  {
    id: 2,
    step: 'STEP 2',
    aboutStep: 'SELECT PLAN',
  },
  {
    id: 3,
    step: 'STEP 3',
    aboutStep: 'ADD-ONS',
  },
  {
    id: 4,
    step: 'STEP 4',
    aboutStep: 'SUMMARY',
  },
];

const intialFormdata = {
  name: '',
  email: '',
  phone: '',
  plan: 'Arcade',
  price: '',
  addOns: [],
  addOnsPrice: [],
  // planLength: false,
  // isLargerStorage: false,
  // isCustomizableProfile: false,
  // isOnlineService: false,
};

const App = () => {
  const [formData, setFormData] = useState(intialFormdata);
  const [checked, setChecked] = useState(false);

  const handleFormData = (updatedInput) => {
    setFormData((prev) => ({ ...prev, ...updatedInput }));
  };

  const { currentPage, previousPage, nextPage } = useFormHooks(
    stepOption.length
  );

  const handleNext = () => {
    nextPage();
  };

  const handlePrevious = () => {
    previousPage();
  };

  const handlePriceToggleMain = (value) => {
    setChecked(value);
  };

  const handleAddOne = (text, price) => {
    // setFormData((prev) => ({ ...prev, addOns: [...prev.addOns, text] }));

    console.log(
      '%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%',
      intialFormdata.addOns.includes(text),
      text
    );
    if (!intialFormdata.addOns.includes(text)) {
      setFormData((prev) => ({ ...prev, addOns: [...prev.addOns, text] }));
    }
  };
  console.log('checking up the data of the form over here', formData);

  return (
    <>
      <GlobalStyles />
      <>
        <Wrapper>
          <MainContainer width='900px'>
            <ImgContainer>
              <Container padding='20px'>
                {stepOption.map((step) => (
                  <Steps
                    stepCount={step.id}
                    step={step.step}
                    aboutStep={step.aboutStep}
                    currentPage={currentPage}
                  />
                ))}
              </Container>
            </ImgContainer>

            <BodyContainer>
              {currentPage === 0 && (
                <PersonalInfo
                  {...formData}
                  handleFormData={handleFormData}
                  checked={checked}
                />
              )}
              {currentPage === 1 && (
                <SelectPlan
                  handleFormData={handleFormData}
                  handlePriceToggleMain={handlePriceToggleMain}
                  checked={checked}
                />
              )}
              {currentPage === 2 && (
                <AddOns
                  checked={checked}
                  handleFormData={handleFormData}
                  handleAddOne={handleAddOne}
                />
              )}
              {currentPage === 3 && <Summary />}
              <ButtonContainer>
                {currentPage === 0 ? (
                  ''
                ) : (
                  <StyledButton
                    background='transparent'
                    onClick={handlePrevious}
                  >
                    Go Back
                  </StyledButton>
                )}

                {currentPage === 3 ? (
                  <StyledButton>Submit</StyledButton>
                ) : (
                  <StyledButton
                    background='hsl(213, 96%, 18%)'
                    inverse
                    color='#fff'
                    onClick={handleNext}
                  >
                    Next Step
                  </StyledButton>
                )}
              </ButtonContainer>
            </BodyContainer>
          </MainContainer>
        </Wrapper>
      </>
    </>
  );
};

export default App;
