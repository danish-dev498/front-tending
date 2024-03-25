import { styled } from 'styled-components';

export const BoxContainer = styled.div`
  width: 120px;
  height: 170px;
  border: ${({ active }) =>
    active ? '1px solid hsl(243, 100%, 62%)' : '1px solid hsl(229, 24%, 87%)'};

  /* border: 1px solid hsl(229, 24%, 87%); */
  border-radius: 7px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 35px;
  padding: 15px;
  margin-top: 40px;
`;

export const PlanImage = styled.img`
  alt: 'arcade image';
  width: 40px;
  height: 40px;
`;

export const Label = styled.label`
  display: flex;
  align-items: center;
  gap: 10px;
  cursor: pointer;
`;

export const Switch = styled.div`
  position: relative;
  width: 50px;
  height: 22px;
  /* background: #b3b3b3; */
  background-color: hsl(213, 96%, 18%);
  border-radius: 32px;
  padding: 4px;
  transition: 300ms all;

  &:before {
    transition: 300ms all;
    content: '';
    position: absolute;
    width: 15px;
    height: 15px;
    border-radius: 35px;
    top: 50%;
    left: 4px;
    background: white;
    transform: translate(0, -50%);
  }
`;

export const Input = styled.input`
  opacity: 0;
  background-color: red;
  position: absolute;

  &:checked + ${Switch} {
    background: hsl(213, 96%, 18%);

    &:before {
      transform: translate(25px, -50%);
    }
  }
`;

export const ToggleContainer = styled.div`
  background-color: red;
`;
