import React from 'react';
import { Container, Text } from '../GlobalStyles';
import { FinalButton, HorizontalLine } from './styles/SummaryStyles';

const FinalBox = () => {
  return (
    <>
      <Container
        background='hsl(217, 100%, 97%)'
        padding='15px'
        borderRadius='8px'
        mt='60px'
      >
        <Container flex='row' justifyContent='space-between' mb='10px '>
          <Container>
            <Text color='#193d68' weight='bold'>
              Arcade (Monthaly)
            </Text>
            <Text textDecoration='underline' size='10px'>
              Chnage
            </Text>
          </Container>
          <Text color='#193d68' weight='bold'>
            $120/yr
          </Text>
        </Container>

        <HorizontalLine />
        <Container flex='row' justifyContent='space-between'>
          <Text>online service</Text>
          <Text>$10</Text>
        </Container>
        <Container flex='row' justifyContent='space-between' mt='15px'>
          <Text>Larger storages</Text>
          <Text>$10</Text>
        </Container>
      </Container>
      <Container
        flex='row'
        justifyContent='space-between'
        padding='15px'
        mt='10px'
      >
        <Text>Total (Monthaly)</Text>
        <Text>$150/mo</Text>
      </Container>
    </>
  );
};

export default FinalBox;
