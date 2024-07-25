import React from 'react';

import { Grid } from '@mui/material';
import CustomTextField from '../../components/forms/custom-elements/CustomTextField';
import CustomFormLabel from '../../components/forms/custom-elements/CustomFormLabel';

import DefaultButtons from '../../components/forms/button/DefaultButtons';
import ColorButtons from '../../components/forms/button/ColorButtons';
import IconLoadingButtons from '../../components/forms/button/IconLoadingButtons';
import SizeButton from '../../components/forms/button/SizeButton';

import OutlinedDefaultButtons from '../../components/forms/button/OutlinedDefaultButtons';
import OutlinedColorButtons from '../../components/forms/button/OutlinedColorButtons';
import OutlinedIconLoadingButtons from '../../components/forms/button/OutlinedIconLoadingButtons';
import OutlinedSizeButton from '../../components/forms/button/OutlinedSizeButton';

import TextDefaultButtons from '../../components/forms/button/TextDefaultButtons';
import TextColorButtons from '../../components/forms/button/TextColorButtons';
import TextIconLoadingButtons from '../../components/forms/button/TextIconLoadingButtons';
import TextSizeButton from '../../components/forms/button/TextSizeButton';

import IconColorButtons from '../../components/forms/button/IconColorButtons';
import IconSizeButtons from '../../components/forms/button/IconSizeButtons';
import Typography from '@mui/material/Typography';
import FabDefaultButton from '../../components/forms/button/FabDefaultButton';
import FabColorButtons from '../../components/forms/button/FabColorButtons';
import FabSizeButtons from '../../components/forms/button/FabSizeButtons';

import DefaultButtonGroup from '../../components/forms/button/DefaultButtonGroup';
import SizeButtonGroup from '../../components/forms/button/SizeButtonGroup';
import VerticalButtonGroup from '../../components/forms/button/VerticalButtonGroup';
import ColorButtonGroup from '../../components/forms/button/ColorButtonGroup';
// import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import Breadcrumb from '../../layouts/full-layout/breadcrumb/Breadcrumb';
import PageContainer from '../../components/container/PageContainer';
import { Box, Button, Stack } from '@mui/material';
import BaseCard from '../../components/base-card/BaseCard';
import { PropaneSharp } from '@mui/icons-material';
import Modal from '@mui/material/Modal';
// const history = useHistory();
// const navigate = useNavigate();
const style = {
  position: 'absolute' ,
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p:1,
};
const BCrumb = [
  {
    to: '/dashboards/dashboard',
    title: 'Home',
  },
  {
    title: 'Integration',
  },
];

