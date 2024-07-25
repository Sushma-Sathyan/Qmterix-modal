import React from 'react';
import { Box, Card, CardContent, Typography, Grid, LinearProgress, CircularProgress } from '@mui/material';

const Dashboard = () => {
  return (
    <Box sx={{ p: 2, backgroundColor: '#282c34', minHeight: '100vh' }}>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6} md={4}>
          <Card sx={{ backgroundColor: '#3e416d', color: '#fff' }}>
            <CardContent>
              <Typography variant="h6">Story Points</Typography>
              <Typography variant="h4">Completion 86%</Typography>
              <Typography variant="subtitle1">Total points completed: 43 of 50</Typography>
              <Typography variant="subtitle1">Committed & completed: 35 of 35</Typography>
              <Typography variant="subtitle1">Added & completed: 8 of 15</Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Card sx={{ backgroundColor: '#3e416d', color: '#fff' }}>
            <CardContent>
              <Typography variant="h6">Median queue time</Typography>
              <Typography variant="h3">2.4 Days</Typography>
              <Typography variant="subtitle1">↓ 42%</Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12}>
          <Card sx={{ backgroundColor: '#3e416d', color: '#fff' }}>
            <CardContent>
              <Typography variant="h6">Tickets completed by issue type</Typography>
              <Grid container spacing={1}>
                <Grid item xs={6} sm={2}>
                  <Typography>Bug</Typography>
                  <LinearProgress variant="determinate" value={17} />
                </Grid>
                <Grid item xs={6} sm={2}>
                  <Typography>Improvement</Typography>
                  <LinearProgress variant="determinate" value={21} />
                </Grid>
                <Grid item xs={6} sm={2}>
                  <Typography>Feature</Typography>
                  <LinearProgress variant="determinate" value={13} />
                </Grid>
                <Grid item xs={6} sm={2}>
                  <Typography>Task</Typography>
                  <LinearProgress variant="determinate" value={42} />
                </Grid>
                <Grid item xs={6} sm={2}>
                  <Typography>Story</Typography>
                  <LinearProgress variant="determinate" value={8} />
                </Grid>
              </Grid>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Dashboard;
