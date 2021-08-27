import React, { VoidFunctionComponent, ReactChild, ReactNode } from 'react';
import { NavLink as Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import styled from 'styled-components';

type ComponentProps = {
  buttonLink?: string;
  buttonPlaceholder: string;
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

const Button = styled.button`
  width: 50%;
  height: 4rem;
  border: none;
  margin: auto 0;
  background: #f11593;
  border-radius: 45px 0px;
  grid-area: button;
  outline: none;
`;

const ButtonLink = styled(Link)`
  color: #fff;
  font-size: 1rem;
  font-style: normal;
  font-weight: 600;
  text-align: center;
  text-decoration: none;
`;

const Content = styled(React.Fragment)`
  grid-area: content;
`;

const BasicComponent: VoidFunctionComponent<ComponentProps> = ({
  buttonLink,
  buttonPlaceholder,
  children,
  description,
  title,
}) => {
  return (
    <Component>
      <Title>{title}</Title>
      <Description>{description}</Description>
      <Button>
        <ButtonLink
          to={{
            pathname: buttonLink,
          }}>
          {buttonPlaceholder}
        </ButtonLink>
      </Button>
      <Content>{children}</Content>
    </Component>
  );
};

BasicComponent.defaultProps = {
  buttonLink: '/',
  buttonPlaceholder: 'Placeholder',
  description: 'Description',
  title: 'Title',
};

BasicComponent.propTypes = {
  buttonLink: PropTypes.string,
  buttonPlaceholder: PropTypes.string.isRequired,
  children: PropTypes.node,
  description: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default BasicComponent;
