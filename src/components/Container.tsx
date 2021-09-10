import React, { ReactChild, ReactNode, VoidFunctionComponent } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { size } from '../assets/mediaSizes';

const { desktopS } = size;

type ContainerDisplay = {
  display?: 'grid' | 'flex';
};

type ContainerChildrens = ContainerDisplay & {
  children: ReactNode | ReactChild[];
};

const Div = styled.div<ContainerDisplay>`
  display: ${props => props.display};
  justify-content: center;
  padding: 0 calc((100vw - ${desktopS}) / 2);
  grid-auto-flow: row;
`;

const Container: VoidFunctionComponent<ContainerChildrens> = ({
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
  display: PropTypes.oneOf(['grid', 'flex']),
};

export default Container;
