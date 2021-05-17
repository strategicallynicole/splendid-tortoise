import React from 'react';
import styled from 'styled-components';
import { action } from '@storybook/addon-actions';

import Button from "../reusecore/Button";
import { Icon } from './Icon';
import { StoryLinkWrapper } from './StoryLinkWrapper';
import { FaGooglePlay } from "react-icons/fa";
import { DiAppstore } from "react-icons/di";
export default {
  title: 'Button',
  component: Button,
  parameters:  { controls: { hideNoControlsWarning: true }}

};
{/*
export const Basic = (args) => <Button {...args} />;
Basic.args = { children: 'Label' };

export const All = () => (
  <>

 <h2>Read More Buttons Buttons</h2>
<Button className="outlinebutton darkknightrisesoutlinebutton readmore-btn">Dark Knight Rises</Button>


    <Button appearance="primary">Primary</Button>
    <Button appearance="secondary">Secondary</Button>
    <Button appearance="tertiary">Tertiary</Button>
    <Button appearance="outline">Outline</Button>
    <Button appearance="primaryOutline">Outline primary</Button>
    <Button appearance="secondaryOutline">Outline secondary</Button>
    <div style={{ background: 'grey', display: 'inline-block' }}>
      <Button appearance="inversePrimary">Primary inverse</Button>
    </div>
    <div style={{ background: 'grey', display: 'inline-block' }}>
      <Button appearance="inverseSecondary">Secondary inverse</Button>
    </div>
    <div style={{ background: 'grey', display: 'inline-block' }}>
      <Button appearance="inverseOutline">Outline inverse</Button>
    </div>
  </>
);*/}


export const Outline = () => (
  <>
    <Button className="outlinebutton sunsjourneyoutlinebutton">Sun's Journey</Button>
                 <Button className="outlinebutton grimmaceoutlinebutton">Grimmace</Button>
                <Button className="outlinebutton darkknightrisesoutlinebutton">Dark Knight Rises</Button>

                <Button className="outlinebutton dietoutlinebutton">Rhymes With Diet</Button>
                <Button className="outlinebutton urpleoutlinebutton">Rhymes With Urple</Button>
  <h2>Take Action Buttons</h2>
  <Button className="getapp-btn outlinebutton sunsjourneyoutlinebutton">                  <DiAppstore />&nbsp; &nbsp;
Meatball</Button>

                <Button className="getapp-btn outlinebutton sunsjourneyoutlinebutton">                  <FaGooglePlay />&nbsp; &nbsp;
Meatball</Button>

  </>
);
export const Standard = () => (
  <>
    <Button className="button sunsjourneybutton">Sun's Journey</Button>
                 <Button className="button grimmacebutton">Grimmace</Button>
                <Button className="button darkknightrisesbutton">Dark Knight Rises</Button>

                <Button className="button dietbutton">Rhymes With Diet</Button>
                <Button className="button urplebutton">Rhymes With Urple</Button>

  </>
);/* 

export const Loading = () => (
  <>
    <Button appearance="primary" isLoading>
      Primary
    </Button>
    <Button appearance="secondary" isLoading>
      Secondary
    </Button>
    <Button appearance="tertiary" isLoading>
      Tertiary
    </Button>
    <Button appearance="outline" isLoading>
      Outline
    </Button>
    <Button appearance="outline" isLoading loadingText="Custom...">
      Outline
    </Button>
  </>
);

export const Disabled = () => (
  <>
    <Button appearance="primary" isDisabled>
      Primary
    </Button>
    <Button appearance="secondary" isDisabled>
      Secondary
    </Button>
    <Button appearance="tertiary" isDisabled>
      Tertiary
    </Button>
    <Button appearance="outline" isDisabled>
      Outline
    </Button>
  </>
);

export const ContainsIcon = () => (
  <>
    <Button appearance="outline" containsIcon>
      <Icon icon="link" aria-label="Link" />
    </Button>
    <Button appearance="outline" size="small" containsIcon>
      <Icon icon="link" aria-label="Link" />
    </Button>
  </>
);

// eslint-disable-next-line react/button-has-type
const ButtonWrapper = (props) => <button {...props} />;

export const BasicWrapper = () => (
  <Button
    ButtonWrapper={ButtonWrapper}
    appearance="primary"
    onClick={action('button action click')}
  >
    Button that passes clicks through
  </Button>
);

export const AnchorWrapper = () => (
  <Button ButtonWrapper={StoryLinkWrapper} appearance="primary" href="http://storybook.js.org">
    Button that passes href through
  </Button>
); */
