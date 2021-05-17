import { css } from 'styled-components';
import { rgba } from 'polished';

// Global style variables
export const background = {
  app: '#F6F9FC',
  appInverse: '#7A8997',
  positive: '#5235DD',
  negative: '#AC2285',
  warning: '#FFD100',
  universal: '#F5F5F5',
  middleground: '#EBEFF7',
};

export const color = {
  // Gradient Palette
  rhymeswithurple: 'linear-gradient(270deg, #2575FC 0%, #5235DD 100%)', // Urple
  sunsjourney: 'linear-gradient(90deg, #FF8C61 27.27%, #FFD100 113.18%)',
  rhymeswithdiet: 'linear-gradient(270deg, #6AA2FF 0%, #6D51F2 100%)',
  darkknightrises: 'linear-gradient(180deg, #32255B 0%, #2B2A36 100%)',
  grimmace: 'linear-gradient(88.11deg, #261F74 1.47%, #7D1F9D 119.06%)',

  // Base Brand Palette
  urple: '#5235DD',
  joy: '#2575FC',
  fivepm: '#FF8C61',
  noon: '#FFD100',
  warningwillrobinson: '#AC2285',
  brucewayne: '#190134',
  imblue: '#261F74',

  // GrayScales
  innocence: '#ffffff',
  smoothcriminal: '#EBEFF7',
  partlysunny: '#EAEAEA',
  dadada: '#DDDDDD',
  gloomy: '#DBDBDB',
  partlycloudy: '#C4C4C4',
  prozac: '#666666',
  trifecta: '#333333',
  thunderstorm: '#212121',
  paintit: '#121212',
  trueblack: '#000000',

  //Diet Palette

  dieturple: '#6AA2FF',
  dietjoy: '#6D51F2',
  dietp10: 'rgba(82, 53, 221, 1)',
  dietp9: 'rgba(82, 53, 221, .9)',
  dietp8: 'rgba(82, 53, 221, .8)',
  dietp7: 'rgba(82, 53, 221, .7)',
  dietp6: 'rgba(82, 53, 221, .6)',
  dietp5: 'rgba(82, 53, 221, .5)',
  dietp4: 'rgba(82, 53, 221, .4)',
  dietp3: 'rgba(82, 53, 221, .3)',
  dietp2: 'rgba(82, 53, 221, .2)',
  dietp1: 'rgba(82, 53, 221, .1)',
  dietb10: 'rgba(37, 117, 252, 1)',
  dietb9: 'rgba(37, 117, 252, 0.9)',
  dietb8: 'rgba(37, 117, 252, 0.8)',
  dietb7: 'rgba(37, 117, 252, 0.7)',
  dietb6: 'rgba(37, 117, 252, 0.6)',
  dietb5: 'rgba(37, 117, 252, 0.5)',
  dietb4: 'rgba(37, 117, 252, 0.4)',
  dietb3: 'rgba(37, 117, 252, 0.3)',
  dietb2: 'rgba(37, 117, 252, 0.2)',
  dietb1: 'rgba(37, 117, 252, 0.1)',

  // Text Colors
  default: '#0A0015',
  h1: '#190134',
  h2: '#B3ABBC',
  h3: '#B3ABBC',
  h4: '#190134',
  h5: '#190134',
  h6: '#B3ABBC',
  p: '#0A0015',
  a: '#5235DD',

  // UI Palette

  primary: 'linear-gradient(270deg, #2575FC 0%, #5235DD 100%)', // Urple
  secondary: '#5235DD', // Diet Urple
  tertiary: '#2575FC',
  shadow: '#000000',
  orange: '#FF8C61',
  gold: '#FFD100',
  green: '#261F74',
  seafoam: '#7D1F9D',
  purple: '#5235DD',
  ultraviolet: 'rgba(82, 53, 221, 0.3);',
  emperorsnewclothes: '#2B1E70',
  begoodelliott: '#685879',

  // Grayscales

  lightest: '#ffffff',
  lighter: '#EBEFF7',
  light: '#EAEAEA',
  mediumlight: '#DDDDDD',
  medium: '#DBDBDB',
  mediumdark: '#C4C4C4',
  dark: '#666666',
  darker: '#333333',
  darkest: '#212121',
  black: '#121212',

  border: 'rgba(0,0,0,.3)',

  // Status
  positive: '#5235DD',
  negative: '#AC2285',
  warning: '#FFD100',
};

export const spacing = {
  padding: {
    small: '10',
    medium: '20',
    large: '30',
  },
  borderRadius: {
    small: '5',
    default: '10',
  },
};

export const typography = {
  type: {
    primary: '"Titillium Web", Impact, sans-serif',
    code: '"Titillium Web", Impact, sans-serif',
    heading: '"Cabin", Impact, sans-serif',
    subheading: '"Homenaje", Impact, sans-serif',
  },
  transform: {
    headingtransform: 'capitalize',
    subheadingtransform: 'uppercase',
  },
  weight: {
    light: '200',
    regular: '300',
    bold: '500',
    extrabold: '700',
    black: '900',
  },
  size: {
    s1: 12,
    s2: 14,
    s3: 16,
    m1: 20,
    m2: 24,
    m3: 28,
    l1: 32,
    l2: 40,
    l3: 48,
    code: 90,
  },
};

export const breakpoint = "600";
export const pageMargin = "5.55555";

export const pageMargins =  css`
  padding: 0 ${spacing.padding.medium}px;
  
  @media (min-width: ${breakpoint * 1}px) {
    margin: 0 ${pageMargin * 1}%;
  }
  @media (min-width: ${breakpoint * 2}px) {
    margin: 0 ${pageMargin * 2}%;
  }
  @media (min-width: ${breakpoint * 3}px) {
    margin: 0 ${pageMargin * 3}%;
  }
  @media (min-width: ${breakpoint * 4}px) {
    margin: 0 ${pageMargin * 4}%;}
`;

export const shadowedEffect = css`
  filter: drop-shadow(-10px 8px 9px rgba(25, 1, 52, 0.5));
  -webkit-filter: drop-shadow(-10px 8px 9px rgba(25, 1, 52, 0.5));
  -ms-filter: "progid:DXImageTransform.Microsoft.Dropshadow(OffX=-10, OffY=8, Color='#190134')";
  filter: "progid:DXImageTransform.Microsoft.Dropshadow(OffX=-10, OffY=8, Color='#190134')";
`;


export const hoverEffect = css`
  border: 1px solid ${color.border};
  border-radius: ${spacing.borderRadius.small}px;
  transition: background 150ms ease-out, border 150ms ease-out,
  transform 150ms ease-out;
  &:hover,
  &.__hover {
    border: ${rgba(color.secondary, 0.5)};
    transform: translate3d(0, -3px, 0);
    box-shadow: rgba(0, 0, 0, 0.08) 0 3px 10px 0;
  }

  &:active,
  &.__active {
    border: ${rgba(color.secondary, 1)};
    transform: translate3d(0, 0, 0);
  }
`;


