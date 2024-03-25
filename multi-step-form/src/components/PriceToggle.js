import React, { useState } from 'react';
import {
  Input,
  Label,
  Switch,
  ToggleContainer,
} from './styles/SelectPlanStyled';
import { Container, Text } from '../GlobalStyles';

const PriceToggle = ({ handlePriceChange }) => {
  return (
    <>
      <Container
        flex='row'
        gap='30px'
        background='hsl(217, 100%, 97%)'
        padding='10px'
        justifyContent='center'
        borderRadius='10px'
      >
        <Label>
          <Text size='12px'>Monthly</Text>
          <Input
            type='checkbox'
            onChange={(event) => handlePriceChange(event.target.checked)}
          />
          <Switch />
          <Text size='12px'>Yearly</Text>
        </Label>
      </Container>
    </>
  );
};

export default PriceToggle;

// import React, { useState } from 'react';

// const PriceToggle = () => {
//   const [isToggleActive, setIsToggleActive] = useState(false);

//   const handleToggle = () => {
//     setIsToggleActive(!isToggleActive);
//   };
//   return (
//     <>
//       <div class='toggle'>
//         <label>Annually </label>
//         <div class='toggle-btn'>
//           <input type='checkbox' class='checkbox' id='checkbox' />
//           <label class='sub' id='sub' for='checkbox'>
//             <div class='circle'></div>
//           </label>
//         </div>
//         <label> Monthly</label>
//       </div>
//     </>
//   );
// };

// export default PriceToggle;
