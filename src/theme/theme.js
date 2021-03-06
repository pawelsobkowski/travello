import hexToRgb from 'hex-to-rgba';

const theme = {
  colors: {
    white: '#FFFFFF',
    black: '#000000',
    lightgrey: '#FAFAFA',
    grey: '#CBCBCB',
    bc_grey: '#F5F5F5',
    blur: '#121110',
    primary_blue: '#1EA0E1',
    lightblue: '#BCE9FF',
    text_blue: '#0E84BF',
    profile_blue: '#003B59',
    black_087: hexToRgb('#000', 0.87),
    black_063: hexToRgb('#000', 0.63),
    grey_087: hexToRgb('#CBCBCB', 0.87),
    grey_063: hexToRgb('#CBCBCB', 0.63),
    grey_020: hexToRgb('#CBCBCB', 0.2),
  },
  breakingPoints: {
    small_mobile: '320px',
    mobile: '640px',
    tablet: '768px',
    laptop: '1024px',
    desktop: '1280px',
    large_desktop: '1440px',
    very_large_desktop: '1800px',
  },
};

export default theme;
