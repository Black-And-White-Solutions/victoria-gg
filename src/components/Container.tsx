import PropTypes from 'prop-types';
import styled from 'styled-components';
import { size } from '../assets/mediaSizes';

type ContainerDisplay = {
  display?: 'flex' | 'grid';
};

const { desktopS } = size;

const Container = styled.div<ContainerDisplay>`
  display: ${props => props.display};
  justify-content: center;
  padding: 0 calc((100vw - ${desktopS}) / 2);
  grid-auto-flow: row;
`;

export const HeightContainer = styled(Container)`
  height: calc(100vh - 5rem);
  align-items: center;
`;

Container.defaultProps = {
  display: 'grid',
};

Container.propTypes = {
  children: PropTypes.node.isRequired,
  display: PropTypes.oneOf(['flex', 'grid']),
};

export default Container;
