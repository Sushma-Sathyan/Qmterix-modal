/* eslint-disable react/jsx-key */
import React, { useEffect } from 'react';
import { Grid } from '@mui/material';
import {
  WelcomeCard,
  BlogCard,
  Earnings,
  MonthlySales,
  SalesOverview,
  TotalSales,
  ProductPerformance,
  WeeklyStats,
  DailyActivities,
  TrendsWidget,
  StatusCard
} from './dashboard-components';

import PageContainer from '../../components/container/PageContainer';
import BaseCard from '../../components/base-card/BaseCard';
import { Typography } from '@mui/material';
// import StatusCard from './dashboard-components/StatusCard';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import TaskIcon from '@mui/icons-material/Task';
import ElectricBoltIcon from '@mui/icons-material/ElectricBolt';
import CheckOutlinedIcon from '@mui/icons-material/CheckOutlined';
import Dashboard1 from "../../views/dashboards/newDashboard/newDashboard1"
import getAllTicketsCompleted from '../../actions/TicketsCompletedActions/getAllTicketsCompletedActions';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';

const Dashboard = () => {

  
  const trends = [
    {
      widgetTitle: 'TICKETS COMPLETED',
      widgetValue: '25',
      change: 6,
      caption: 'Tickets',
      direction: 'up',
      graphdata: [
        { name: 'Day 1', value: 11, fill: '#444444' },
        { name: 'Day 2', value: 18, fill: '#444444' },
        { name: 'Day 3', value: 20, fill: '#444444' },
        { name: 'Day 4', value: 17, fill: '#444444' },
        { name: 'Day 5', value: 16, fill: '#444444' },
        { name: 'Day 6', value: 10, fill: '#444444' },
        { name: 'Day 7', value: 25, fill: '#00C49F' },
      ]
    },
    {
      widgetTitle: 'VELOCITY',
      widgetValue: '140',
      change: 9,
      caption: 'Sprint Points',
      direction: 'up',
      graphdata: [
        { name: 'Day 1', value: 135, fill: '#444444' },
        { name: 'Day 2', value: 100, fill: '#444444' },
        { name: 'Day 3', value: 110, fill: '#444444' },
        { name: 'Day 4', value: 115, fill: '#444444' },
        { name: 'Day 5', value: 125, fill: '#444444' },
        { name: 'Day 6', value: 90, fill: '#444444' },
        { name: 'Day 7', value: 140, fill: '#00C49F' },
      ]
    },
    {
      widgetTitle: 'MEDIAN CYCLE TIME',
      widgetValue: '7.4',
      change: 0,
      caption: 'Days',
      direction: 'side',
      graphdata: [
        { name: 'Day 1', value: 8.2, fill: '#444444' },
        { name: 'Day 2', value: 5.9, fill: '#444444' },
        { name: 'Day 3', value: 7, fill: '#444444' },
        { name: 'Day 4', value: 8, fill: '#444444' },
        { name: 'Day 5', value: 6.5, fill: '#444444' },
        { name: 'Day 6', value: 7.4, fill: '#444444' },
        { name: 'Day 7', value: 7.4, fill: '#00C49F' },
      ]
    },
    {
      widgetTitle: 'MEDIAN QUEUE TIME',
      widgetValue: '3.4',
      change: 43,
      caption: 'Days',
      direction: 'down',
      graphdata: [
        { name: 'Day 1', value: 4, fill: '#444444' },
        { name: 'Day 2', value: 8, fill: '#444444' },
        { name: 'Day 3', value: 5, fill: '#444444' },
        { name: 'Day 4', value: 9, fill: '#444444' },
        { name: 'Day 5', value: 7, fill: '#444444' },
        { name: 'Day 6', value: 3.7, fill: '#444444' },
        { name: 'Day 7', value: 3.4, fill: '#00C49F' },
      ]
    },
    {
      widgetTitle: 'TOTAL JITTER',
      widgetValue: '47',
      change: 1,
      caption: 'Jitter',
      direction: 'up',
      graphdata: [
        { name: 'Day 1', value: 16, fill: '#444444' },
        { name: 'Day 2', value: 11, fill: '#444444' },
        { name: 'Day 3', value: 9, fill: '#444444' },
        { name: 'Day 4', value: 10, fill: '#444444' },
        { name: 'Day 5', value: 17, fill: '#444444' },
        { name: 'Day 6', value: 18, fill: '#444444' },
        { name: 'Day 7', value: 19, fill: '#00C49F' },
      ]
    },
    {
      widgetTitle: 'BACKFLOW RATE',
      widgetValue: '18',
      change: 11,
      caption: 'Backflow Rate',
      direction: 'down',
      graphdata: [
        { name: 'Day 1', value: 27, fill: '#444444' },
        { name: 'Day 2', value: 25, fill: '#444444' },
        { name: 'Day 3', value: 26, fill: '#444444' },
        { name: 'Day 4', value: 22, fill: '#444444' },
        { name: 'Day 5', value: 17, fill: '#444444' },
        { name: 'Day 6', value: 20, fill: '#444444' },
        { name: 'Day 7', value: 18, fill: '#00C49F' },
      ]
    }
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
  },
  {
    wfTitle: 'HOURS COMPLETED BY ISSUE TYPE',
    data: [
      { label: 'Bug', value: 17, percentage: 17, icon: bugIcon },
      { label: 'Improvement', value: 25, percentage: 21, icon: taskIcon },
      { label: 'Feature', value: 12, percentage: 13, icon: featureIcon },
      { label: 'Task', value: 48, percentage: 42, icon: taskIcon },
      { label: 'Story', value: 8, percentage: 8, icon: storyIcon }
    ]
  },
  {
    wfTitle: 'TICKETS COMPLETED BY ISSUE TYPE',
    data: [
      { label: '< 1 day', value: 2, percentage: 8 },
    { label: '< 3 days', value: 2, percentage: 8 },
    { label: '< 1 week', value: 5, percentage: 21 },
    { label: '< 2 weeks', value: 5, percentage: 21 },
    { label: '> 2 weeks', value: 10, percentage: 42 }
    ]
  }
];
const [ticket,setTickets] = React.useState([]);
const [dynamicWidgets, setDynamicWidgets] = React.useState([]);



