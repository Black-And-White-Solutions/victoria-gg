import PropTypes from 'prop-types';
import styled from 'styled-components';
import { maxMargin } from '../assets/GenericCSS';

type ContainerDisplay = {
  display?: 'flex' | 'grid';
};

const Container = styled.div<ContainerDisplay>`
  display: ${props => props.display};
  justify-content: center;
  ${maxMargin}
  grid-auto-flow: row;
`;

export const HeightContainer = styled(Container)`
  height: calc(100vh - 10rem);
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
