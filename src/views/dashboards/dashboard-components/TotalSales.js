import React from 'react';
import { Typography, Box, Divider } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import Chart from 'react-apexcharts';
import FeatherIcon from 'feather-icons-react';
import ThemeSelect from './ThemeSelect';
import DashboardCard from '../../../components/base-card/DashboardCard';

const TotalSales = () => {
  const theme = useTheme();
  const primary = theme.palette.primary.main;
  const secondary = theme.palette.secondary.main;
  const warning = theme.palette.warning.main;
  const grey = theme.palette.grey.A100;
  const optionstotalsales = {
    labels: ['2021', '2020', '2019'],

    chart: {
      height: 280,
      type: 'donut',
      foreColor: '#adb0bb',
      fontFamily: 'DM sans',
    },
    colors: [primary, secondary, grey],
    dataLabels: {
      enabled: false,
    },
    legend: {
      show: false,
    },
    stroke: {
      colors: ['transparent'],
    },
    plotOptions: {
      pie: {
        donut: {
          size: '78%',
          background: 'transparent',
          labels: {
            show: false,
            name: {
              show: true,
              fontSize: '18px',
              color: undefined,
              offsetY: -10,
            },
            value: {
              show: false,
              color: '#98aab4',
            },
            total: {
              show: false,
              label: 'Our Visitors',
              color: '#98aab4',
            },
          },
        },
      },
    },
    tooltip: {
      theme: 'dark',
      fillSeriesColor: false,
    },
  };
  const seriestotalsales = [25, 35, 35];
  return (
    <DashboardCard title="Roles" subtitle="Overview of Years" >
      <Divider style={{ marginTop: '0px' }} />
      <Box
        display="flex"
        alignItems="center"
        sx={{
          mt: 3,
        }}
      >
        <Typography
          color="textSecondary"
          variant="body1"
          sx={{
            fontSize: 'h5.fontSize',
          }}
        >
          Sales Yearly
        </Typography>
        <Box
          sx={{
            ml: 'auto',
          }}
        >
          <Typography
            variant="h2"
            fontWeight="700"
            sx={{
              marginBottom: '0',
            }}
            gutterBottom
          >
            8,364,398
          </Typography>
        </Box>
      </Box>
      {/* chart */}
      <Box
        sx={{
          mt: 5,
          position: 'relative',
        }}
      >
        <Typography
          sx={{
            marginTop: '8px',
            marginBottom: '0px',
            lineHeight: '35px',
            position: 'relative',
            zIndex: 9,
          }}
          variant="h3"
          gutterBottom
        >
          Summary of Roles will be displayed here
        </Typography>
      </Box>

    </DashboardCard>
  );
};

export default TotalSales;
