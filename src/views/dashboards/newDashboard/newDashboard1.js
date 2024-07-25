import React from 'react';
import { Card, CardContent,FormControlLabel,Radio, Typography, FormControl, InputLabel,Select, MenuItem, Grid, Tabs, Tab, Box, RadioGroup,Accordion, AccordionSummary, AccordionDetails } from '@mui/material';
import { DateRangePicker } from '@mui/x-date-pickers-pro/DateRangePicker';
import { TextField } from '@mui/material';
import { LocalizationProvider } from '@mui/x-date-pickers-pro/LocalizationProvider';
import {AdapterDateFns} from '@mui/x-date-pickers-pro/AdapterDateFns';
import { SingleInputDateRangeField } from '@mui/x-date-pickers-pro';
import Calendar from '@mui/icons-material/Event';
import TrackChangesIcon from '@mui/icons-material/TrackChanges';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Bar } from 'react-chartjs-2';
import { makeStyles } from '@mui/styles';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import NestedModal from '../../Modal/modal';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';

import { styled } from '@mui/system';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    BarElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';
import { useEffect } from 'react';
import getAllProjects from '../../../actions/JiraDashboardActions/getAllProjectlist';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router';
import getAllSprint from '../../../actions/JiraDashboardActions/getAllSprintList';
import allSprintDetails from '../../../actions/JiraDashboardActions/getAllSprintDetailsActions';
import { fontSize, height } from '@mui/system';
import Dashboard from '../Dashboard';
import DropDownOptions from '../../DropDown/dropDown';

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    BarElement,
    Title,
    Tooltip,
    Legend
);
const projectsData = [
    {
        "name": "project 1",
        "sprints": [
            {
                "name": "sprint1",
                "details": {
                    "epics": {
                        "total": 15,
                        "open": 5,
                        "closed": 10
                    },
                    "stories": {
                        "total": 25,
                        "open": 5,
                        "closed": 20
                    },
                    "bugs": {
                        "total": 5,
                        "open": 5,
                        "closed": 0
                    },
                    "tasks": {
                        "total": 30,
                        "open": 15,
                        "closed": 15
                    }
                }
            },
            {
                "name": "sprint2",
                "details": {
                    "epics": {
                        "total": 25,
                        "open": 5,
                        "closed": 20
                    },
                    "stories": {
                        "total": 15,
                        "open": 5,
                        "closed": 10
                    },
                    "bugs": {
                        "total": 15,
                        "open": 10,
                        "closed": 5
                    },
                    "tasks": {
                        "total": 15,
                        "open": 5,
                        "closed": 10
                    }
                }
            }
        ]
    },
    {
        "name": "project 2",
        "sprints": [
            {
                "name": "sprint1",
                "details": {
                    "epics": {
                        "total": 25,
                        "open": 5,
                        "closed": 20
                    },
                    "stories": {
                        "total": 1,
                        "open": 1,
                        "closed": 0
                    },
                    "bugs": {
                        "total": 15,
                        "open": 15,
                        "closed": 0
                    },
                    "tasks": {
                        "total": 15,
                        "open": 5,
                        "closed": 10
                    }
                }

            },
            {
                "name": "sprint2",
                "details": {
                    "epics": {
                        "total": 15,
                        "open": 5,
                        "closed": 10
                    },
                    "stories": {
                        "total": 10,
                        "open": 5,
                        "closed": 5
                    },
                    "bugs": {
                        "total": 20,
                        "open": 5,
                        "closed": 15
                    },
                    "tasks": {
                        "total": 25,
                        "open": 5,
                        "closed": 20
                    }
                }
            }
        ]
    }
];
const Dashboard1 = ({handleAddWidget,dynamicWidgets}) => {
    const [selectedProject, setSelectedProject] = React.useState('');
    const [selectedSprint, setSelectedSprint] = React.useState('');
    const [sprintDetails, setSprintDetails] = React.useState(null);
    const [showAccordian, setShowAccoridan] = React.useState(false);
    const [epicValue, setEpicValue] = React.useState("");
    const [getAllProjectList,setgetAllProjectList] = React.useState([]);
    const [getAllSprintList,setgetAllSprintList] = React.useState([]);
    const [sprintId,setSprintId] = React.useState("");
    const [getAllSprintDetails,setgetAllSprintDetails] = React.useState(0);
    const customizer = useSelector((state) => state.CustomizerReducer);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const useStyles = makeStyles(() => ({
        tab: {
            cursor: 'pointer',
            '&:hover': {
                backgroundColor: customizer.activeMode === 'dark' ? '#495353' : '#e8e7dd',
                color: "black"
            },
            width:"40%",
            height:"200px"
        },
        typography: {
          position: 'absolute',
          top: 0,
          left: 0,
          // Additional styles for the Typography component
        },
        typography1: {
          position: 'absolute',
          top: 60,
          left: 0,
          fontSize:"2rem"
        },
        typography2: {
          position: 'absolute',
          top: 130,
          left: 0,
          
        },
        grid: {
          // position: 'relative',
          // Add any other styles for the Grid component here
        },
        activeCard: {
            backgroundColor: customizer.activeMode === 'dark' ? '#53595a' : '#e8e7dd',
            color: "black"
        },
    }));
    const labelStyle = {
     span:{
      fontStyle: "oblique",
      color:customizer.activeMode === 'dark' ? "#fff" : "#4c4c4c"
     },
      margin: '8px',
      color:customizer.activeMode === 'dark' ? "#fff" : "#4c4c4c"
  }
  const lineStyle = {
     borderColor: customizer.activeMode === 'dark' ? '#6c6c6c' :"#f2f2f2", 
     borderWidth: '1px'
  }
  const averageStyle = {
    border: "2px solid green",
    borderRadius: "30%",
    padding: "5px",
    width: "50%",
    marginLeft: "145px",
    marginBottom: "20px",
    color:customizer.activeMode === 'dark' ? "#fff" : "#4c4c4c"
  }
  const averageStyle1 = {
    border: "2px solid #c9ba35",
    borderRadius: "30%",
    padding: "5px",
    width: "50%",
    marginLeft: "145px",
    marginBottom: "20px",
    color:customizer.activeMode === 'dark' ? "#fff" : "#4c4c4c"
  }

  const cardStyle = {
      // position: 'relative',
      backgroundColor: (theme) => `${theme.palette.mode === 'dark' ? '#32363e' : ''}`,
      '&:before': {
          content: `""`,
          position: 'absolute',
          width: '100%',
          height: '100%',
          backgroundRepeat: 'no-repeat',
          backgroundSize: '45%',
          transform: (theme) => `${theme.direction === 'rtl' ? '' : 'unset'}`,
          backgroundPosition: {
              xs: 'top 0px right -9px',
          },
      },
      // height:"200px",
      borderWidth: '0px',
      color:customizer.activeMode === 'dark' ? "#fff" : "#4c4c4c"
  }
    const classes = useStyles();
    
    useEffect(() => {
        const payload = {
            "BASE_URL": "https://*****.atlassian.net",
            "USERNAME": "gokul_p@*****.in",
            "API_TOKEN": "ATATT3xFfGF07I1x5tO8XPZkwIAO0wg--fiNXWMmF4yf2_CDw0=887F3496..........!"
          }
        const fetchAllProjectList = async () => {
            try {
                const getAllProjectList = await getAllProjects(dispatch,payload);
                if (getAllProjectList.code === "000") {
                    setgetAllProjectList(getAllProjectList?.response);
                }
                else if(getAllProjectList.code === "003"){
                    toast.info(`${getAllProjectList.messageText}`);
                    setTimeout(() => {
                        navigate("/auth/login");
                    },2000)
                }
            } catch (error) {
                console.error('Fetching roles failed:', error.message);
            }
        };
       


        fetchAllProjectList();
        // fetchAllSprintList();
        // fetchAllSprintDetails();
    }, []);
    const handleClick = (value) => {
        if (value === "Epics") {
            setEpicValue(value)
            setShowAccoridan(!showAccordian)
            setExpanded(true)
            // setExpanded(!expanded);
        } else if (value === "Stories") {
            setEpicValue(value)
            setShowAccoridan(!showAccordian)
            setExpanded(true)
            // setExpanded(!expanded);
        } else if (value === "Tasks") {
            setEpicValue(value)
            setShowAccoridan(!showAccordian)
            // setExpanded(!expanded);
        } else if (value === "Bugs") {
            setEpicValue(value)
            setShowAccoridan(!showAccordian)
            // setExpanded(!expanded);
        } else if (value === "Story Points Committed vs Completed") {
            setEpicValue(value)
            setShowAccoridan(!showAccordian)
            // setExpanded(!expanded);
        } 
    };

    const data1 = {
        labels: [ 'Open',"Closed"],
        datasets: [
            {
                data: [
                    getAllSprintDetails ? getAllSprintDetails?.response?.epics?.open : "",
                    getAllSprintDetails ? getAllSprintDetails?.response?.epics?.closed : "",
                ],
                barThickness: [20, 20],
                backgroundColor: ["#4caf50","#e74124"],
            },
        ],
    };
    const data2 = {
        labels: [ 'Open',"Closed"],
        datasets: [
            {
                data: [
                    getAllSprintDetails ? getAllSprintDetails?.response?.stories?.open : "",
                    getAllSprintDetails ? getAllSprintDetails?.response?.stories?.closed : "",
                ],
                barThickness: [20, 20],
                backgroundColor: ["#4caf50","#e74124"],
            },
        ],
    };
    const data3 = {
        labels: [ 'Open',"Closed"],
        datasets: [
            {
                data: [
                    getAllSprintDetails ? getAllSprintDetails?.response?.tasks?.open : "",
                    getAllSprintDetails ? getAllSprintDetails?.response?.tasks?.closed : "",
                ],
                barThickness: [20, 20],
                backgroundColor: ["#4caf50","#e74124"],
            },
        ],
    };
    const data4 = {
        labels: [ 'Open',"Closed"],
        datasets: [
            {
                data: [
                    getAllSprintDetails ? getAllSprintDetails?.response?.bugs?.open : "",
                    getAllSprintDetails ? getAllSprintDetails?.response?.bugs?.closed : "",
                ],
                barThickness: [20, 20],
                backgroundColor: ["#4caf50","#e74124"],
            },
        ],
    };


    const options = {
        responsive: true,
        plugins: {
            legend: {
                labels: {
                    boxWidth: 50,
                },
                
                display: false
            },
            title: {
                display: true,
                // text: `Open , Closed ,In progress`,
            },
        },
        scales: {
            x: {
              grid: {
                display: false,
              },
            },
            y: {
              beginAtZero: true,
            },
          },
    };
    const fetchAllSprintDetails = async (sprintId) => {
      const payload = {
        "PROJECT_KEY": "BFAA",
        "sprintid":`${sprintId}`

      }
      try {
          const getAllSprintDetails = await allSprintDetails(dispatch, payload);
          if (getAllSprintDetails.code === "000") {
              setgetAllSprintDetails(getAllSprintDetails);
          }
          else if(getAllSprintDetails.code === "003"){
              toast.info(`${getAllSprintDetails.messageText}`);
              setTimeout(() => {
                  navigate("/auth/login");
              },2000)
          }
      } catch (error) {
          console.error('Fetching roles failed:', error.message);
      }
  };
    const handleProjectChange = (event) => {
        const projectName = event.target.value;
        setSelectedProject(projectName);
        for(let i in getAllProjectList ){
           if(getAllProjectList[i].project_info && getAllProjectList[i].project_info.name === projectName){
            setgetAllSprintList(getAllProjectList[i].sprints)
           }
        }
        setSelectedSprint('');
        setSprintDetails(null);
        setEpicValue("")
        setValue1([null,null])
    };

    const handleSprintChange = (event) => {
        const sprintId = event.target.value;
        fetchAllSprintDetails(sprintId);
        setSelectedSprint(sprintId);
    };
    const [value, setValue] = React.useState(0);
    const [value1, setValue1] = React.useState([null, null]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const handleDateChange = (newValue) => {
    setValue1(newValue)
  }
  const [data, setData] = React.useState([
    { date: '2024-06-26', total: 50},
    { date: '2024-06-27', total: 70},
  ]);

  const calculateAverage = () => {
    const totalSum = data.reduce((sum, item) => sum + item.total,0);
    return totalSum / data.length;
   
  };
  const calculatePercentageChange = (oldTotal, newTotal) => {
    if (oldTotal === 0) return newTotal * 100; // To handle division by zero
    return ((newTotal - oldTotal) / oldTotal) * 100;
    
  };

  const percentageChange = calculatePercentageChange(data[0].total, data[1].total);
  const res  = percentageChange.toFixed(2);

  const average = calculateAverage();
  const [selectedValue, setSelectedValue] = React.useState('');
  const [open, setOpen] = React.useState(false);
  const [expanded, setExpanded] = React.useState(false);
  const handleShowClick = () => {
    setExpanded(!expanded);
  }

  const handleChange1 = (event) => {
    setSelectedValue(event.target.value);
    setOpen(false);
  };


  const dropDownOptions = [
    { value: 'ticket-completed', label: 'TICKET ADD IN A MID' },
    { value: 'velocity', label: 'AVERAGE VELOCITY' },
    { value: 'total-jitter', label: 'TOTAL STORY POINTS' },
    { value: 'new-widget', label: 'NEW WIDGET' },
    { value: 'ticket-completed', label: 'STORY' },
    { value: 'velocity', label: 'SPRINT' },
    { value: 'median-cycle-time', label: 'BUGS' },
    { value: 'median-queue-time', label: 'BUGS COMPLETED' },
    { value: 'total-jitter', label: 'BACKLOG' },
    { value: 'backflow-rate', label: 'INCOMPLETE TICKET' },
    { value: 'new-widget', label: 'IN_PROGRESS TICKET' },
    // Add more options as needed
  ];

  const FlexContainer = styled('div')`
  display: flex;
  align-items: center;
  gap: 16px;  // Adjust gap between items as needed
  margin-bottom: 16px;  // Add margin-bottom if needed for spacing
`;
  



const grey = {
    50: '#F3F6F9',
    100: '#E5EAF2',
    200: '#DAE2ED',
    300: '#C7D0DD',
    400: '#B0B8C4',
    500: '#9DA8B7',
    600: '#6B7A90',
    700: '#434D5B',
    800: '#303740',
    900: '#1C2025',
  };

const StyledButton = styled(Button)`
  background-color: #24e3d6;
  border-color: #24e3d6;
  color: white;
  border-radius: 8px;
  box-shadow: 0 2px 1px rgba(45, 45, 60, 0.2), inset 0 1.5px 1px #24e3d6, inset 0 -2px 1px #1fb4ae;
  transition: all 150ms ease;
   margin-right: 8px;
 padding:2px;
 

  &:hover {
    background-color: #1fb4ae;
  }

  &:active {
    background-color: #199994;
    box-shadow: none;
  }

  &:focus-visible {
    box-shadow: 0 0 0 4px rgba(36, 227, 214, 0.3);
    outline: none;
  }

  &:disabled {
    opacity: 0.4;
    cursor: not-allowed;
    box-shadow: none;

    &:hover {
      background-color: #24e3d6;
    }
  }
`;

const TriggerButton = styled(Button)(
    ({ theme }) => `
    font-family: 'IBM Plex Sans', sans-serif;
    font-weight: 600;
    font-size: 0.875rem;
    line-height: 1.5;
    padding: 8px 16px;
    border-radius: 8px;
    color: white;
    transition: all 150ms ease;
    cursor: pointer;
    background: ${theme.palette.mode === 'dark' ? grey[900] : '#fff'};
    border: 1px solid ${theme.palette.mode === 'dark' ? grey[700] : grey[200]};
    color: ${theme.palette.mode === 'dark' ? grey[200] : grey[900]};
    box-shadow: 0 1px 2px 0 rgb(0 0 0 / 0.05);
  
    &:hover {
      background: ${theme.palette.mode === 'dark' ? grey[800] : grey[50]};
      border-color: ${theme.palette.mode === 'dark' ? grey[600] : grey[300]};
    }
  
    &:active {
      background: ${theme.palette.mode === 'dark' ? grey[700] : grey[100]};
    }
  
    &:focus-visible {
      box-shadow: 0 0 0 4px ${theme.palette.mode === 'dark' ? blue[300] : blue[200]};
      outline: none;
    }
  `,
  );

  
  const blue = {
    200: '#99CCFF',
    300: '#66B2FF',
    400: '#3399FF',
    500: '#007FFF',
    600: '#0072E5',
    700: '#0066CC',
  };

  const[opn,setOpn]=React.useState(false)

  const handleOpen = () => setOpn(true);
  const handleClose = () => setOpn(false);

  const [selectedOption, setSelectedOption] = React.useState('');
  console.log(dynamicWidgets,"dynamicWidgets")

  const widgetRemove=dynamicWidgets;

  const widgetTitlesToRemove = new Set(widgetRemove.map(widget => widget.widgetTitle));

  const handleAdd = () => {   
    handleAddWidget(selectedOption);
    console.log('Selected option:', selectedOption);
    handleClose();
  };

  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };

  const handleChange2 = (event) => {
    setSelectedOption(event.target.value);
};



const renderedOptions = dropDownOptions
  .filter(option => !widgetTitlesToRemove.has(option.label))
  .map(option => (
    <MenuItem key={option.value} value={option.label}>
      {option.label}
    </MenuItem>
  ));

    return (
        <>
        <div>
      <Typography variant='h1'>Team Jira Insights</Typography>
           <FlexContainer>
       <TriggerButton onClick={handleOpen}>Add Widget</TriggerButton>
      <Modal
        open={opn}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
            <Typography variant='h4'>Add title for a widget</Typography>
        <Select
        value={selectedOption}
        onChange={handleChange2}
        displayEmpty
        inputProps={{ 'aria-label': 'Select' }}
        sx={{ width: 200,height:30,mt:1 }} 
    >
       {renderedOptions}
    </Select>
          <div style={{ display: 'flex', justifyContent: 'flex-end', marginTop: '12px'}}>
          <StyledButton onClick={handleAdd}>Add</StyledButton>
            <StyledButton onClick={handleClose}>Close</StyledButton>
          </div>
        </Box>
      </Modal>
            <FormControl sx={{ width: "20%" }}>
                <InputLabel id="project-label">Select Project</InputLabel>
                <Select
                    labelId="project-label"
                    id="project-select"
                    value={selectedProject}
                    onChange={handleProjectChange}
                    label="Select Project"
                >
                    <MenuItem value="Select Project">
                        <em>Select Project</em>
                    </MenuItem>
                    {getAllProjectList && getAllProjectList.map(project => (
                        <MenuItem key={project.project_info.name} value={project.project_info.name}>
                            {project.project_info.name}
                        </MenuItem>
                    ))}
                </Select>
            </FormControl>
            <FormControl sx={{ width: "20%", ml: 2 }}>
                <InputLabel id="radio-select-label">Select</InputLabel>
                <Select
                    labelId="radio-select-label"
                    id="radio-select"
                    open={open}
                    onClose={() => setOpen(false)}
                    onOpen={() => setOpen(true)}
                    value={selectedValue}
                    renderValue={(selected) => selected}
                    label="Select"
                >
                    <MenuItem>
                        <RadioGroup value={selectedValue} onChange={handleChange1}>
                            <FormControlLabel value="sprint" control={<Radio />} label="Sprint" />
                            <FormControlLabel value="Date Range" control={<Radio />} label="Data Range" />
                            <FormControl component="fieldset">
                <RadioGroup
                  row
                  aria-label="Add Widget"
                  name="Add Widget"
                  value={selectedValue}
                  onChange={handleAddWidget}
                >
                  <FormControlLabel value="Add Widget" control={<Radio />} label="Add Widget" />
                </RadioGroup>
              </FormControl>{' '}
                        </RadioGroup>
                    </MenuItem>
                </Select>           </FormControl>
                </FlexContainer>
          {selectedValue === "sprint" && <FormControl sx={{ width: "20%", ml: 2 }}>
                <InputLabel id="sprint-label">Select Sprint</InputLabel>
                <Select
                    labelId="sprint-label"
                    id="sprint-select"
                    value={selectedSprint}
                    onChange={handleSprintChange}
                    label="Select Sprint"
                >
                    <MenuItem value="Select Sprint">
                        <em>Select Sprint</em>
                    </MenuItem>
                    {getAllSprintList && getAllSprintList.map(project => (
                        <MenuItem key={project?.id} value={project?.id} >
                            {project?.name}
                        </MenuItem>
                    ))}
                </Select>
            </FormControl>}
         {selectedValue ==="Date Range" && <LocalizationProvider dateAdapter={AdapterDateFns}>
             <DateRangePicker  sx={{ width: "30%",ml:2}}
             calendars={1}
             value={value1}
                onChange={handleDateChange}
          slots={{ field: SingleInputDateRangeField }}
          slotProps={{  textField: {
            InputProps: {
              endAdornment: <Calendar/>,
            }
          } }}
        />
          </LocalizationProvider>}
            <Grid sx={{
             width: "100%", bgcolor: 'background.paper' ,mt:2 }} >
          <Tabs value={value}
            onChange={handleChange}
            variant="scrollable"
            scrollButtons="auto"
            aria-label="scrollable prevent tabs example"
            style={cardStyle}
            TabIndicatorProps={{ style: { backgroundColor: customizer.activeMode === 'dark' ? '#6c6c6c' :"#f2f2f2",  } }}>
            

            <Tab className={`${classes.tab}  ${value === 0  ? classes.activeCard : {}}`} onClick={() => handleClick("Epics")}  label={
             
               <Grid xs={4} className={`${classes.grid}`}   >
                  <Typography
                    style={{...labelStyle}}
                    
                    gutterBottom
                    className={`${classes.typography}`}
                  >
                    Epics
                  </Typography>
                   <h2 className={`${classes.typography1}`} style={labelStyle}>{getAllSprintDetails === 0 ? 0 : getAllSprintDetails?.response?.epics?.open + getAllSprintDetails?.response?.epics?.closed}  <span style={{color:"#c9ba35",fontSize:"35px"}}>&#x2197;</span> </h2> 
                   <span className={`${classes.typography2}`} style={labelStyle.span}>Total</span><div style={averageStyle1}><TrackChangesIcon /> 0</div>
                  </Grid>
                  
               
            }></Tab><hr style={lineStyle}/>
           <Tab className={`${classes.tab}  ${value === 2 ? classes.activeCard : {}}`} onClick={() => handleClick("Stories")} label={
             
             <Grid xs={4} className={`${classes.grid}`} >
                <Typography
                  style={{...labelStyle}}
                  
                  gutterBottom
                  className={`${classes.typography}`}
                >
                  Stories
                </Typography>
                 <h2 className={`${classes.typography1}`} style={labelStyle}>{getAllSprintDetails === 0 ? 0 : getAllSprintDetails?.response?.stories?.open + getAllSprintDetails?.response?.stories?.closed}  <span style={{color:"green",fontSize:"35px"}}>&#x2197;</span> </h2> 
                 <span className={`${classes.typography2}`} style={labelStyle.span}>Total</span><div style={averageStyle}><TrackChangesIcon /> 2</div>
                </Grid>
                
             
          }></Tab><hr style={lineStyle}/>
             <Tab className={`${classes.tab} ${value === 4 ? classes.activeCard : {}}`} onClick={() => handleClick("Tasks")} label={
             
             <Grid xs={4} className={`${classes.grid}`} >
                <Typography
                  style={{...labelStyle}}
                  
                  gutterBottom
                  className={`${classes.typography}`}
                >
                  Tasks
                </Typography>
                 <h2 className={`${classes.typography1}`} style={labelStyle}>{getAllSprintDetails === 0 ? 0 : getAllSprintDetails?.response?.tasks?.open + getAllSprintDetails?.response?.tasks?.closed}  <span style={{color:"green",fontSize:"35px"}}>&#x2192;</span> </h2> 
                 <span className={`${classes.typography2}`} style={labelStyle.span}>Total</span><div style={averageStyle}><TrackChangesIcon /> 20</div>
                </Grid>
                
             
          }></Tab><hr style={lineStyle}/>
             <Tab className={`${classes.tab} ${value === 6 ? classes.activeCard : {}}`} onClick={() => handleClick("Bugs")} label={
             
             <Grid xs={4} className={`${classes.grid}`} >
                <Typography
                  style={{...labelStyle}}
                  
                  gutterBottom
                  className={`${classes.typography}`}
                >
                  Bugs
                </Typography>
                 <h2 className={`${classes.typography1}`} style={labelStyle}>{getAllSprintDetails === 0 ? 0 : getAllSprintDetails?.response?.bugs?.open + getAllSprintDetails?.response?.bugs?.closed}  <span style={{color:"#c9ba35",fontSize:"35px"}}>&#x2197;</span> </h2> 
                 <span className={`${classes.typography2}`} style={labelStyle.span}>Total</span><div style={averageStyle1}><TrackChangesIcon /> 4</div>
                </Grid>
                
             
          }></Tab><hr style={lineStyle}/>
           <Tab className={`${classes.tab} ${value === 8 ? classes.activeCard : {}}`} onClick={() => handleClick("Story Points Committed vs Completed")} label={
             
             <Grid xs={4} className={`${classes.grid}`} >
                <Typography
                  style={{...labelStyle}}
                  
                  gutterBottom
                  className={`${classes.typography}`}
                >
                  Stories Points Committed vs Completed
                </Typography>
                 <h2 className={`${classes.typography1}`} style={labelStyle}> 30 <span style={{color:"#c9ba35",fontSize:"35px"}}>&#x2197;</span> </h2> 
                 <span className={`${classes.typography2}`} style={labelStyle.span}>Total</span><div style={averageStyle1}><TrackChangesIcon /> 0</div>
                </Grid>
                
             
          }></Tab><hr style={lineStyle}/>
          </Tabs>
            </Grid>
            <Grid xs={12} mt={3}>
            { showAccordian &&  <Accordion expanded={expanded} onChange={handleShowClick}>
            <AccordionSummary expandIcon={<ExpandMoreIcon fontSize="medium" sx={{ marginLeft: '4px',marginTop:"5px" }} />}
        aria-controls="panel1a-content"
        id="panel1a-header">
              <Typography style={{fontSize:"1.4rem"}}>{epicValue}</Typography>
              <InfoOutlinedIcon fontSize="medium" sx={{ marginLeft: '4px',marginTop:"5px" }}/>
              <Typography  style={{ marginLeft: 'auto', marginTop: "7px",fontSize:"0.8rem",color:"#03c9d7" }}>
          {expanded ? 'Hide Details' : 'Show Details'}
        </Typography>
        {/* <Typography style={{  }}>
              <ExpandMoreIcon />
              </Typography> */}
            </AccordionSummary>
            <AccordionDetails>
                <Grid xs={12}>
              <Dashboard />
              </Grid>
            </AccordionDetails>
          </Accordion>}
            </Grid>
        </div>
             
                </>
    )
}

Dashboard1.propTypes = {
    handleAddWidget: PropTypes.any, 
    dynamicWidgets:PropTypes.any,
  }
  

export default Dashboard1;
