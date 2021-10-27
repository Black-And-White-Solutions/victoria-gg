import PropTypes from 'prop-types';
import styled from 'styled-components';
import { maxMargin } from '../assets/GenericCSS';

type ContainerProps = {
  display?: 'flex' | 'grid';
  flow?: 'column' | 'row';
};

const Container = styled.div<ContainerProps>`
  display: ${props => props.display};
  ${maxMargin}
  flex-direction: ${props => props.flow};
  justify-content: center;
  grid-auto-flow: ${props => props.flow};
`;

export const HeightContainer = styled(Container)`
  height: calc(100vh - 10rem);
  align-items: center;
`;

Container.defaultProps = {
  display: 'grid',
  flow: 'row',
};

Container.propTypes = {
  children: PropTypes.node.isRequired,
  display: PropTypes.oneOf(['flex', 'grid']),
  flow: PropTypes.oneOf(['column', 'row']),
};

export default Container;
