import { BarChart } from '@mui/x-charts/BarChart';
import { Card, CardContent,Typography,Grid } from '@mui/material';
import { LineChart } from '@mui/x-charts/LineChart';
import { makeStyles } from '@mui/styles';

export default function BasicBars() {

    const useStyles = makeStyles(() => ({
        typography: {
          position: 'absolute',
          top: 0,
          left: 0,
          color:"white",
          fontSize:"1.5rem",
          margin:"0.2rem",
          marginLeft:"16rem"
          // Additional styles for the Typography component
        },
        grid: {
            position: 'relative',
            marginTop:"2rem",
          },
          velocity:{
            position: 'absolute',
            top: 0,
            left: 0,
            color:"white",
            fontSize:"1.2rem",
            margin:"0.2rem",
            marginLeft:"45rem",
            marginTop:"2.3rem"
          }

    }));

    const classes = useStyles();

  const sprints = [
    { label: 'Sprint 1', date: 'Feb 15-28 2022' },
    { label: 'Sprint 2', date: 'mar 1-14 2022' },
    { label: 'Sprint 3', date: 'mar 15-31 2022' },
    { label: 'Sprint 4', date: 'Apr 1-14 2022' },
  ];

  const uData = [100, 50, 130, 10];
  const pData = [200,30,150,20];
  const xLabels = ['sprint 1', 'sprint 2', 'sprint 3', 'sprint 4'];
  

  return (
    <Card
      elevation={0}
      sx={{
        position: 'relative',
        backgroundColor: (theme) => `${theme.palette.mode === 'dark' ? '#32363e' : ''}`,
        '&:before': {
          content: `""`,
          position: 'absolute',
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
      <Typography variant='h1'  className={`${classes.typography}`}>Story Committed VS Completed</Typography>
      <Typography variant='h1'  className={`${classes.velocity}`}>Velocity:40</Typography>
      <Grid className={`${classes.grid}`} >
        <LineChart
          width={800}
          height={200}
          series={[
            { data: uData, label: '% Total story points completed', color: '#e8251e' },
            { data: pData, label: '% Total story points committed', color: '#07f562' },
          ]}
          xAxis={[{ scaleType: 'point', data: xLabels }]}
          yAxis={[{ disableLine: true, disableTicks: true, tickLabelStyle: { display: 'none' } }]}
          topAxis={{
            position: 'top',
            disableTicks: true,
             tickLabelStyle: { display: 'none' } 
          }}
          grid={{ vertical: true,            
             }}
     
        />
</Grid>
        <BarChart
          xAxis={[
            { scaleType: 'band', data: sprints.map((sprint) => `${sprint.label}\n${sprint.date}`) },
          ]}
          yAxis={[{ disableLine: true, disableTicks: true, tickLabelStyle: { display: 'none' } }]}
          series={[
            { label:"Blocked",data: [5, 2, 9, 8], color: '#ffff00' },
            { label:"Completed",data: [4, 3, 5, 2], color: '#e8251e' },
            { label:"Completed",data: [7, 6, 3, 4], color: '#07f562' },
          ]}
      
          width={800}
          height={200}
        />
      </CardContent>
    </Card>
  );
}





