import styled from 'styled-components';

export const MainHeading = styled.h1`
  margin-bottom: 8px;
`;

export const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding-left: 100px;
`;

export const StyledForm = styled.form`
  border-radius: 5px;
  margin-top: 40px;
`;

export const StyledLabel = styled.label`
  display: block;
  margin-bottom: 5px;
  font-weight: 100;
  color: #324051;
`;

export const StyledInput = styled.input`
  width: 100%;
  padding: 10px;
  margin-bottom: 20px;
  border-radius: 5px;
  border: 1px solid hsl(229, 24%, 87%);
  outline: none;

  &:focus {
    border-color: hsl(243, 100%, 62%);
  }
`;

export const StyledButton = styled.button`
  color: ${({ color }) => (color ? color : '')};
  background-color: ${({ background }) => (background ? background : '')};
  padding: 7px 13px;
  margin-top: 10px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  &:disabled {
    opacity: 0.5;
  }
  &:enabled {
    opacity: 1;
  }
  opacity: ${(props) => (!props.enabled ? 0.5 : 1)};

  &:hover {
    background-color: ${({ inverse }) => (inverse ? 'hsl(213, 87%, 26%)' : '')};

    /* background-color: hsl(213, 89%, 48%); */
  }
`;

export const StyledAlert = styled.div`
  padding: 10px;
  background-color: #f44336;
  color: white;
  margin-top: 10px;
  border-radius: 5px;
`;
