/** @jsx jsx */
import { jsx } from 'theme-ui';
import { Container, Grid } from 'theme-ui';
import SectionHeader from '../components/section-header';
import FeatureCardColumn from 'components/feature-card-column.js';
import setting from 'assets/key-feature/setting.svg';
import Editing from 'assets/key-feature/editing.svg';
import Speed from 'assets/key-feature/speed.svg';

const data = [
  {
    id: 1,
    imgSrc: setting,
    altText: 'setting',
    title: 'Experiencia',
    text:
      'Contamos con mas de 5 años de experiencia en mantenimiento de hardware y actualización de software.',
  },
  {
    id: 2,
    imgSrc: Editing,
    altText: 'Monitoring',
    title: 'Monitoreo',
    text:
      'Registramos, monitoreamos y cconsignamos lo necesario para el desarrollo del servicio.',
  },
  {
    id: 3,
    imgSrc: Speed,
    altText: 'Quality',
    title: 'Tiempo',
    text:
      'Definimos una fecha de entrega basandonos en la complejidad del servicio, para realizar un trabajo rapido y de calidad.',
  },
];

export default function KeyFeature() {
  return (
    <section sx={{ variant: 'section.keyFeature' }} id="feature">
      <Container>
        <SectionHeader
          slogan="Características de calidad"
          title="Sobre nuestra operación"
        />

        <Grid sx={styles.grid}>
          {data.map((item) => (
            <FeatureCardColumn
              key={item.id}
              src={item.imgSrc}
              alt={item.title}
              title={item.title}
              text={item.text}
            />
          ))}
        </Grid>
      </Container>
    </section>
  );
}

const styles = {
  grid: {
    px: [0, null, null, '40px', null, '80px'],
    pt: [0, null, null, null, null, null, null, 3],
    gridGap: ['35px 0', null, '40px 0'],
    gridTemplateColumns: [
      'repeat(1,1fr)',
      null,
      'repeat(2,1fr)',
      null,
      'repeat(3,1fr)',
    ],
    width: ['100%', '80%', '100%'],
    mx: 'auto',
    '& > div': {
      px: [0, '15px', null, '25px', null, '30px', '40px', '60px'],
    },
  },
};
