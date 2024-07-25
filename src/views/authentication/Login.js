import { useState } from 'react';
import { Grid, Box, Typography, FormGroup, FormControlLabel, Button, InputAdornment, IconButton } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';
import CustomCheckbox from '../../components/forms/custom-elements/CustomCheckbox';
import CustomTextField from '../../components/forms/custom-elements/CustomTextField';
import CustomFormLabel from '../../components/forms/custom-elements/CustomFormLabel';
import PageContainer from '../../components/container/PageContainer';


import { Visibility, VisibilityOff } from '@mui/icons-material';

import * as yup from 'yup';
import {useFormik} from 'formik';
import getLogin from '../../actions/Authactions';
import { useDispatch } from 'react-redux';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Login = () => { 

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [showPassword, setShowPassword] = useState(false);
  const [token, setToken] = useState("");

  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
  };


  const [initialLoginValues, setInitialLoginValues] = useState({
    login_email: "",
    login_password: ""
  });

  const validationSchema = yup.object({
    login_email: yup.string().email('Invalid email address').required('Email is required'),
    login_password: yup.string()
              .required('Password is required')
              .min(8, 'Password must be at least 8 characters')
              .matches(
                /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*()_+}{"':;?/>.<,]).*$/,
                'Password must contain at least:\nOne Uppercase letter\nOne Lowercase letter\nOne Number\nOne Special character'
              ),
  });

  const formik = useFormik({
    initialValues: initialLoginValues,
    enableReinitialize: true,
    validationSchema: validationSchema,
    onSubmit: async (values) => {
        if(values.login_email && values.login_password != ""){
          try {
            const response = await getLogin(dispatch, values);
            // Handle the response data here
            if(response.code === "000"){
              const token = response && response.token; 
              localStorage.setItem('qmetrix-token', token);
              setToken(token);
              toast.success(`${response.messageText}`);
              setTimeout(() => {
                navigate('/dashboards/dashboard');
              }, 2000);
            }else{
              toast.info(`${response.messageText}`);
            }
          } catch (error) {
            // Handle the error here
            console.error('Registration failed:', error.message);
          }
        }
    },
  });
  
    

  return (
    <div>
    <form>
  <PageContainer title="Login" description="this is Login page">
    <Grid container spacing={0} sx={{ height: '100vh', justifyContent: 'center' }}>
   
      <Grid item xs={12} sm={8} lg={6} display="flex" alignItems="center">
        <Grid container spacing={0} display="flex" justifyContent="center">
          <Grid item xs={12} lg={9} xl={6}>
            <Box
              sx={{
                p: 4,
              }}
            >
              <Typography fontWeight="700" variant="h2">
                Welcome to QMetrix
              </Typography>
              <Box display="flex" alignItems="center">
                <Typography
                  color="textSecondary"
                  variant="h6"
                  fontWeight="500"
                  sx={{
                    mr: 1,
                  }}
                >
                  New to QMetrix?
                </Typography>
                <Typography
                  component={Link}
                  to="/auth/register"
                  fontWeight="500"
                  sx={{
                    display: 'block',
                    textDecoration: 'none',
                    color: 'primary.main',
                  }}
                >
                  Create an account
                </Typography>
              </Box>
              <Box
                sx={{
                  mt: 4,
                }}
              >
                <CustomFormLabel htmlFor="login_email">Email Address</CustomFormLabel>
                <CustomTextField 
                id="login_email" 
                variant="outlined" 
                fullWidth
                value={formik.values.login_email}
                onChange={formik.handleChange}
                error={formik.touched.login_email && Boolean(formik.errors.login_email)}
                helperText={formik.touched.login_email && formik.errors.login_email} />
                <CustomFormLabel htmlFor="login_password">Password</CustomFormLabel>
                <CustomTextField
                  id="login_password"
                  variant="outlined"
                  fullWidth
                  sx={{
                    mb: 3,
                  }}
                  type={showPassword ? 'text' : 'password'}
                  value={formik.values.login_password}
                  onChange={formik.handleChange}
                  error={formik.touched.login_password && Boolean(formik.errors.login_password)}
                  helperText={formik.touched.login_password && (
                    <div style={{ whiteSpace: 'pre-wrap'}}>
                      {formik.errors.login_password}
                    </div>
                  )}
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <IconButton onClick={handleTogglePassword}>
                          {showPassword ? <VisibilityOff /> : <Visibility />}
                        </IconButton>
                      </InputAdornment>
                    ),
                  }}
                />
                <Box
                  sx={{
                    display: {
                      xs: 'block',
                      sm: 'flex',
                      lg: 'flex',
                    },
                    alignItems: 'center',
                  }}
                >
                  <FormGroup>
                    <FormControlLabel
                      control={<CustomCheckbox defaultChecked />}
                      label="Remeber this Device"
                      sx={{
                        mb: 2,
                      }}
                    />
                  </FormGroup>
                  <Box
                    sx={{
                      ml: 'auto',
                    }}
                  >
                    <Typography
                      component={Link}
                      to="/auth/email-forgot-password"
                      fontWeight="500"
                      sx={{
                        display: 'block',
                        textDecoration: 'none',
                        mb: '16px',
                        color: 'primary.main',
                      }}
                    >
                      Forgot Password ?
                    </Typography>
                  </Box>
                </Box>

                <Button
                  color="secondary"
                  variant="contained"
                  size="large"
                  fullWidth
                  component={Link}
                  to="/dashboards/dashboard"
                  sx={{
                    pt: '10px',
                    pb: '10px',
                  }}
                  onClick={formik.handleSubmit}
                >
                  Sign In
                </Button>
              
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  </PageContainer>
  </form>
  <ToastContainer />
  </div>
);
                      }

export default Login;
