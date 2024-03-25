import { createGlobalStyle, styled } from 'styled-components';
import UbantuB from './asset/fonts/Ubuntu-Bold.ttf';
import UbantuM from './asset/fonts/Ubuntu-Medium.ttf';
import UbantuR from './asset/fonts/Ubuntu-Regular.ttf';

const GlobalStyles = createGlobalStyle`

@font-face {
 font-family: "MaisonNueue";
 src: url(${UbantuR});
}

@font-face {
 font-family: "MaisonNueueBold";
 src: url(${UbantuB})  format("truetype");
}

  * {
    box-sizing: border-box;
  }

  body {
    font-family: 'MaisonNueue';
    src: url(${UbantuR});
    background-color: hsl(217, 100%, 97%);
    margin: 0;
    span {
     font-family: 'MaisonNueue';
  }
  }

  p {
    opacity: 0.6;
    line-height: 1.5;
  }

  img {
    max-width: 100%;
}
`;

export default GlobalStyles;

export const Wrapper = styled.header`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: white;
  padding: 15px;
  border-radius: 10px;
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
`;

export const MainContainer = styled.div`
  display: flex;
  /* width: 900px; */
  width: ${({ width }) => (width ? width : '')};
  gap: ${({ gap }) => (gap ? gap : '')};
  margin: ${({ margin }) => (margin ? margin : '')};
`;

export const Text = styled.span`
  font-size: ${({ size }) => (size ? size : '')};
  font-weight: ${({ weight }) => (weight ? weight : '')};
  letter-spacing: ${({ spacing }) => (spacing ? spacing : '')};
  text-align: ${({ align }) => (align ? align : '')};
  padding: ${({ padding }) => (padding ? padding : '')};
  margin: ${({ margin }) => (margin ? margin : '')};
  margin-bottom: ${({ mb }) => (mb ? mb : '')};
  margin-top: ${({ mt }) => (mt ? mt : '')};
  width: ${({ width }) => (width ? width : 'auto')};
  min-width: ${({ minWidth }) => (minWidth ? minWidth : '')};
  max-width: ${({ maxWidth }) => (maxWidth ? maxWidth : '')};
  height: ${({ height }) => (height ? height : '')};
  max-height: ${({ maxHeight }) => (maxHeight ? maxHeight : '')};
  min-height: ${({ minHeight }) => (minHeight ? minHeight : '')};
  text-decoration: ${({ textDecoration }) =>
    textDecoration ? textDecoration : ''};
  color: ${({ color }) => (color ? color : 'hsl(231, 11%, 63%)')};
  /* color: ${({ inverse }) => (inverse ? 'hsl(231, 11%, 63%)' : '#fff')}; */
`;

export const ImgContainer = styled.div`
  background-image: url('/assets/images/bg-sidebar-desktop.svg');
  background-repeat: no-repeat;
  width: 274px;
  height: 568px;
`;

export const BodyContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  /* background-color: green; */
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-left: 100px;
  margin-top: 70px;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: ${({ flex }) => (flex ? flex : 'column')};
  padding: ${({ padding }) => (padding ? padding : '')};
  justify-content: ${({ justifyContent }) =>
    justifyContent ? justifyContent : ''};
  align-items: ${({ alignItem }) => (alignItem ? alignItem : '')};
  border-radius: ${({ borderRadius }) => (borderRadius ? borderRadius : '')};
  margin-bottom: 0;
  margin-bottom: ${({ mb }) => (mb ? mb : '')};
  margin-top: ${({ mt }) => (mt ? mt : '')};
  gap: ${({ gap }) => (gap ? gap : '')};
  background-color: ${({ background }) => (background ? background : '')};
`;
