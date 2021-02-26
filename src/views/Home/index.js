import React, { useState } from 'react';
import useDimensions from 'react-use-dimensions';
import Button from '../../components/ButtonWIthIcon';
import IconButton from '../../components/IconButton';
import Card from '../../components/SliderCard';
import Styled from './styles';
import { ReactComponent as ArrowRight } from '../../assets/icon/arrow_right.svg';
import { ReactComponent as Compass } from '../../assets/icon/compass.svg';
import { ReactComponent as ChevronRight } from '../../assets/icon/chevron_right.svg';
import { ReactComponent as ChevronLeft } from '../../assets/icon/chevron_left.svg';
import Variants from '../../variants/home';
import { useSliderStateContext, useSliderDispatchContext } from '../../context/sliderContext';
import data from '../../data';

const Home = () => {
  const state = useSliderStateContext();
  const dispatch = useSliderDispatchContext();

  const [titleElement, titleDimensions] = useDimensions();
  const [descElement, descDimensions] = useDimensions();

  const [places] = useState(data);

  const changeSlide = (direction = 1) => {
    const { current: currentPlace, order } = state;
    const previous = currentPlace;
    let current = direction === -1 ? currentPlace + 1 : currentPlace - 1;

    if (current < 0) current = 3;
    if (current > 3) current = 0;

    dispatch({
      type: 'SET_PROPERTIES',
      payload: {
        current,
        direction,
        previous,
        order:
          direction === -1
            ? [...order.slice(1), order[0]]
            : [order[order.length - 1], ...order.slice(0, 3)],
      },
    });
  };

  return (
    <Styled.Main background={places[0].photoUrl}>
      <Styled.Wrapper>
        <Styled.DotsWrapper />
        <Styled.Content>
          <Styled.TextWrapper>
            <Styled.TitleWrapper style={{ height: titleDimensions.height }}>
              {places.map((el, i) => (
                <React.Fragment key={el.id}>
                  {titleDimensions.height && (
                    <>
                      {state.previous === i && (
                        <Styled.Title
                          variants={Variants.previousPlaceText(
                            titleDimensions.height,
                            state.direction
                          )}
                          animate="visible"
                          initial="hidden"
                        >
                          {el.name}
                        </Styled.Title>
                      )}
                      {state.current === i && (
                        <Styled.Title
                          variants={Variants.currentPlaceText(
                            titleDimensions.height,
                            state.direction
                          )}
                          animate="visible"
                          initial="hidden"
                        >
                          {el.name}
                        </Styled.Title>
                      )}
                    </>
                  )}
                  <Styled.Title ref={titleElement}>{el.name}</Styled.Title>
                </React.Fragment>
              ))}
            </Styled.TitleWrapper>
            <Styled.DescriptionWrapper style={{ height: descDimensions.height }}>
              {places.map((el, i) => (
                <React.Fragment key={el.id}>
                  {descDimensions.height && (
                    <>
                      {state.previous === i && (
                        <Styled.Description
                          variants={Variants.previousPlaceText(
                            descDimensions.height,
                            state.direction
                          )}
                          animate="visible"
                          initial="hidden"
                        >
                          Kuala Lumpur is the cultural, financial and economic centre of Malaysia.
                          It is also home to the Parliament of Malaysia and the official residence
                          of the Yang di-Pertuan Agong, the Istana Negara
                        </Styled.Description>
                      )}
                      {state.current === i && (
                        <Styled.Description
                          variants={Variants.currentPlaceText(
                            descDimensions.height,
                            state.direction
                          )}
                          animate="visible"
                          initial="hidden"
                        >
                          Kuala Lumpur is the cultural, financial and economic centre of Malaysia.
                          It is also home to the Parliament of Malaysia and the official residence
                          of the Yang di-Pertuan Agong, the Istana Negara
                        </Styled.Description>
                      )}
                    </>
                  )}
                  {state.current !== i && state.previous !== i && (
                    <Styled.Description ref={descElement}>
                      Kuala Lumpur is the cultural, financial and economic centre of Malaysia. It is
                      also home to the Parliament of Malaysia and the official residence of the Yang
                      di-Pertuan Agong, the Istana Negara
                    </Styled.Description>
                  )}
                </React.Fragment>
              ))}
            </Styled.DescriptionWrapper>

            <Styled.ButtonsWrapper>
              <Button type="button" icon={<ArrowRight />} isPrimary={false}>
                Read more
              </Button>
              <Button type="button" icon={<Compass />}>
                Explore
              </Button>
            </Styled.ButtonsWrapper>
          </Styled.TextWrapper>
          <Styled.SliderWrapper>
            <Styled.Slider>
              {places.map((el, i) => (
                <Card
                  key={el.id}
                  cardNumber={i}
                  name={el.name}
                  coordinates="41.883333, 12.5"
                  background={el.photoUrl}
                />
              ))}
            </Styled.Slider>
            <Styled.ControlsWrapper>
              <Styled.Controls>
                <IconButton onClick={() => changeSlide(-1)} icon={<ChevronLeft />} />
                <IconButton onClick={() => changeSlide()} icon={<ChevronRight />} />
              </Styled.Controls>
            </Styled.ControlsWrapper>
          </Styled.SliderWrapper>
        </Styled.Content>
      </Styled.Wrapper>
    </Styled.Main>
  );
};

export default Home;
