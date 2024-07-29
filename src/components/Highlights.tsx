import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import AutoFixHighRoundedIcon from '@mui/icons-material/AutoFixHighRounded';
import ConstructionRoundedIcon from '@mui/icons-material/ConstructionRounded';
import QueryStatsRoundedIcon from '@mui/icons-material/QueryStatsRounded';
import SettingsSuggestRoundedIcon from '@mui/icons-material/SettingsSuggestRounded';
import HouseIcon from '@mui/icons-material/House';
import FamilyRestroomIcon from '@mui/icons-material/FamilyRestroom';
import TextSnippetIcon from '@mui/icons-material/TextSnippet';

const items = [
  {
    icon: <ConstructionRoundedIcon />,
    title: 'Trabalhista',
    description:
      'Assessoria consultiva de empregados e empregadores quanto a seus deveres, obrigações e contenciosa nos litígios processuais.',
  },
  {
    icon: <SettingsSuggestRoundedIcon />,
    title: 'Cível',
    description:
      'Assessoria jurídica em litígios processuais nos casos de cobrança, adjudicação compulsória, entre outras.',
  },
  {
    icon: <FamilyRestroomIcon />,
    title: 'Família e Sucessões',
    description:
      'Assessoria familiar e defesa em divórcios, reconhecimento e dissolução de união estável, ações de alimentos e a divisão de bens de herança.',
  },
  {
    icon: <AutoFixHighRoundedIcon />,
    title: 'Consumidor',
    description:
      'Acompanhamento de demandas consumeristas por consumidores e fornecedores da cadeia produtiva.',
  },
  {
    icon: <HouseIcon />,
    title: 'Imobiliário',
    description:
      'Assessoria consultiva de negócios imobiliários e regularização de imóveis.',
  },
  {
    icon: <TextSnippetIcon />,
    title: 'Contratos',
    description:
      'Confecção de contratos de prestação de serviços, compra e venda, obrigações, entre outros. Com o objetivo de harmonizar os interesses entre as partes.',
  },
  {
    icon: <QueryStatsRoundedIcon />,
    title: 'Empresarial',
    description:
      'Assessoria full service para empresas e empresários.',
  },
];

export default function Highlights() {
  return (
    <Box
      id="highlights"
      sx={{
        pt: { xs: 4, sm: 12 },
        pb: { xs: 8, sm: 16 },
        color: 'white',
        bgcolor: '#06090a',
      }}
    >
      <Container
        sx={{
          position: 'relative',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: { xs: 3, sm: 6 },
        }}
      >
        <Box
          sx={{
            width: { sm: '100%', md: '60%' },
            textAlign: { sm: 'left', md: 'center' },
          }}
        >
          <Typography component="h2" variant="h4">
          Áreas de Atuação
          </Typography>
          <Typography variant="body1" sx={{ color: 'grey.400' }}>
            Conheça nossa versatilidade para com você.
          </Typography>
        </Box>
        <Grid container spacing={2.5}>
          {items.map((item, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Stack
                direction="column"
                color="inherit"
                component={Card}
                spacing={1}
                useFlexGap
                sx={{
                  p: 3,
                  height: '100%',
                  border: '1px solid',
                  borderColor: 'grey.800',
                  background: 'transparent',
                  backgroundColor: 'grey.900',
                }}
              >
                <Box sx={{ opacity: '50%' }}>{item.icon}</Box>
                <div>
                  <Typography fontWeight="medium" gutterBottom>
                    {item.title}
                  </Typography>
                  <Typography variant="body2" sx={{ color: 'grey.400' }}>
                    {item.description}
                  </Typography>
                </div>
              </Stack>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}