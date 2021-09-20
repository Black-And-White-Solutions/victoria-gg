import React, { VoidFunctionComponent } from 'react';
import styled from 'styled-components';

const JSON = {
  title: 'Genera tus propios ingresos en una forma innovadora',
  thumbnail: 'https://i.imgur.com/5ecsIlls.jpg',
};

const Padding = styled.div`
  padding: 2rem;
`;

const Thumbnail = styled.img`
  width: 4rem;
  height: auto;
  border-radius: 50%;
`;

const Title = styled.h1`
  color: #ff5cb9;
  font-family: 'Dancing Script', cursive;
  font-size: 3rem;
  font-style: normal;
  font-weight: 700;
`;

const Container = styled.div`
  display: grid;
  width: fit-content;
  height: fit-content;
  margin: 1rem 0;
  gap: 1rem;
  grid-auto-flow: column;
`;

const BlogEntry: VoidFunctionComponent = () => {
  return (
    <Padding>
      <Title>{JSON.title}</Title>
      <Container>
        <Thumbnail src={JSON.thumbnail} alt="Thumbnail" />
        <div>
          <h2>First Name</h2>
          <p>Extra Info</p>
        </div>
      </Container>
    </Padding>
  );
};

export default BlogEntry;