const handleclick = () => {
  // navigate('/charts/column-chart');
  // history.push('/charts/column-chart');
};
function Integration()  {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
  <PageContainer title="Integration" description="this is Buttons page">
    {/* breadcrumb */}
    <Breadcrumb title="Integration" items={BCrumb} />
    {/* end breadcrumb */}
    <Grid container spacing={0}>
      {/* ------------------------- row 1 ------------------------- */}
      <Grid item xs={12} lg={12} display="flex" alignItems="stretch">
      <BaseCard title="Code Sources">
    <Box display="flex" justifyContent="left">
      <Stack spacing={1} direction={{ xs: 'column', sm: 'row' }}>
      <Button id="caret"  variant='secondary' color="secondary" component={Link} to="/charts/column-chart">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.48 2 2 6.48 2 12c0 4.42 2.87 8.165 6.84 9.489.5.092.682-.217.682-.481v-1.856c-2.785.604-3.37-1.337-3.37-1.337-.455-1.157-1.11-1.466-1.11-1.466-.908-.622.07-.61.07-.61 1.004.07 1.53 1.031 1.53 1.031.893 1.531 2.341 1.088 2.915.832.092-.647.35-1.088.636-1.338-2.221-.252-4.555-1.11-4.555-4.945 0-1.092.39-1.988 1.03-2.685-.103-.253-.446-1.27.097-2.647 0 0 .84-.268 2.75 1.02a9.56 9.56 0 012.5-.336c.847 0 1.7.114 2.5.336 1.91-1.288 2.75-1.02 2.75-1.02.543 1.377.2 2.394.098 2.647.641.697 1.03 1.593 1.03 2.685 0 3.842-2.336 4.688-4.566 4.938.361.311.68.927.68 1.868v2.775c0 .267.182.577.688.48C19.14 20.163 22 16.42 22 12c0-5.52-4.48-10-10-10z" fill="#000" />
                    </svg>
                          Github
                        </Button>
                        
                        <Button id="caret" variant='secondary' color="secondary"component={Link} to="/charts/column-chart">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 2L5.429 21h3.286l.714-2h8.286l.714 2H20.57l-5.142-15.857L12 2zm-3.095 3.428L9.381 9.571l1.857-3.143 1.857-2.857h3.238l-4.524 4.857zM5.286 18l2.286-5.286L7.286 18H5.286z" fill="#FC6D26" />
                    </svg>
                        Gitlab
                        </Button>
                        <Button id="caret" variant='secondary' color="secondary"component={Link} to="/charts/column-chart">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12.7498 0.877898L23.1227 9.87498C23.4926 10.179 23.4926 10.8185 23.1227 11.1225L12.7498 20.1196C12.3799 20.4236 11.8801 20.4236 11.5102 20.1196L1.13731 11.1225C0.767361 10.8185 0.767361 10.179 1.13731 9.87498L11.5102 0.877898C11.8801 0.573911 12.3799 0.573911 12.7498 0.877898Z" fill="#0089D6"/>
</svg>
                          Azure DevOps
                        </Button>
                        <Button id="caret" variant='secondary' color="secondary"component={Link} to="/charts/column-chart">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M4.11 7.72l7.06 11.69c.06.1.15.16.26.16h.12c.11 0 .2-.06.26-.16l7.06-11.69c.05-.08.07-.18.05-.28a.48.48 0 00-.15-.28.46.46 0 00-.28-.11h-14.1c-.1 0-.21.04-.28.11a.48.48 0 00-.15.28.47.47 0 00.05.28zm6.55-.36l-1.5-2.5A.48.48 0 019.56 4H14.4a.48.48 0 01.42.22l1.5 2.5a.47.47 0 01-.41.7H11.07a.47.47 0 01-.41-.7z" fill="#0052CC"/>
                    </svg>
                          Bit Bucket
                        </Button>
                        <Button id="caret" color="secondary"component={Link} to="/charts/column-chart">
                          ...more
                        </Button>
      </Stack>
    </Box>
  </BaseCard>
      </Grid>
      {/* ------------------------- row 2 ------------------------- */}
     
      {/* ------------------------- row 3 ------------------------- */}
      <Grid item xs={12} lg={12} display="flex" alignItems="stretch">
      <BaseCard title="Ticket Sources">
    <Box display="flex" justifyContent="left">
      <Stack spacing={1} direction={{ xs: 'column', sm: 'row' }}>
      {/* component={Link} */}
      <Button id="caret" variant='secondary' color="secondary" onClick={handleOpen} to="/charts/column-chart">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10.12 21.55a.76.76 0 01-.68.45c-.15 0-.29-.05-.42-.14L1.22 15.44a.74.74 0 010-1.29l9.45-6.02c.24-.15.55-.15.8 0L21.15 14.5a.74.74 0 010 1.29l-8.45 5.97a.76.76 0 01-.68.16c-.09 0-.18-.03-.27-.07L12 19.68l-1.88 1.87z" fill="#0052CC"/>
                    </svg>
                          Jira
                        </Button>
                        
                  
                      
                        <Button id="caret" variant='secondary' color="secondary"component={Link} to="/charts/column-chart">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M12 2C6.48 2 2 6.48 2 12c0 4.42 2.87 8.165 6.84 9.489.5.092.682-.217.682-.481v-1.856c-2.785.604-3.37-1.337-3.37-1.337-.455-1.157-1.11-1.466-1.11-1.466-.908-.622.07-.61.07-.61 1.004.07 1.53 1.031 1.53 1.031.893 1.531 2.341 1.088 2.915.832.092-.647.35-1.088.636-1.338-2.221-.252-4.555-1.11-4.555-4.945 0-1.092.39-1.988 1.03-2.685-.103-.253-.446-1.27.097-2.647 0 0 .84-.268 2.75 1.02a9.56 9.56 0 012.5-.336c.847 0 1.7.114 2.5.336 1.91-1.288 2.75-1.02 2.75-1.02.543 1.377.2 2.394.098 2.647.641.697 1.03 1.593 1.03 2.685 0 3.842-2.336 4.688-4.566 4.938.361.311.68.927.68 1.868v2.775c0 .267.182.577.688.48C19.14 20.163 22 16.42 22 12c0-5.52-4.48-10-10-10z" fill="#000" />
            </svg>
                          Github Issues
                        </Button>
                        
                   
                      
                        <Button id="caret" variant='secondary' color="secondary"component={Link} to="/charts/column-chart">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M14.333 3L5.429 21h3.286l.714-2h8.286l.714 2H20.57l-5.142-15.857L14.333 3zm-3.095 3.428L9.381 9.571l1.857-3.143 1.857-2.857h3.238l-4.524 4.857zM5.286 18l2.286-5.286L7.286 18H5.286z" fill="#0089D6"/>
            </svg>
                          Azure Boards
                        </Button>
      </Stack>
    </Box>
    </BaseCard>
      </Grid>
      <Grid item xs={12} lg={12} display="flex" alignItems="stretch">
      <BaseCard title="Calendar Sources">
    <Box display="flex" justifyContent="left">
      <Stack spacing={1} direction={{ xs: 'column', sm: 'row' }}>
      <Button id="caret" variant='secondary' color="secondary"component={Link} to="/calendar">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M3 2a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v1h10V2a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v1h1a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h1V2zm2 2v1h2V4H5zM4 8v13h16V8H4zm6 2h4v3h-4v-3zm0 5h4v3h-4v-3zm6 0h4v3h-4v-3zm0-5h4v3h-4v-3zm-6 5H5v3h4v-3zm0-5H5v3h4v-3z" fill="#34A853"/>
                    </svg>
                        Google Calendar
                      </Button>
                      
                
                   
                      <Button id="caret" variant='secondary' color="secondary"component={Link} to="/calendar">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M21.52 2H2.48A2.48 2.48 0 0 0 0 4.48v15.04A2.48 2.48 0 0 0 2.48 22h19.04A2.48 2.48 0 0 0 24 19.52V4.48A2.48 2.48 0 0 0 21.52 2zm-1.8 3l-2.52.95V8.27L19.72 8c1.3.01 2.35.57 3.05 1.5.39.56.55 1.15.55 1.75v4.52c0 1.16-.47 2.1-1.13 2.69-.65.59-1.5.94-2.52.94-1.05 0-1.89-.37-2.56-.89l-1.18-.94-1.52 1.21a6.85 6.85 0 0 0 4.19 1.44c1.58 0 2.9-.55 3.95-1.56 1.05-1 1.57-2.3 1.57-3.93v-4.54c0-1.16-.47-2.1-1.13-2.69-.65-.59-1.5-.94-2.52-.94-1.05 0-1.89.37-2.56.89L12.48 8h-6V5.95L14.78 2.74a5.8 5.8 0 0 1 3.94-1.44c1.58 0 2.9.55 3.95 1.56 1.05 1 1.57 2.3 1.57 3.93v4.54c0 1.16-.47 2.1-1.13 2.69-.65.59-1.5.94-2.52.94-1.05 0-1.89-.37-2.56-.89L11.6 16.26h6.92c1.59 0 2.9-.56 3.94-1.56 1.05-1 1.57-2.3 1.57-3.93v-4.54c0-1.16-.47-2.1-1.13-2.69-.65-.59-1.5-.94-2.52-.94-1.05 0-1.89.37-2.56.89L11.56 4.27H12v2h5v2h-1.02l-2.94-1.95c-.39-.26-.84-.39-1.34-.39-1.01 0-1.9.33-2.68 1.01s-1.17 1.58-1.17 2.58v6.47c0 1.01.38 1.82 1.13 2.45.76.62 1.68.94 2.74.94h3.53c1.57 0 2.9-.56 3.94-1.56 1.05-1 1.57-2.3 1.57-3.93v-4.54c0-1.16-.47-2.1-1.13-2.69-.65-.59-1.5-.94-2.52-.94-1.05 0-1.89.37-2.56.89L10.1 4.8H10V5.95l1.53.48V8h-1.11L8.34 6.95H8V2z" fill="#0078D4"/>
                    </svg>
                        Outlook Calendar
                      </Button>
      </Stack>
    </Box>
  </BaseCard>
      </Grid>
      <Grid item xs={12} lg={12} display="flex" alignItems="stretch">
      <BaseCard title="Calendar Sources">
    <Box display="flex" justifyContent="left">
      <Stack spacing={1} direction={{ xs: 'column', sm: 'row' }}>
      <Button id="caret" variant='secondary' color="secondary"component={Link} to="/charts/column-chart">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M11.694 2C9.086 6.066 5.986 11.897 3.538 16.7c-.66 1.215-1.322 2.458-1.88 3.78a.293.293 0 0 0 .235.415h4.688c.13 0 .248-.084.287-.208l.776-2.383 4.19-13.534c.022-.068.037-.137.045-.209a.293.293 0 0 0-.092-.205C10.922 3.34 10.496 2 9.615 2H2.053a.294.294 0 0 0-.23.362c1.223 4.122 4.82 10.87 9.475 15.83a.293.293 0 0 0 .493-.08l1.744-5.68a.293.293 0 0 0-.092-.305c-1.557-1.341-3.445-3.08-5.554-4.812L8.503 7.9h8.907c1.636 0 2.946 1.31 2.946 2.946v1.95a.293.293 0 0 0 .273.291 4.017 4.017 0 0 1 2.917 3.13c.252 1.57-.088 3.225-1.014 4.533-.924 1.306-2.32 2.236-3.899 2.519l-4.585.003c-.21 0-.382-.118-.457-.301L11.694 2z" fill="#0052CC"/>
                    </svg>
                       Atlasian Teams
                      </Button>
                      
                  

                   
                      <Button variant='secondary' id="caret" color="secondary"component={Link} to="/charts/column-chart">
                       ...more
                      </Button>
      </Stack>
    </Box>
  </BaseCard>
      </Grid>
    </Grid>
    <Modal
  open={open}
  onClose={handleClose}
  aria-labelledby="modal-modal-title"
  aria-describedby="modal-modal-description"
>
  <Box sx={style}>
    <Typography id="modal-modal-title" variant="h6" component="h2" alignItems="center">
      Add Jira Integration using a Jira Api token
    </Typography>
   
    <Grid container spacing={2}>
        <Grid item sm={12} lg={12} xs={12}>
      
             
              <CustomFormLabel htmlFor="Org Name" >Jira Organisation Name</CustomFormLabel>
              <CustomFormLabel> Get your Jira sitename from your Jira url (e.g. https://[sitename].atlassian.net) and only enter the [sitename] portion
              </CustomFormLabel>
              <CustomTextField
                id="name"
                placeholder=""
                variant="outlined"
                fullWidth
                size="small"
              />
              
          
          
         
        </Grid>
        
        <Grid item sm={12} lg={12} xs={12}>
      

        <CustomFormLabel htmlFor="Org Name" > API token</CustomFormLabel>
              <CustomFormLabel> Create an API token (See instructions here) and enter it here.
              </CustomFormLabel>
      <CustomTextField
        id="name"
        placeholder=""
        variant="outlined"
        fullWidth
        size="small"
      />
      
  
  
 
</Grid>

<Grid item sm={12} lg={12} xs={12}>

      <CustomFormLabel htmlFor="description">Jira login email</CustomFormLabel>
      <CustomFormLabel htmlFor="description">Enter the email address that you use to login into Jira.</CustomFormLabel>
      <CustomTextField
        id="name"
        variant="outlined"
        fullWidth
        multiline={true}
        size="small"
      />
      
  
  
 
</Grid>







<Grid item sm={12} lg={12} xs={12}>
  
<Button
                  variant="contained"
                  color="primary"
                  component={Link} to="/projectlist"
                >
                 Connect Jira
                </Button>
                </Grid>
      </Grid>
    
  </Box>
</Modal>
  </PageContainer>
 
)};
export default Integration;
