import React, { VoidFunctionComponent } from 'react';
import BasicComponent, { ButtonHTML } from '../components/BasicComponent';
import { HeightContainer } from '../components/Container';
import Form from '../components/Form/Form';

const SingIn: VoidFunctionComponent = () => {
  return (
    <HeightContainer display={'flex'}>
      <BasicComponent
        buttonChildren={<ButtonHTML>Enviar</ButtonHTML>}
        description={
          'Si te interesa unirte a la familia G&G puedes llenar el formulario de esta página. Nosotros recibiremos tu información y nos comunicaremos contigo tan pronto como sea posible. Te ofrecemos toda una serie de facilidades para que puedas moverte hacia tu independencia financiera.'
        }
        title={'Únete a la familia'}
      >
        <Form />
      </BasicComponent>
    </HeightContainer>
  );
};

export default SingIn;
