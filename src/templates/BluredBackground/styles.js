import styled from 'styled-components';

const Background = styled.div`
  position: fixed;
  width: 100%;
  height: 100vh;
  top: 0;
  left: 0;
  z-index: 20;
  backdrop-filter: blur(9px);
`;

const Blur = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  background: ${({ theme }) => theme.colors.black_063};
  top: 0;
  left: 0;
  z-index: -1;
`;

const Wrapper = styled.div`
  height: 100%;
  width: 100%;
  overflow: auto;
  display: flex;
  padding-top: 80px;
`;

const Styled = {
  Background,
  Blur,
  Wrapper,
};

export default Styled;
