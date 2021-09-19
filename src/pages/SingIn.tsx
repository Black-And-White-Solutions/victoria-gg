import React, { VoidFunctionComponent } from 'react';
import styled from 'styled-components';
import BasicComponent, { ButtonHTML } from '../components/BasicComponent';
import Container from '../components/Container';
import Form from '../components/Form/Form';

const SingInContainer = styled(Container)`
  height: calc(100vh - 5rem);
`;

const SingIn: VoidFunctionComponent = () => {
  return (
    <SingInContainer>
      <BasicComponent
        buttonChildren={<ButtonHTML>Enviar</ButtonHTML>}
        description={
          'Si te interesa unirte a la familia G&G puedes llenar el formulario de esta página. Nosotros recibiremos tu información y nos comunicaremos contigo tan pronto como sea posible. Te ofrecemos toda una serie de facilidades para que puedas moverte hacia tu independencia financiera.'
        }
        title={'Únete a la familia'}
      >
        <Form />
      </BasicComponent>
    </SingInContainer>
  );
};

export default SingIn;
