/** @jsx jsx */
import { jsx, Container, Flex } from 'theme-ui';
import PriceCard from 'components/price-card';
import SectionHeader from 'components/section-header';
import { IoIosCheckmarkCircle, IoIosCloseCircle } from 'react-icons/io';
import PatternBG from 'assets/patternBG.png';

const info1 = 'Limpieza de componentes y puertos'
const info2 = 'Limpieza en zonas de ventilación'
const info3 = 'Comprobación de componentes'
const info4 = 'Comprobación de drivers'
const info5 = 'Mantener el disco duro con al menos 10% de espacio.'
const info6 = 'Reparación de daños'
const info7 = 'Evita daños a futuro'

const packages = [
  {
    name: 'Correctivo',
    description: 'Su precio depende del servicio',
    priceWithUnit: '100.000',
    points: [
      {
        text: info1,
        isAvailable: true,
      },
      {
        text: info2,
        isAvailable: true,
      },
      {
        text: info3,
        isAvailable: true,
      },
      {
        icon: <IoIosCloseCircle />,
        text: info4,
        isAvailable: true,
      },
      {
        icon: <IoIosCloseCircle />,
        text: info5,
        isAvailable: true,
      },
      {
        text: info6,
        isAvailable: true,
      },
      {
        text: info7,
        isAvailable: false,
      },
    ],
  },
  {
    header: 'Recomendado',
    name: 'Preventivo',
    priceWithUnit: '90.000',
    points: [
      {
        text: info1,
        isAvailable: true,
      },
      {
        text: info2,
        isAvailable: true,
      },
      {
        text: info3,
        isAvailable: true,
      },
      {
        text: info4,
        isAvailable: true,
      },
      {
        text: info5,
        isAvailable: true,
      },
      {
        text: info6,
        isAvailable: true,
      },
      {
        text: info7,
        isAvailable: true,
      },
    ],
  },
];
export default function Package() {
  return (
    <section id="pricing" sx={styles.pricing}>
      <Container>
        <SectionHeader
          title="''Prevenir es mejor que lamentar''"
          slogan="TIPOS DE MANTENIMIENTO"
          isWhite={true}
        />
        <Flex
          sx={{
            justifyContent: 'center',
            flexWrap: ['wrap', null, null, 'nowrap'],
          }}
        >
          {packages.map((packageData) => (
            <PriceCard data={packageData} key={packageData.name} />
          ))}
        </Flex>
      </Container>
    </section>
  );
}

const styles = {
  pricing: {
    backgroundColor: 'primary',
    backgroundImage: `url(${PatternBG})`,
    backgroundRepeat: `no-repeat`,
    backgroundPosition: 'center center',
    backgroundSize: 'cover',
    py: [8, null, 9, null, null, 10],
    position: 'relative',
    '&::before': {
      position: 'absolute',
      content: '""',
      top: 0,
      right: 0,
      background:
        'linear-gradient(-45deg, rgba(42,72,125, 0.3) 25%, transparent 25%, transparent 50%, rgba(42,72,125, 0.3) 50%, rgba(42,72,125, 0.3) 75%, transparent 75%, transparent)',
      width: '100%',
      backgroundSize: '350px 350px',
      height: '100%',
      opacity: 0.3,
      zIndex: 0,
    },
  },
};
