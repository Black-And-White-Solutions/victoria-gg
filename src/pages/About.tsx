import React, { VoidFunctionComponent } from 'react';
import BlogEntry from '../components/BlogEntryComponents';

const BlogContent: string =
  /* eslint-disable */
  `# Nuestra Visión :
Victoria G&G es una empresa familiar dedicada a la fabricación de productos de aseo personal y que lleva bienestar físico y financiero a las familias, brindando productos de altísima calidad que cuida el medio ambiente y la salud convirtiéndose así en la distribuidora nacional e internacional más importante del país

# Nuestra Misión
## Gente: 
Inspiramos para ser los mejores, ofrecemos el mejor lugar para trabajar por que mantenemos un sitio de paz , camaradería y liderazgo.
## Portafolio: 
Ofrecemos al mundo un portafolio de la mejor marca de cuidado personal y cuidado del hogar que anticipe y cumpla con los deseos y necesidades de las personas.
## Socios:
Fomentamos una red de socios inspirados en lealtad, respeto, integridad y trabajo en equipo.
## Planeta:
Somos personas responsables que ayudan a sostener el planeta y hacemos comunidades sostenibles.
## Utilidades: 
Agilizar beneficios para los accionistas cumpliendo con todas nuestras responsabilidades.
## Productividad:  
Somos una corporación efectiva, rápida en acción, elegante y accesible.\ 

# Valores de Nuestra Empresa
1. Liderazgo: Solo con valores se crea un mundo mejor

2. Integridad: Hazlo bien aunque nadie te mire

3. Responsabilidad: Si debe hacerse... Yo me encargo

4. Pasión: Comprometerse con la mente y el corazón

5. Diversidad: Tan inclusivo como nuestra marca

6. Calidad: Si lo hacemos nosotros entonces es bueno`;

/* eslint-enable */

const About: VoidFunctionComponent = () => {
  return <BlogEntry content={BlogContent} title={'Acerca de Nosotros'} />;
};

export default About;
