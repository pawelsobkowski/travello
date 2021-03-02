const initialConfig = {
  transition: {
    ease: 'easeInOut',
    duration: 0.7,
  },
};

const changeActiveDot = {
  visible: { scale: 2, transition: { ease: 'easeIn' } },
};

const changeActiveDotContent = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { ease: 'easeIn' } },
};

const changeText = (height) => ({
  enter: (direction) => ({
    y: direction > 0 ? height : height * -1,
    ...initialConfig,
  }),
  center: {
    y: 0,
    ...initialConfig,
  },
  exit: (direction) => ({
    y: direction < 0 ? height : height * -1,
    ...initialConfig,
  }),
});

const nextSliderCard = (previousPlace, direction, currentCard, width = 166) => {
  if (previousPlace !== -1) {
    // direction: left
    if (direction === -1) {
      switch (currentCard) {
        // first card
        case 0:
          return {
            visible: {
              x: width * direction,
              opacity: 0,
              scale: 0.8,
              transitionEnd: {
                x: width * 4,
              },
              ...initialConfig,
            },
          };
        // third card
        case 2:
          return {
            visible: {
              x: width,
              ...initialConfig,
            },
          };
        // last card
        case 3:
          return {
            visible: {
              x: width * 2,
              ...initialConfig,
            },
          };
        // second card
        default:
          return {
            visible: {
              x: 0,
              ...initialConfig,
            },
          };
      }
    }
    // direction: right
    else {
      switch (currentCard) {
        // last card
        case 0:
          return {
            visible: {
              x: width * 3,
              opacity: 0,
              scale: 0.8,
              transitionEnd: {
                scale: 1,
              },
              ...initialConfig,
            },
          };
        // second card
        case 2:
          return {
            visible: {
              x: width,
              ...initialConfig,
            },
          };

        // third card
        case 3:
          return {
            visible: {
              x: width * 2,
              ...initialConfig,
            },
          };
        // first card
        default:
          return {
            visible: {
              x: 0,
              zIndex: 0,
              transitionEnd: {
                zIndex: 2,
              },
              ...initialConfig,
            },
          };
      }
    }
  }
  // initial
  if (currentCard === 0) {
    return {
      visible: { x: width * 4, opacity: 0, transition: { duration: 0 } },
    };
  }
  if (currentCard === 1) {
    return { visible: { x: 0, transition: { duration: 0 } } };
  }
  if (currentCard === 2) {
    return { visible: { x: width, transition: { duration: 0 } } };
  }
  return { visible: { x: width * 2, transition: { duration: 0 } } };
};

const Variants = {
  nextSliderCard,
  changeText,
  changeActiveDot,
  changeActiveDotContent,
};

export default Variants;
