import { DefaultTheme } from 'styled-components';

const commonColors = {
  accentColor: '#2980b9',
  dotColor: '#ffffff',
  blue: '#3673ff',
  blueYonder: '#557595',
  white: '#ffffff',
  black: '#000000',
  green: '#16c784',
  red: '#ea3943',
  orange: '#f7ce63',
  yellow: '#ffe650',
  cardTextColor: '#ecf0f1',
};

export const darkTheme: DefaultTheme = {
  bgColor: '#2c3e50',
  textColor: '#ecf0f1',

  ...commonColors,
};

export const lightTheme: DefaultTheme = {
  bgColor: '#cbcbcb',
  textColor: '#000000',
  ...commonColors,
};
