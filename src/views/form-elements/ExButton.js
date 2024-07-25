import React from 'react';
import { Grid } from '@mui/material';
import Breadcrumb from '../../layouts/full-layout/breadcrumb/Breadcrumb';
import PageContainer from '../../components/container/PageContainer';
import CoverCard from '../../components/profile/CoverCard';
import IntroCard from '../../components/profile/IntroCard';
import PhotosCard from '../../components/profile/PhotosCard';
import NewPost from '../../components/profile/NewPost';
import ImgPost from '../../components/profile/ImgPost';
import TypographyPost from '../../components/profile/TypographyPost';
import FeatherIcon from 'feather-icons-react';
import CustomTextField from '../../components/forms/custom-elements/CustomTextField';
import CustomSelect from '../../components/forms/custom-elements/CustomSelect';
import CustomSlider from '../../components/forms/custom-elements/CustomSlider';
import CustomRangeSlider from '../../components/forms/custom-elements/CustomRangeSlider';
import CustomSwitch from '../../components/forms/custom-elements/CustomSwitch';
import CustomDisabledButton from '../../components/forms/custom-elements/CustomDisabledButton';
import CustomOutlinedButton from '../../components/forms/custom-elements/CustomOutlinedButton';
import CustomFormLabel from '../../components/forms/custom-elements/CustomFormLabel';
import CustomCheckbox from '../../components/forms/custom-elements/CustomCheckbox';
import CustomRadio from '../../components/forms/custom-elements/CustomRadio';
import {
  
 
  Box,
  Typography,
  FormControl,
  MenuItem,
  RadioGroup,
  FormControlLabel,
  Button,
} from '@mui/material';

const BCrumb = [
  {
    to: '/',
    title: 'Home',
  },
  {
    title: 'Button',
  },
];

const ExButton = () => (
  // 2

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
export default ExButton;
