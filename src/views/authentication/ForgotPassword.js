import React, {useState} from 'react';
import { Grid, Box, Typography, Button } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';
import img1 from '../../assets/images/backgrounds/login-bg.svg';

import LogoIcon from '../../layouts/full-layout/logo/LogoIcon';
import CustomTextField from '../../components/forms/custom-elements/CustomTextField';
import CustomFormLabel from '../../components/forms/custom-elements/CustomFormLabel';

import PageContainer from '../../components/container/PageContainer';

import * as yup from 'yup';
import {useFormik} from 'formik';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useDispatch, useSelector } from 'react-redux';
import forgotPassword from '../../actions/forgotPasword';

const ForgotPassword = () => {

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const res = useSelector(state => state.registerReducer);

  const [initialValues, setInitialValues] = useState({
    email: "",
  });

  const validationSchema = yup.object({
    email: yup.string().email('Invalid email address').required('Email is required'),
  });

  const formik = useFormik({
    initialValues: initialValues,
    enableReinitialize: true,
    validationSchema: validationSchema,
    onSubmit: async (values) => {
      // Handle form submission here
      if(values.email !== ''){
        const payload = {email : values.email}
        try{
          const response = await forgotPassword(dispatch, payload);
        } catch(error){
          console.error("Error****",error)
        }
      }
      navigate('/auth/email-link');
    },
  });

  
  return (
    <form onSubmit={formik.handleSubmit}>
  <PageContainer title="Reset Password" description="this is Reset Password page">
    <Grid container spacing={0} sx={{ height: '100vh', justifyContent: 'center' }}>
      <Grid
        item
        xs={12}
        sm={12}
        lg={6}
        sx={{
          background: (theme) => `${theme.palette.mode === 'dark' ? '#1c1f25' : '#ffffff'}`,
        }}
      >
        <Box
          sx={{
            position: 'relative',
          }}
        >
          <Box
            display="flex"
            alignItems="center"
            justifyContent="center"
            sx={{
              position: {
                xs: 'relative',
                lg: 'absolute',
              },
              height: { xs: 'auto', lg: '100vh' },
              right: { xs: 'auto', lg: '-50px' },
              margin: '0 auto',
            }}
          >
            <img
              src={img1}
              alt="bg"
              style={{
                width: '100%',
                maxWidth: '812px',
              }}
            />
          </Box>

          <Box
            display="flex"
            alignItems="center"
            sx={{
              p: 4,
              position: 'absolute',
              top: '0',
            }}
          >
            <LogoIcon />
          </Box>
        </Box>
      </Grid>
      <Grid item xs={12} sm={8} lg={6} display="flex" alignItems="center">
        <Grid container spacing={0} display="flex" justifyContent="center">
          <Grid item xs={12} lg={9} xl={6}>
            <Box
              sx={{
                p: 4,
              }}
            >
              <Typography variant="h2" fontWeight="700">
                Forgot your password?
              </Typography>

              <Typography
                color="textSecondary"
                variant="h5"
                fontWeight="400"
                sx={{
                  mt: 2,
                }}
              >
                Please enter the email address associated with your account and We will email you a
                link to reset your password.
              </Typography>

              <Box
                sx={{
                  mt: 4,
                }}
              >
                <CustomFormLabel htmlFor="reset-email">Email Adddress</CustomFormLabel>
                <CustomTextField 
                id="reset-email" 
                variant="outlined" 
                fullWidth
                name="email"
                value={formik.values.email}
                onChange={formik.handleChange}
                error={formik.touched.email && Boolean(formik.errors.email)}
                helperText={formik.touched.email && formik.errors.email} 
                />

                <Button
                  color="secondary"
                  variant="contained"
                  size="large"
                  fullWidth
                  component={Link}
                  to="/"
                  sx={{
                    pt: '10px',
                    pb: '10px',
                    mt: 4,
                  }}
                  type='submit'
                  onClick={formik.handleSubmit}
                >
                  Reset Password
                </Button>
                <Button
                  color="secondary"
                  size="large"
                  fullWidth
                  component={Link}
                  to="/auth/login"
                  sx={{
                    pt: '10px',
                    pb: '10px',
                    mt: 2,
                  }}
                >
                  Back to Login
                </Button>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  </PageContainer>
  </form>
);
                }

export default ForgotPassword;
