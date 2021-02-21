/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
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

const Home = () => {
  const [sliderStatus, setSliderStatus] = useState({
    currentPlace: 0,
    previousPlace: -1,
    direction: -1,
  });

  const [titleElement, titleDimensions] = useDimensions();
  const [descElement, descDimensions] = useDimensions();

  const [data] = useState([
    {
      id: 1,
      photoUrl:
        'https://firebasestorage.googleapis.com/v0/b/travello-5caa6.appspot.com/o/places%2Fcity%2Fkuala_lumpur.jpg?alt=media&token=43445caa-4c77-450d-8587-8b9908320e10',
      name: 'Kuala Lumpur',
    },
    {
      id: 2,
      photoUrl:
        'https://firebasestorage.googleapis.com/v0/b/travello-5caa6.appspot.com/o/places%2Fcity%2Frome.jpg?alt=media&token=e9d8b3c0-9834-4719-b3fa-71ae2ca888f8',
      name: 'Rome',
    },
    {
      id: 3,
      photoUrl:
        'https://firebasestorage.googleapis.com/v0/b/travello-5caa6.appspot.com/o/places%2Fnature%2Fgrand_canyon.jpg?alt=media&token=2818af73-8359-4731-9d45-70114ac0d544',
      name: 'Grand Canyon',
    },
    {
      id: 4,
      photoUrl:
        'https://firebasestorage.googleapis.com/v0/b/travello-5caa6.appspot.com/o/places%2Fplace%2Fgolden_gate_bridge.jpg?alt=media&token=6a7c02dc-2a67-402c-8a40-3ee1b406e7fa',
      name: 'Golden Gate',
    },
  ]);

  const changeSlide = (dir = '+') => {
    let { currentPlace } = sliderStatus;
    const previousPlace = currentPlace;
    currentPlace = dir === '-' ? (currentPlace += 1) : (currentPlace -= 1);

    if (currentPlace < 0) currentPlace = 3;
    if (currentPlace > 3) currentPlace = 0;

    setSliderStatus({ currentPlace, previousPlace, direction: dir === '-' ? -1 : 1 });
  };

  return (
    <Styled.Main background={data[0].photoUrl}>
      <Styled.Wrapper>
        <Styled.DotsWrapper />
        <Styled.Content>
          <Styled.TextWrapper>
            <Styled.TitleWrapper style={{ height: titleDimensions.height }}>
              {data.map((el, i) => (
                <React.Fragment key={el.id}>
                  {titleDimensions.height && (
                    <>
                      {sliderStatus.previousPlace === i && (
                        <Styled.Title
                          variants={Variants.previousPlaceText(
                            titleDimensions.height,
                            sliderStatus.direction
                          )}
                          animate="visible"
                          initial="hidden"
                        >
                          {el.name}
                        </Styled.Title>
                      )}
                      {sliderStatus.currentPlace === i && (
                        <Styled.Title
                          variants={Variants.currentPlaceText(
                            titleDimensions.height,
                            sliderStatus.direction
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
              {data.map((el, i) => (
                <React.Fragment key={el.id}>
                  {descDimensions.height && (
                    <>
                      {sliderStatus.previousPlace === i && (
                        <Styled.Description
                          variants={Variants.previousPlaceText(
                            descDimensions.height,
                            sliderStatus.direction
                          )}
                          animate="visible"
                          initial="hidden"
                        >
                          Kuala Lumpur is the cultural, financial and economic centre of Malaysia.
                          It is also home to the Parliament of Malaysia and the official residence
                          of the Yang di-Pertuan Agong, the Istana Negara
                        </Styled.Description>
                      )}
                      {sliderStatus.currentPlace === i && (
                        <Styled.Description
                          variants={Variants.currentPlaceText(
                            descDimensions.height,
                            sliderStatus.direction
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
                  {sliderStatus.currentPlace !== i && sliderStatus.previousPlace !== i && (
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
              {data.map((el, i) => (
                <>
                  {sliderStatus.currentPlace !== i && (
                    <Card
                      primary
                      sliderStatus
                      name={el.name}
                      coordinates="41.883333, 12.5"
                      background={el.photoUrl}
                    />
                  )}
                </>
              ))}
            </Styled.Slider>
            <Styled.ControlsWrapper>
              <Styled.Controls>
                <IconButton onClick={() => changeSlide('-')} icon={<ChevronLeft />} />
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
