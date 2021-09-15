import React, { ReactChild, ReactNode, VoidFunctionComponent } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { size } from '../assets/mediaSizes';

type ContainerDisplay = {
  display?: 'flex' | 'grid';
};

type ContainerProps = ContainerDisplay & {
  children: ReactChild[] | ReactNode;
};

const { desktopS } = size;

const Div = styled.div<ContainerDisplay>`
  display: ${props => props.display};
  justify-content: center;
  padding: 0 calc((100vw - ${desktopS}) / 2);
  grid-auto-flow: row;
`;

const Container: VoidFunctionComponent<ContainerProps> = ({
  children,
  display,
}) => {
  return <Div display={display}>{children}</Div>;
};

Container.defaultProps = {
  display: 'grid',
};

Container.propTypes = {
  children: PropTypes.node.isRequired,
  display: PropTypes.oneOf(['flex', 'grid']),
};

export default Container;
