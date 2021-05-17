"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.hoverEffect = exports.shadowedEffect = exports.pageMargins = exports.pageMargin = exports.breakpoint = exports.typography = exports.spacing = exports.color = exports.background = void 0;
var styled_components_1 = require("styled-components");
var polished_1 = require("polished");
// Global style variables
exports.background = {
    app: '#F6F9FC',
    appInverse: '#7A8997',
    positive: '#5235DD',
    negative: '#AC2285',
    warning: '#FFD100',
    universal: '#F5F5F5',
    middleground: '#EBEFF7',
};
exports.color = {
    // Gradient Palette
    rhymeswithurple: 'linear-gradient(270deg, #2575FC 0%, #5235DD 100%)',
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
    primary: '#5235DD',
    secondary: '#2575FC',
    tertiary: '#AC2285',
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
exports.spacing = {
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
exports.typography = {
    subheading: {
        textTransform: "uppercase",
    },
    heading: {
        textTransform: "capitalize",
    },
    italicbody: {
        fontStyle: "italic",
    },
    type: {
        primary: '"Titillium Web", Impact, sans-serif',
        code: '"Titillium Web", Impact, sans-serif',
        heading: '"Cabin", Impact, sans-serif',
        subheading: '"Homenaje", Impact, sans-serif',
    },
    transform: {
        headingtransform: 'capitalize',
        subheadingtransform: 'uppercase',
        uppercase: 'uppercase',
    },
    style: {
        normal: 'normal',
        italic: 'italic',
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
exports.breakpoint = 600;
exports.pageMargin = 5.55555;
exports.pageMargins = styled_components_1.css(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  padding: 0 ", "px;\n  @media (min-width: ", "px) {\n    margin: 0 ", "%;\n  }\n  @media (min-width: ", "px) {\n    margin: 0 ", "%;\n  }\n  @media (min-width: ", "px) {\n    margin: 0 ", "%;\n  }\n  @media (min-width: ", "px) {\n    margin: 0 ", "%;}\n"], ["\n  padding: 0 ", "px;\n  @media (min-width: ", "px) {\n    margin: 0 ", "%;\n  }\n  @media (min-width: ", "px) {\n    margin: 0 ", "%;\n  }\n  @media (min-width: ", "px) {\n    margin: 0 ", "%;\n  }\n  @media (min-width: ", "px) {\n    margin: 0 ", "%;}\n"])), exports.spacing.padding.medium, exports.breakpoint * 1, exports.pageMargin * 1, exports.breakpoint * 2, exports.pageMargin * 2, exports.breakpoint * 3, exports.pageMargin * 3, exports.breakpoint * 4, exports.pageMargin * 4);
exports.shadowedEffect = styled_components_1.css(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  filter: drop-shadow(-10px 8px 9px rgba(25, 1, 52, 0.5));\n  -webkit-filter: drop-shadow(-10px 8px 9px rgba(25, 1, 52, 0.5));\n  -ms-filter: \"progid:DXImageTransform.Microsoft.Dropshadow(OffX=-10, OffY=8, Color='#190134')\";\n  filter: \"progid:DXImageTransform.Microsoft.Dropshadow(OffX=-10, OffY=8, Color='#190134')\";\n"], ["\n  filter: drop-shadow(-10px 8px 9px rgba(25, 1, 52, 0.5));\n  -webkit-filter: drop-shadow(-10px 8px 9px rgba(25, 1, 52, 0.5));\n  -ms-filter: \"progid:DXImageTransform.Microsoft.Dropshadow(OffX=-10, OffY=8, Color='#190134')\";\n  filter: \"progid:DXImageTransform.Microsoft.Dropshadow(OffX=-10, OffY=8, Color='#190134')\";\n"])));
exports.hoverEffect = styled_components_1.css(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  border: 1px solid ", ";\n  border-radius: ", "px;\n  transition: background 150ms ease-out, border 150ms ease-out,\n  transform 150ms ease-out;\n  &:hover,\n  &.__hover {\n    border: ", ";\n    transform: translate3d(0, -3px, 0);\n    box-shadow: rgba(0, 0, 0, 0.08) 0 3px 10px 0;\n  }\n\n  &:active,\n  &.__active {\n    border: ", ";\n    transform: translate3d(0, 0, 0);\n  }\n"], ["\n  border: 1px solid ", ";\n  border-radius: ", "px;\n  transition: background 150ms ease-out, border 150ms ease-out,\n  transform 150ms ease-out;\n  &:hover,\n  &.__hover {\n    border: ", ";\n    transform: translate3d(0, -3px, 0);\n    box-shadow: rgba(0, 0, 0, 0.08) 0 3px 10px 0;\n  }\n\n  &:active,\n  &.__active {\n    border: ", ";\n    transform: translate3d(0, 0, 0);\n  }\n"])), exports.color.border, exports.spacing.borderRadius.small, polished_1.rgba(exports.color.secondary, 0.5), polished_1.rgba(exports.color.secondary, 1));
var templateObject_1, templateObject_2, templateObject_3;
