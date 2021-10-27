import React, { VoidFunctionComponent } from 'react';
import remarkGfm from 'remark-gfm';
import Container from '../components/Container';
import { MarkdownEngine, Padding } from '../components/BlogEntryComponents';
import Form from '../components/Form/Form';

const SingIn: VoidFunctionComponent = () => {
  return (
    <Container display={'flex'} flow={'column'}>
      <Padding>
        <MarkdownEngine remarkPlugins={[remarkGfm]}>
          {
            '# Únete a la familia\nSi te interesa unirte a la familia G&G puedes llenar el formulario de esta página. Nosotros recibiremos tu información y nos comunicaremos contigo tan pronto como sea posible. Te ofrecemos toda una serie de facilidades para que puedas moverte hacia tu independencia financiera.'
          }
        </MarkdownEngine>
      </Padding>
      <Form />
    </Container>
  );
};

export default SingIn;
