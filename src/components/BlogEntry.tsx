import React, { VoidFunctionComponent } from 'react';
import styled from 'styled-components';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

const JSON = {
  title: 'Genera tus propios ingresos en una forma innovadora',
  author: {
    name: 'Nombre del autor',
    details: 'Detalles del autor',
    thumbnail: 'https://i.imgur.com/5ecsIlls.jpg',
  },
  content: `
# Titulo

En Victoria G&G te presentamos un modelo de negocio basado únicamente
en tu propio talento y habilidad como vendedor. ¡Ya basta de depender
de otro, de esperar a que llegue tu fecha de pago, o de tener que preocuparte
por querer ganar más! ¡Tú eliges cuánto quieres trabajar, y cosecha los frutos
de tu esfuerzo!
¿Qué esperas para empezar a generar?

En Victoria G&G te presentamos un modelo de negocio basado únicamente
en tu propio talento y habilidad como vendedor. ¡Ya basta de depender
de otro, de esperar a que llegue tu fecha de pago, o de tener que preocuparte
por querer ganar más! ¡Tú eliges cuánto quieres trabajar, y cosecha los frutos
de tu esfuerzo!
¿Qué esperas para empezar a generar?

En Victoria G&G te presentamos un modelo de negocio basado únicamente
en tu propio talento y habilidad como vendedor. ¡Ya basta de depender
de otro, de esperar a que llegue tu fecha de pago, o de tener que preocuparte
por querer ganar más! ¡Tú eliges cuánto quieres trabajar, y cosecha los frutos
de tu esfuerzo!
¿Qué esperas para empezar a generar?

En Victoria G&G te presentamos un modelo de negocio basado únicamente
en tu propio talento y habilidad como vendedor. ¡Ya basta de depender
de otro, de esperar a que llegue tu fecha de pago, o de tener que preocuparte
por querer ganar más! ¡Tú eliges cuánto quieres trabajar, y cosecha los frutos
de tu esfuerzo!
¿Qué esperas para empezar a generar?

En Victoria G&G te presentamos un modelo de negocio basado únicamente
en tu propio talento y habilidad como vendedor. ¡Ya basta de depender
de otro, de esperar a que llegue tu fecha de pago, o de tener que preocuparte
por querer ganar más! ¡Tú eliges cuánto quieres trabajar, y cosecha los frutos
de tu esfuerzo!
¿Qué esperas para empezar a generar?

En Victoria G&G te presentamos un modelo de negocio basado únicamente
en tu propio talento y habilidad como vendedor. ¡Ya basta de depender
de otro, de esperar a que llegue tu fecha de pago, o de tener que preocuparte
por querer ganar más! ¡Tú eliges cuánto quieres trabajar, y cosecha los frutos
de tu esfuerzo!
¿Qué esperas para empezar a generar?

En Victoria G&G te presentamos un modelo de negocio basado únicamente
en tu propio talento y habilidad como vendedor. ¡Ya basta de depender
de otro, de esperar a que llegue tu fecha de pago, o de tener que preocuparte
por querer ganar más! ¡Tú eliges cuánto quieres trabajar, y cosecha los frutos
de tu esfuerzo!
¿Qué esperas para empezar a generar?
	`,
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
      <Padding>
        <ReactMarkdown remarkPlugins={[remarkGfm]}>
          {JSON.content}
        </ReactMarkdown>
      </Padding>
      <Container>
        <Thumbnail src={JSON.author.thumbnail} alt="Thumbnail" />
        <div>
          <h2>{JSON.author.name}</h2>
          <p>{JSON.author.details}</p>
        </div>
      </Container>
    </Padding>
  );
};

export default BlogEntry;
