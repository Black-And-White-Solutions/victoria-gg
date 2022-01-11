import React, { VoidFunctionComponent } from 'react';
import BlogEntry from '../components/BlogEntryComponents';

const About: VoidFunctionComponent = () => {
  return (
    <BlogEntry
      content={
        '# Nuestra Visión :\n  Victoria G&G es una empresa familiar dedicada a la fabricación de productos de aseo personal y que lleva bienestar físico y financiero a las familias, brindando productos de altísima calidad que cuida el medio ambiente y la salud convirtiéndose así en la distribuidora nacional e internacional más importante del país\n\n\n# Nuestra Misión\n  ## GENTE: \n  Inspiramos para ser los mejores, ofrecemos el mejor lugar para trabajar por que mantenemos un sitio de paz , camaradería y liderazgo\n\n  ## PORTAFOLIO: \n  Ofrecemos al mundo un portafolio de la mejor marca de cuidado personal y cuidado del hogar  que anticipe y cumpla con los deseos y necesidades de las personas\n\n  ## SOCIOS: \n  Fomentamos una red de socios inspirados en lealtad, respeto, integridad y trabajo en equipo.\n\n  ## PLANETA: \n  Somos personas responsables que ayudan a sostener el planeta y hacemos comunidades sostenibles\n\n  ## UTILIDADES: \n  Agilizar beneficios para los accionistas cumpliendo con todas nuestras responsabilidades\n\n  ## PRODUCTIVIDAD:\nSomos una corporación efectiva, rápida en acción, elegante y accesible\n\n# Valores de Nuestra Empresa\n\n1. Liderazgo: Solo con valores se crea un mundo mejor\n\n2. Integridad: Hazlo bien aunque nadie te mire\n\n3. Responsabilidad: Si debe hacerse... Yo me encargo\n\n4. Pasión: Comprometerse con la mente y el corazón\n\n5. Diversidad: Tan inclusivo como nuestra marca\n\n6. Calidad: Si lo hacemos nosotros entonces es bueno'
      }
      title={'Acerca de Nosotros'}
    />
  );
};

export default About;
