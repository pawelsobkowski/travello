import { createContext, useReducer, useContext } from 'react';
import PropTypes from 'prop-types';

const SliderContext = createContext();

const sliderReducer = (state, action) => {
  switch (action.type) {
    case 'SET_PROPERTIES': {
      return {
        ...state,
        ...action.payload,
      };
    }
    default: {
      throw new Error(`Unhandled action type: ${action.type}`);
    }
  }
};

export const SliderProvider = ({ children }) => {
  const [state, dispatch] = useReducer(sliderReducer, {
    current: 0,
    previous: -1,
    order: [0, 1, 2, 3],
    direction: -1,
  });

  return (
    <SliderContext.Provider value={{ sliderStatus: state, dispatch }}>
      {children}
    </SliderContext.Provider>
  );
};

SliderProvider.propTypes = {
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]).isRequired,
};

export const useSliderStateContext = () => useContext(SliderContext).sliderStatus;

export const useSliderDispatchContext = () => useContext(SliderContext).dispatch;
