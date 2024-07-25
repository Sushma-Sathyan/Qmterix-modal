import { Grid } from '@mui/material';
import Breadcrumb from '../../layouts/full-layout/breadcrumb/Breadcrumb';
import PageContainer from '../../components/container/PageContainer';
import CustomTextField from '../../components/forms/custom-elements/CustomTextField';
import CustomFormLabel from '../../components/forms/custom-elements/CustomFormLabel';
import { Button} from '@mui/material';
const BCrumb = [
  {
    to: '/dashboards/dashboard',
    title: 'Home',
  },
  {
    title: 'Org Profile',
  },
];

const UserProfile = () => {
  return (
    <PageContainer title="Org Profile" description="Org Handle
    Profile at qmetrix.com/org/<Org Handle>. Must be unique. Max. 38 characters. Alphanumeric and special character - only.">
      {/* breadcrumb */}
      <Breadcrumb title="Org Profile" items={BCrumb} />
      {/* end breadcrumb */}
     
      <Grid container spacing={2}>
        <Grid item sm={12} lg={4} xs={12}>
      
              <CustomFormLabel htmlFor="Org Name">Org Name</CustomFormLabel>
              <CustomTextField
                id="name"
                placeholder="Trigent Softwares Pvt Ltd"
                variant="outlined"
                fullWidth
                size="small"
              />
              
          
          
         
        </Grid>
        <Grid item sm={12} lg={4} xs={12}>
      
</Grid>
<Grid item sm={12} lg={4} xs={12}>
      
      
  
 
</Grid>
        <Grid item sm={12} lg={4} xs={12}>
      
      <CustomFormLabel htmlFor="Display Name">Display Name</CustomFormLabel>
      <CustomTextField
        id="name"
        placeholder="Trigent Softwares Pvt Ltd"
        variant="outlined"
        fullWidth
        size="small"
      />
      
  
  
 
</Grid>
<Grid item sm={12} lg={4} xs={12}>
    
</Grid>
<Grid item sm={12} lg={4} xs={12}>
    
</Grid>
<Grid item sm={12} lg={4} xs={12}>
      
      <CustomFormLabel htmlFor="description">Description</CustomFormLabel>
      <CustomTextField
        id="name"
        placeholder="Enter text"
        variant="outlined"
        fullWidth
        multiline={true}
        rows={4}
        size="small"
      />
      
  
  
 
</Grid>
<Grid item sm={12} lg={4} xs={12}>
      
      
  
 
</Grid>
<Grid item sm={12} lg={4} xs={12}>
      
      
  
 
</Grid>
<Grid item sm={12} lg={4} xs={12}>
      
      <CustomFormLabel htmlFor="name">Name</CustomFormLabel>
      <CustomTextField
        id="name"
        placeholder="Enter text"
        variant="outlined"
        fullWidth
        size="small"
      />
      
  
  
 
</Grid>



<Grid item sm={12} lg={4} xs={12}>
     
  
 
</Grid>
<Grid item sm={12} lg={4} xs={12}>
      
      
  
 
</Grid>
<Grid item sm={12} lg={4} xs={12}>
  
<Button
                  variant="contained"
                  color="primary"
                  
                >
                 Save Changes
                </Button>
                </Grid>
      </Grid>
    </PageContainer>
  );
};

export default UserProfile;
