import React, { VoidFunctionComponent, ReactChild, ReactNode } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

type ComponentProps = {
  buttonChildren: ReactChild[] | ReactNode;
  children?: ReactChild[] | ReactNode;
  description: string;
  title: string;
};

const Component = styled.div`
  display: grid;
  width: 100%;
  padding: 4rem 2rem;
  gap: 1.5rem;
  grid-template-areas:
    'title content'
    'description content'
    'button content';
  grid-template-columns: 2fr 3fr;
  grid-template-rows: 1fr 3fr 1fr;
`;

const Title = styled.h1`
  margin: 0;
  color: #ff5cb9;
  font-family: 'Dancing Script', cursive;
  font-style: normal;
  font-weight: bold;
  grid-area: title;
`;

const Description = styled.p`
  margin: 0;
  font-size: 1.2rem;
  font-weight: 500;
  grid-area: description;
`;

const Content = styled(React.Fragment)`
  grid-area: content;
`;

const BasicComponent: VoidFunctionComponent<ComponentProps> = ({
  buttonChildren,
  children,
  description,
  title,
}) => {
  return (
    <Component>
      <Title>{title}</Title>
      <Description>{description}</Description>
      {buttonChildren}
      <Content>{children}</Content>
    </Component>
  );
};

BasicComponent.defaultProps = {
  description: 'Description',
  title: 'Title',
};

BasicComponent.propTypes = {
  buttonChildren: PropTypes.node,
  children: PropTypes.node,
  description: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default BasicComponent;
