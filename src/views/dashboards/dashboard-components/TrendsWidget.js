/* eslint-disable react/prop-types */
// TicketsCompleted.js
import React, {useState} from 'react';
import { Card, CardContent, Typography } from '@mui/material';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer,  PieChart, Pie, } from 'recharts';
import { Box, Button, Stack } from '@mui/material';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';



const TrendsWidget = (props) => {
    
    const [isHovered, setIsHovered] = useState(false);
    const handleMouseEnter = () => {
        setIsHovered(true);
    };
    const handleMouseExit = () => {
        setIsHovered(false);
    };

    const trendsData = props.trendsData;
    const data = trendsData.graphdata;
    let unicodeValue = '\u2197';
    if(trendsData.direction === 'down'){
        unicodeValue = '\u2198';
    }
    if(trendsData.direction === 'side'){
        unicodeValue = '\u2192'
    }
    let changeColor = "#00FF00";
    if(trendsData.change === 0){
        changeColor = null;
    }
    if(trendsData.caption === "Jitter"){
        changeColor = "#FF8F00";
    }
    return(
    <Card elevation={0}
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
        transform: (theme) => `${theme.direction === 'rtl' ? '' : 'unset'}`,
        // backgroundPosition: {
        //   xs: 'top 0px right -9px',
        // },
      },
      borderWidth: '0px',
      margin: '10px',
      padding: '5px',
      borderRadius: '10px',
      transition: 'transform 0.3s ease',
      transform: isHovered ? 'scale(1.15)' : 'scale(1)',
      cursor: 'pointer'
    }}
    onMouseEnter={handleMouseEnter}
    onMouseLeave={handleMouseExit}>
      <CardContent>
        <Box display="flex" alignItems="center">
            <Typography variant="subtitle1" sx={{ display: 'inline-flex', alignItems: 'center' }}>
                {trendsData.widgetTitle}
                <InfoOutlinedIcon fontSize="medium"  sx={{  marginLeft: '4px' }} />
            </Typography>
        </Box>
        <Box display="flex" justifyContent="space-between" alignItems="center">
            <Box >
                <Box display="flex" alignItems="baseline">
                    <Typography variant="h1" component="h1" style={{ display: 'inline-flex', alignItems: 'center', fontWeight: 'bold', fontSize: '3rem' }}>{trendsData.widgetValue}</Typography>
                    <Typography variant="body1" style={{ marginLeft: '5px', color: changeColor }}>
                    {unicodeValue} {trendsData.change}%
                    </Typography>
                </Box>
                <Typography variant="body2" style={{ color: '#A0A0A0', marginTop: '-10px' }}>{trendsData.caption}</Typography>
            </Box>
            
            <ResponsiveContainer width="50%" height={80}>
                <BarChart data={data} barCategoryGap={1}>
                    <XAxis dataKey="name" hide />
                    <YAxis hide />
                    <Bar dataKey="value" barSize={10} /> {/* Set barSize for thinner bars */}
                </BarChart>
            </ResponsiveContainer>
            </Box>
            {isHovered && (
                    <Box display="flex" flexDirection="row">
                        <Box style={{ width: '65%'}}>
                            <ResponsiveContainer width="100%" height={100}>
                                <PieChart>
                                    <Pie data={data} dataKey="value" nameKey="name" cx="35%" cy="55%" outerRadius={25} fill="#8884d8" label />
                                    <Tooltip />
                                </PieChart>
                            </ResponsiveContainer>
                            <Typography variant="body2" style={{ marginBottom: '8px', alignItems: 'center' }}>Weekly Distribution</Typography>
                        </Box>
                        <Box style={{ width: '35%'}}>
                            <Typography variant="subtitle1" style={{ marginTop: '8px', fontSize: '11px', display: 'block', marginLeft: '-25px' }}>Most Productive Day</Typography>
                            <Typography variant="subtitle1" style={{ marginTop: '2px', alignItems: 'center', fontSize: '14px', fontWeight: 'bold', marginLeft: '-25px' }}>Monday</Typography>
                            <Typography variant="subtitle1" style={{ marginTop: '8px', fontSize: '11px', display: 'block', marginLeft: '-25px' }}>Least Productive Day</Typography>
                            <Typography variant="subtitle1" style={{ marginTop: '2px', alignItems: 'center', fontSize: '14px', fontWeight: 'bold', marginLeft: '-25px' }}>Friday</Typography>
                        </Box>
                    </Box>
                    )}
       
        </CardContent>
    </Card>
  );
}

export default TrendsWidget;
