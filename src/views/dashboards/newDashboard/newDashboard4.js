import * as React from 'react';
import { BarChart } from '@mui/x-charts/BarChart';
import { Card, CardContent, Typography, Grid } from '@mui/material';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles(() => ({
  headerContainer: {
    display: 'flex',
    alignItems: 'center',
    width: '100%',
  },
  borderedBox: {
    borderTop: '1px solid white',
    borderLeft: '1px solid white',
    borderBottom: 'none',
    borderRight: 'none',
    padding: '1rem',
    margin: '0.2rem',
    display: 'inline-block',
  },
  typography: {
    color: "white",
    fontSize: "1.5rem",
    margin: "0.2rem",
  },
  typography4: {
    display:"flex",
    color: "#e6e5df",
    fontSize: "1rem",
    margin: "0rem",
    marginLeft: "7rem"
  },
  bigNumber: {
    color: "white",
    fontSize: "4rem",
    margin: "0.2rem",
  },
  grid: {
    marginTop: "2rem",
  },
  velocity: {
    position: 'absolute',
    top: 0,
    left: 0,
    color: "white",
    fontSize: "1.2rem",
    margin: "0.2rem",
    marginLeft: "45rem",
    marginTop: "2.3rem"
  },

 
}));

const uData = [20, 50, 50, 100, 100, 150, 80];
const pData = [20, 150, 200, 180, 160, 140, 90];
const amtData = [50, 80, 220, 120, 70, 100, 200];
const rsData = [30, 200, 100, 20, 230, 170, 53];

const xLabels = [
  'Sprint 1',
  'Sprint 2',
  'Sprint 3',
  'Sprint 4',
  'Sprint 5',
  'Sprint 6',
  'Sprint 7',
];

export default function MixedBarChart() {
  const classes = useStyles();
  const verticalData = [1, 2, 3, 4, 5];

  return (
    <Card
      elevation={0}
      sx={{
        position: 'relative',
        backgroundColor: (theme) => `${theme.palette.mode === 'dark' ? '#32363e' : ''}`,
        '&:before': {
          content: `""`,
          width: '100%',
          height: '100%',
          backgroundRepeat: 'no-repeat',
          backgroundSize: '45%',
          backgroundColor: (theme) => `${theme.palette.mode === 'dark' ? '#32363e' : ''}`,
          transform: (theme) => `${theme.direction === 'rtl' ? '' : 'unset'}`,
        },
        borderWidth: '0px',
        margin: '10px',
        padding: '5px',
        borderRadius: '10px',
        transition: 'transform 0.3s ease',
        cursor: 'pointer',
      }}
    >
      <CardContent>
        <div className={classes.headerContainer}>
          <div className={classes.borderedBox}>
            <Typography variant='h1' className={classes.typography}>Story Point Per Sprint</Typography>
            <Typography variant='h4' className={classes.typography4}>Average Velocity</Typography>
          </div>
          <Typography variant='h1' className={classes.bigNumber}>39</Typography>
        </div>
        <Grid className={classes.grid}>
          <BarChart
            width={600}
            height={300}
            series={[
              { data: pData, label: 'Planned', stack: 'stack1', color: "#73dbde" },
              { data: uData, label: 'Incomplete', stack: 'stack1', color: "#3723cf" },
              { data: amtData, label: 'Completed', stack: 'stack2', color: "#058254" },
              { data: rsData, label: 'Completed Late', stack: 'stack2', color: "#52f03a" },
            ]}
            xAxis={[{ data: xLabels, scaleType: 'band' }]}
            yAxis={[
              {
                scaleType: 'linear',
                min: 0,
                max: 350,
                tickNumber: 8,
                tickInterval: 50,
                tickFormatter: (value) => `${value}`,
              },
            ]}
          />
        </Grid>
      </CardContent>
    </Card>
  );
}
