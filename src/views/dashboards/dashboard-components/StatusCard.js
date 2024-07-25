import React from 'react';
import { Card, CardContent, Typography, Box } from '@mui/material';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import TaskIcon from '@mui/icons-material/Task';
import ElectricBoltIcon from '@mui/icons-material/ElectricBolt';

const StatusCard = ({ workflow }) => {
    const data = workflow.data;
    return (
        <Card elevation={0}
            sx={{
                position: 'relative',
                backgroundColor: (theme) => `${theme.palette.mode === 'dark' ? '#32363e' : ''}`,
                borderWidth: '0px',
                margin: '10px',
                padding: '5px',
                borderRadius: '10px',
            }}>
            <CardContent>
                <Box display="flex" alignItems="center" justifyContent="space-between">
                    <Typography variant="subtitle1" sx={{ display: 'inline-flex', alignItems: 'center', fontSize: '14px' }}>
                        {workflow.wfTitle}
                        <InfoOutlinedIcon fontSize="medium" sx={{ marginLeft: '4px' }} />
                    </Typography>
                </Box>
                {data.map((item, index) => (
                    <Box key={index} display="flex" justifyContent="space-between" alignItems="center" mt={2}>
                        <Typography variant="body2" sx={{ display: 'inline-flex', alignItems: 'center', width: '25%' }}>
                        {item.icon ? item.icon : "" } {item.label}
                        </Typography>
                        <Box display="flex" alignItems="center" sx={{ width: '70%' }}>
                            <Typography variant="body2" sx={{ width: '30px', textAlign: 'right', marginLeft: '50px' }}>{item.value}</Typography>
                            <Box sx={{ width: `${item.percentage}%`, height: '8px', backgroundColor: 'rgb(3, 201, 215)', marginLeft: '5px', borderRadius: '8px' }} />
                            <Typography variant="body2" sx={{ marginLeft: '4px' }}>{item.percentage}%</Typography>
                        </Box>
                        {/* <Typography variant="body2" sx={{ marginLeft: '2px' }}>{item.percentage}%</Typography> */}
                    </Box>
                ))}
            </CardContent>
        </Card>
    );
}

export default StatusCard;
