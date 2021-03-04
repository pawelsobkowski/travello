/* eslint-disable no-unused-vars */
import Styled from './styles';
import { useSliderStateContext } from '../../context/sliderContext';
import Dot from './dot';

const Dots = () => {
  const state = useSliderStateContext();

  return (
    <Styled.DotsContainer>
      <Styled.DotsWrapper>
        <Styled.Line />
        <Dot current={state.current} index={1} />
        <Styled.Line />
        <Dot current={state.current} index={2} />
        <Styled.Line />
        <Dot current={state.current} index={3} />
        <Styled.Line />
        <Dot current={state.current} index={4} />
        <Styled.Line />
      </Styled.DotsWrapper>
    </Styled.DotsContainer>
  );
};

export default Dots;
