import React from 'react';
import { Box, Card, CardContent, Typography, Grid, LinearProgress, Avatar, Tabs, Tab, Divider } from '@mui/material';
import { Line } from 'react-chartjs-2';
import { Chart, registerables,Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title,  Legend } from 'chart.js';
import zoomPlugin from 'chartjs-plugin-zoom';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import ElectricBoltIcon from '@mui/icons-material/ElectricBolt';
import CheckOutlinedIcon from '@mui/icons-material/CheckOutlined';
import { useSelector } from 'react-redux';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import Tooltip from '@mui/material/Tooltip';
import BasicBars from './GraphDashboard';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title,  Legend);
Chart.register(...registerables, zoomPlugin);
const chartData = {
    labels: ['Sprint 2', 'Sprint 3', 'Sprint 4', 'Sprint 5'],
    datasets: [
        {
            label: 'Total points committed',
            data: [20, 50, 60, 40],
            borderColor: '#FFD700',
            backgroundColor: '#FFD700',
            fill: false,
        },
        {
            label: 'Total points completed',
            data: [10, 25, 40, 10],
            borderColor: '#de3632',
            backgroundColor: '#de3632',
            fill: false,
        },
    ],
};
const chartOptions = {
    responsive: true,
    plugins: {
        zoom: {
            zoom: {
                wheel: {
                    enabled: false,
                },
                pinch: {
                    enabled: false,
                },
                mode: 'y',
            },
            pan: {
                enabled: true,
                mode: 'y',
            },
        },
    },
};

const data = [
    { color: '#00FF00', label: 'Total points added:', value: '43 of 50' },
    { color: '#00FFFF', label: 'Total points in progess:', value: '8 of 15' },
    { color: '#800080', label: 'Total points changed:', value: '35 of 35' },
    { color: '#cc3131', label: 'Total points removed:', value: '8 of 15' },
  ];
  const storyIcon = <BookmarkIcon sx={{ backgroundColor: "#259629", borderRadius: "30%", mr: 0.5, fontSize: 'small' }} />
  const taskIcon = <CheckOutlinedIcon sx={{ backgroundColor: "#43B0DC", borderRadius: "30%", mr: 0.5, fontSize: 'small'  }} />
  const featureIcon = <ElectricBoltIcon sx={{ backgroundColor: "#9323A6", borderRadius: "30%", mr: 0.5, fontSize: 'small'  }} />
  const bugIcon = <FiberManualRecordIcon sx={{ backgroundColor: "red",  borderRadius: "30%", mr: 0.5, fontSize: 'small'  }} />

const workflowDistribution = [
  {
    wfTitle: 'TICKETS COMPLETED BY ISSUE TYPE',
    data: [
      { label: 'Bug', value: 4, percentage: 17, icon: bugIcon },
      { label: 'Improvement', value: 5, percentage: 21, icon: taskIcon },
      { label: 'Feature', value: 3, percentage: 13, icon: featureIcon },
      { label: 'Task', value: 10, percentage: 42, icon: taskIcon },
      { label: 'Story', value: 2, percentage: 8, icon: storyIcon }
    ]
  },]
