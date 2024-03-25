import styled from 'styled-components';

export const NumberCircle = styled.div`
  width: 25px;
  height: 25px;
  border-radius: 50%;
  background-color: ${({ active }) => (active ? ' #99c1e3' : 'transparent')};
  /* background-color: hsl(217, 100%, 97%); */
  display: flex;
  align-items: center;
  border: 1px solid hsl(229, 24%, 87%);
  justify-content: center;
`;

export const NumberSpan = styled.span`
  font-size: 12px;
  font-weight: bold;
  color: ${({ active }) => (active ? 'hsla(0, 0%, 0%, 0.934)' : '#eaf2ff')};
`;

// - Cool gray: hsl(231, 11%, 63%)
// - Light gray: hsl(229, 24%, 87%)
// - Magnolia: hsl(217, 100%, 97%)
// - Alabaster: hsl(231, 100%, 99%)
// - White: hsl(0, 0%, 100%)
