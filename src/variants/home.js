const currentPlaceText = (height, direction) => ({
  visible: {
    y: height * -1,
    transition: {
      ease: 'easeInOut',
      duration: 0.5,
    },
  },
  hidden: { y: direction === -1 ? 0 : height * -2 },
});

const previousPlaceText = (height, direction) => ({
  visible: {
    y: direction === -1 ? height * 2 * direction : 0,
    transition: {
      ease: 'easeInOut',
      duration: 0.5,
    },
  },
  hidden: { y: height * -1 },
});

const Variants = {
  currentPlaceText,
  previousPlaceText,
};

export default Variants;