const Dashboard = () => {
    const customizer = useSelector((state) => state.CustomizerReducer);
    const cardStyle = {
        backgroundColor : customizer.activeMode === 'dark' ? "#32363e" : "#fff",
        color: customizer.activeMode === 'dark' ? "#fff" :"#4c4c4c" ,
        marginBottom:2
    }
    return (
        // <Box sx={{ p: 2, backgroundColor: '#282c34', minHeight: '100vh', color: '#fff' }}>
            <Grid container spacing={2}>
                <Grid item xs={6}>
                    <Card sx={cardStyle}>
                        <CardContent>
                            <Tabs value={0} textColor="inherit" indicatorColor="primary">
                                <Tab style={{fontSize:"1.5rem"}} label="Current Sprint Story Points" />
                                {/* <Tab label="Tickets" /> */}
                            </Tabs>
                            <Grid container spacing={2} sx={{ pt: 2 }}>
                                <Grid item xs={6}>
                                    <Typography sx={{fontSize:"1.5rem"}} variant="h5">Committed 86%</Typography>
                                </Grid>
                                <Grid item xs={1}>
                                    <Divider orientation="vertical" sx={{ height: '100%' }} />
                                </Grid>
                                <Grid item xs={5}>
                                    <Typography sx={{fontSize:"1.5rem"}} variant="h5">Completed 30%</Typography>
                                </Grid>
                                <Grid item xs={12}>
                                    <Divider orientation="horizantal" sx={{ height: '100%' }} />
                                </Grid>
                                <Grid item xs={12}>
                                    {data.map((item, index) => (
                                        <Box key={index} sx={{ display: 'flex', alignItems: 'center', mt: 1 }}>
                                            <Avatar sx={{ bgcolor: item.color, border:`1px solid ${item.color}`,color:item.color, width: 12, height: 12, mr: 1 }} />
                                            <Typography variant="body2">{item.label}</Typography>
                                            <Typography variant="body2" sx={{ ml: 1, color: customizer.activeMode === "dark" ? 'rgba(255, 255, 255, 0.7)' :"#0a0909" }}>{item.value}</Typography>
                                        </Box>
                                    ))}
                                </Grid>
                            </Grid>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={6}>
                    <Card sx={cardStyle}>
                    <Grid container spacing={1} >
                    <Grid item xs={4}>
                        <CardContent>
                            <Typography sx={{display: 'inline-flex', alignItems: 'center',fontSize:"14px"}}>Average <Tooltip title="Average Cycle Time"><InfoOutlinedIcon fontSize="medium" sx={{ marginLeft: '4px' }}/></Tooltip></Typography>
                            <Typography variant="h3">2.4 Days</Typography>
                            <Typography variant="subtitle1" color="success.main">↓ 42%</Typography>
                        </CardContent>
                        </Grid>
                        {/* </Grid> */}
                        <Grid item xs={4}>
                        <CardContent>
                        <Typography sx={{display: 'inline-flex', alignItems: 'center',fontSize:"14px"}}>CountDown <Tooltip title="Count Down to Release"><InfoOutlinedIcon fontSize="medium" sx={{ marginLeft: '4px' }} /></Tooltip></Typography>
                            <Typography variant="h6"></Typography>
                            <Typography variant="h3">2.4 Days</Typography>
                        </CardContent>
                        </Grid>
                        <Grid item xs={4}>
                        <CardContent>
                        <Typography sx={{display: 'inline-flex', alignItems: 'center',fontSize:"14px"}}>CountDown <Tooltip title="Count Down to Customer Demo"><InfoOutlinedIcon fontSize="medium" sx={{ marginLeft: '4px' }} /></Tooltip></Typography>
                            <Typography variant="h3">2.4 Days</Typography>
                        </CardContent>
                        </Grid>
                        </Grid>
                    </Card>
                    {/* <Grid item xs={6}> */}
                    <Card sx={cardStyle}>
                        <CardContent>
                        <Box display="flex" alignItems="center" justifyContent="space-between">
                    <Typography variant="subtitle1" sx={{ display: 'inline-flex', alignItems: 'center', fontSize: '14px' }}>
                    Tickets completed by issue type
                        {/* <InfoOutlinedIcon fontSize="medium" sx={{ marginLeft: '4px' }} /> */}
                    </Typography>
                </Box>
                {workflowDistribution.map((item1, index1) => (
                    item1.data.map((item,index) => {
                      return(
                        <Box key={index} display="flex" justifyContent="space-between" alignItems="center" mt={0.5}>
                        <Typography variant="body2" sx={{ display: 'inline-flex', alignItems: 'center', width: '25%' }}>
                        {item.icon ? item.icon : "" } {item.label}
                        </Typography>
                        <Box display="flex" alignItems="center" sx={{ width: '70%' }}>
                            <Typography variant="body2" sx={{ width: '30px', textAlign: 'right', marginLeft: '50px' }}>{item.value}</Typography>
                            <Box sx={{ width: `${item.percentage}%`, height: '8px', backgroundColor: 'rgb(3, 201, 215)', marginLeft: '5px', borderRadius: '8px' }} />
                            <Typography variant="body2" sx={{ marginLeft: '4px' }}>{item.percentage}%</Typography>
                        </Box>
                    </Box>
                      )
                    })
                ))}
                        </CardContent>
                    </Card>
                {/* </Grid> */}
                </Grid>
                <Grid item xs={12} sx={{maxHeight:"200px", overflow:"auto"}} style={cardStyle} >
                    {/* <Card sx={cardStyle}>
                        <CardContent> */}
                           <BasicBars/>
                        {/* </CardContent>
                    </Card> */}
                </Grid>
            </Grid>
        // </Box>
    );
};

export default Dashboard;
