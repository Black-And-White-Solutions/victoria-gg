import React, { VoidFunctionComponent } from 'react';
import {
  Component,
  ComponentDefaultProps,
  ComponentPropTypes,
  ComponentTypeProps,
  TitleArea,
  DescriptionArea,
  ButtonArea,
  ContentArea,
} from './DisplayerComponents';

const Displayer: VoidFunctionComponent<ComponentTypeProps> = ({
  buttonChildren,
  children,
  description,
  inverted,
  title,
}) => {
  return (
    <Component isInverted={inverted}>
      <TitleArea isInverted={inverted}>{title}</TitleArea>
      <DescriptionArea isInverted={!inverted} numberOfLines={14}>
        {description}
      </DescriptionArea>
      <ButtonArea isInverted={!inverted}>{buttonChildren}</ButtonArea>
      <ContentArea isInverted={inverted}>{children}</ContentArea>
    </Component>
  );
};

Displayer.defaultProps = ComponentDefaultProps;

Displayer.propTypes = ComponentPropTypes;

export default Displayer;
