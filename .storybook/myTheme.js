
import { create } from '@storybook/theming';
import { color } from '../src/components/shared/styles';
import logo from "../src/assets/images/logos/main.png";
export default create({
  base:  color.smoothcriminal,

  colorPrimary: color.urple,
  colorSecondary: color.joy,

  // UI
  appBg: color.innocence,
  appContentBg: color.smoothcriminal,
  appBorderColor: color.begoodelliott,
  appBorderRadius: 10,

  // Typography
  fontBase: '"Titillium Web"',
  // Text colors
  textColor: 'black',
  textInverseColor: 'rgba(255,255,255,0.9)',

  // Toolbar default and active colors
  barTextColor: color.light,
  barSelectedColor: color.light,
  barBg: color.urple,

  // Form colors
  inputBg: 'white',
  inputBorder: 'silver',
  inputTextColor: 'black',
  inputBorderRadius: 4,

  brandTitle: 'My custom storybook',
  brandUrl: 'https://example.com',
  brandImage: logo,
});