const handleChange1 = (title) => {
  const newWidget = {
      widgetTitle: title,
      widgetValue: '140',
      change: 9,
      caption: 'Sprint Points',
      direction: 'up',
      graphdata: [
          { name: 'Day 1', value: 135, fill: '#444444' },
          { name: 'Day 2', value: 100, fill: '#444444' },
          { name: 'Day 3', value: 110, fill: '#444444' },
          { name: 'Day 4', value: 115, fill: '#444444' },
          { name: 'Day 5', value: 125, fill: '#444444' },
          { name: 'Day 6', value: 90, fill: '#444444' },
          { name: 'Day 7', value: 140, fill: '#00C49F' },
      ]
  };

  setDynamicWidgets(prevWidgets => {
      const updatedWidgets = [...prevWidgets, newWidget];
      localStorage.setItem('dynamicWidgets', JSON.stringify(updatedWidgets));
      return updatedWidgets;
  });
};


const dispatch = useDispatch();
useEffect(() => {
  const savedWidgets = localStorage.getItem('dynamicWidgets');
  if (savedWidgets) {
      setDynamicWidgets(JSON.parse(savedWidgets));
  }


  const payload = {
    "PROJECT_KEY": "BFAA"
  }
  const fetchAllProjectList = async () => {
      try {
          const getAllProjectList = await getAllTicketsCompleted(dispatch,payload);
          if (getAllProjectList.code === "000") {
            setTickets(getAllProjectList?.response);
          }
      } catch (error) {
          console.error('Fetching roles failed:', error.message);
      }
  };
 
  fetchAllProjectList();

}, []);



// const handleChange1 = (title) => {

//     // Add a new widget object to the dynamicWidgets state array
//     setDynamicWidgets(prevWidgets => [
//       ...prevWidgets,
//       {
//         widgetTitle:title,  // Replace with your default widget properties
//         widgetValue: '140',
//         change: 9,
//         caption: 'Sprint Points',
//         direction: 'up',
//         graphdata: [
//           { name: 'Day 1', value: 135, fill: '#444444' },
//           { name: 'Day 2', value: 100, fill: '#444444' },
//           { name: 'Day 3', value: 110, fill: '#444444' },
//           { name: 'Day 4', value: 115, fill: '#444444' },
//           { name: 'Day 5', value: 125, fill: '#444444' },
//           { name: 'Day 6', value: 90, fill: '#444444' },
//           { name: 'Day 7', value: 140, fill: '#00C49F' },
//         ]
//       }
//     ]);
  
// };


return(
  // 2

  <PageContainer title="Analytical Dashboard" description="this is Analytical Dashboard">
    <Grid container spacing={0}>
      {/* ------------------------- row 1 ------------------------- */}
      <Grid item xs={12} lg={12}>
      < Dashboard1  handleAddWidget={handleChange1} dynamicWidgets={dynamicWidgets}/>
      </Grid>
      {/* Next Row */}
    <Grid item xs={12}>
        <Typography variant="h4" gutterBottom>
          Trends
        </Typography>
      </Grid>
      {trends.map((trend) => 
      <Grid item xs={12} sm={6} md={4} lg={4}>
        <TrendsWidget trendsData = {trend} />
      </Grid>)}
      {dynamicWidgets.map((trend, index) =>
  <Grid key={`dynamic-${index}`} item xs={12} sm={6} md={4} lg={4}>
    <TrendsWidget trendsData={trend} />
  </Grid>
)}

      <Grid item xs={12} style={{marginTop: '10px'}}>
        <Typography variant="h4" gutterBottom>
          Workflow Distribution
        </Typography>
      </Grid>
      {workflowDistribution.map((workflow) =>
      <Grid item xs={12} sm={6} md={4} lg={4}>
        <StatusCard workflow={workflow} />
      </Grid>)}

      {/* <Grid>
        <StatusCard workflow={workflowDistribution[0]} />
      </Grid> */}


      {/* <Grid item xs={12} sm={6} md={4} lg={4}>
        <TicketsCompleted />
      </Grid>
      <Grid item xs={12} sm={6} md={4} lg={4}>
        <Velocity />
      </Grid>
      <Grid item xs={12} sm={6} md={4} lg={4}>
        <MedianCycleTime />
      </Grid>
      <Grid item xs={12} sm={6} md={4} lg={4}>
        <MedianQueueTime />
      </Grid>
      <Grid item xs={12} sm={6} md={4} lg={4}>
        <TotalJitter />
      </Grid>
      <Grid item xs={12} sm={6} md={4} lg={4}>
        <Velocity />
      </Grid> */}
    </Grid>
  </PageContainer>
);
}

Dashboard.propTypes = {
  dropDownValue: PropTypes.any, 
}

export default Dashboard;
