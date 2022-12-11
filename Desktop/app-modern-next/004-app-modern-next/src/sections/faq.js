/** @jsx jsx */
import { jsx, Container, Box } from 'theme-ui';
import SectionHeader from 'components/section-header';
import Accordion from 'components/accordion/accordion';
const faqs = [
  {
    title: '¿Tienen servicio de domicilio?',
    contents: (
      <div>
        Sí, actualmente contamos con servicio de domicilio en toda
        la  ciudad de Cali, Colombia.
      </div>
    ),
  },
  {
    title: '¿Hay garantía en el servicio?',
    contents: (
      <div>
        Nuestro servicio de mantenimiento cuenta con 4 meses de garantía. Pero
        esta NO cubre daños ajenos al servicio brindado por la empresa.
      </div>
    ),
  },
  {
    title: `¿Hay algun soporte en cuento a las actualizaciones?`,
    contents: (
      <div>
        Entendiendo que las actualizaciones implican cambios nuestro equipo de soporte técnico
        estára disponible para atender sus inquietudes o problemas.
      </div>
    ),
  },
  {
    title: `¿Hacen mantenimientos para empresas?`,
    contents: (
      <div>
        Sí, para mantenimientos empresariales se tienen en cuenta varios factores
        entre estos personal necesario, numero de equipos y tiempo requrido.
      </div>
    ),
  },
];
export default function Faq() {
  return (
    <section id='faq' sx={{ variant: 'section.faq' }}>
      <Container>
        <SectionHeader
          title="Algunas preguntas frecuentes"
          slogan="APARTADO DE PREGUNTAS"
        />
        <Box
          sx={{
            display: 'flex',
            width: ['100%', null, null, '650px', '745px'],
            flexDirection: 'column',
            mx: 'auto',
            my: -4,
          }}
        >
          <Accordion items={faqs} />
        </Box>
      </Container>
    </section>
  );
}
