import React, { VoidFunctionComponent } from 'react';
import {
  MiniComponent,
  ComponentDefaultProps,
  ComponentPropTypes,
  ComponentTypeProps,
  TitleArea,
  ButtonArea,
  ContentArea,
} from './DisplayerComponents';

const MiniDisplayer: VoidFunctionComponent<ComponentTypeProps> = ({
  buttonChildren,
  children,
  description,
  inverted,
  title,
  numberOfLines,
}) => {
  return (
    <MiniComponent $isInverted={inverted}>
      <TitleArea $isInverted={inverted}>{title}</TitleArea>
      <ButtonArea $isInverted={inverted}>{buttonChildren}</ButtonArea>
      <ContentArea $isInverted={inverted} $mini>
        {children}
      </ContentArea>
    </MiniComponent>
  );
};

MiniDisplayer.defaultProps = ComponentDefaultProps;

MiniDisplayer.propTypes = ComponentPropTypes;

export default MiniDisplayer;
