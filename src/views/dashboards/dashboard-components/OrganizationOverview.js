import React from 'react';
import { Typography, Box, Stack } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import Chart from 'react-apexcharts';
import FeatherIcon from 'feather-icons-react';
import DashboardCard from '../../../components/base-card/DashboardCard';

const SalesOverview = () => {
  const theme = useTheme();
  const primary = theme.palette.primary.main;
  const secondary = theme.palette.secondary.main;

  const optionssalesoverview = {
    grid: {
      show: true,
      borderColor: 'transparent',
      strokeDashArray: 2,
      padding: {
        left: 0,
        right: 0,
        bottom: -13,
      },
    },
    plotOptions: {
      bar: {
        horizontal: false,
        columnWidth: '42%',
        endingShape: 'rounded',
        borderRadius: 5,
      },
    },

    colors: [primary, secondary],
    fill: {
      type: 'solid',
      opacity: 1,
    },
    chart: {
      toolbar: {
        show: false,
      },
      foreColor: '#adb0bb',
      fontFamily: "'DM Sans',sans-serif",
    },
    dataLabels: {
      enabled: false,
    },
    markers: {
      size: 0,
    },
    legend: {
      show: false,
    },
    xaxis: {
      type: 'category',
      categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
      labels: {
        style: {
          cssClass: 'grey--text lighten-2--text fill-color',
        },
      },
    },
    yaxis: {
      show: true,
      min: 100,
      max: 400,
      tickAmount: 3,
    },
    stroke: {
      show: true,
      width: 5,
      lineCap: 'butt',
      colors: ['transparent'],
    },
    tooltip: {
      theme: 'dark',
    },
  };
  const seriessalesoverview = [
    {
      name: 'Ample Admin',
      data: [355, 390, 300, 350, 390, 180],
    },
    {
      name: 'Pixel Admin',
      data: [280, 250, 325, 215, 250, 310],
    },
  ];
  return (
    <DashboardCard
      title="Organization Profile"
      subtitle="Ample Admin Vs Pixel Admin"
      customdisplay="block"
      linkTo = "/user-profile"
    >
      <Box>
      <Typography
        sx={{
          marginBottom: '0px',
          lineHeight: '35px',
          position: 'relative',
          zIndex: 9,
        }}
        variant="h3"
        gutterBottom
      >
        Organization Name: {}<br />
        Name : {}
      </Typography>
      </Box>
    </DashboardCard>
  );
};

export default SalesOverview;
