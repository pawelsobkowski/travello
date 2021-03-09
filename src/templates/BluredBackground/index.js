import PropTypes from 'prop-types';
import Styled from './styles';

function BluredBackground({ children }) {
  return (
    <Styled.Background>
      <Styled.Blur />
      <Styled.Wrapper>{children}</Styled.Wrapper>
    </Styled.Background>
  );
}

BluredBackground.propTypes = {
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]).isRequired,
};

export default BluredBackground;
