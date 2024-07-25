import { Grid, Box, Typography, Button,InputAdornment,IconButton} from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';
import GoogleIcon from '@mui/icons-material/Google';
import CustomTextField from '../../components/forms/custom-elements/CustomTextField';
import CustomFormLabel from '../../components/forms/custom-elements/CustomFormLabel';
import PageContainer from '../../components/container/PageContainer';
import * as yup from "yup"
import { useState,useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useFormik } from 'formik';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import getRegister from '../../actions/registerActions';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Register = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const res = useSelector(state => state.registerReducer);
  const [initialValues, setInitialValues] = useState({
    name: "",
    email: "",
    password: "",
  })
  const [showPassword, setShowPassword] = useState(false);
  const validationSchema = yup.object({
    name: yup.string().required("Name is required"),
    email: yup.string().email('Invalid email').required('Email is required'),
    password: yup.string()
    .required('Password is required')
    .min(8, 'Password must be at least 8 characters')
    .matches(
      /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*()_+}{"':;?/>.<,]).*$/,
      'Password must contain at least:\nOne Uppercase letter\nOne Lowercase letter\nOne Number\nOne Special character'
    ),
  });

  const formik = useFormik({
    initialValues: initialValues,
    enableReinitialize: true,
    validationSchema: validationSchema,
    onSubmit: async (values) => {
      if(values.email && values.name && values.password != ""){
        try {
          const response = await getRegister(dispatch, values);
          if(response.code === "000"){
            toast.success(`${response.messageText}`);
            setTimeout(() => {
              navigate("/auth/login");
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
  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
  };
  return (
    <div><form onSubmit={formik.handleSubmit}>
      <PageContainer title="Register" description="this is Register page">
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
                    Welcome to Qmetrix
                  </Typography>
                  <Box display="flex" alignItems="center">
                    <Typography
                      color="textSecondary"
                      variant="h6"
                      fontWeight="400"
                      sx={{
                        mr: 1,
                      }}
                    >
                      Already have an Account?
                    </Typography>
                    <Typography
                      component={Link}
                      to="/auth/login"
                      fontWeight="500"
                      sx={{
                        display: 'block',
                        textDecoration: 'none',
                        color: 'primary.main',
                      }}
                    >
                      Sign In
                    </Typography>
                  </Box>
                  <Box
                    sx={{
                      mt: 4,
                    }}
                  >
                    <CustomFormLabel htmlFor="name">Name</CustomFormLabel>
                    <CustomTextField
                      id="name"
                      name="name"
                      value={formik.values.name}
                      onChange={formik.handleChange}
                      variant="outlined"
                      fullWidth
                      error={formik.touched.name && Boolean(formik.errors.name)}
                      helperText={formik.touched.name && formik.errors.name} />
                    <CustomFormLabel htmlFor="email">Email Adddress</CustomFormLabel>
                    <CustomTextField
                      id="email"
                      name="email"
                      value={formik.values.email}
                      onChange={formik.handleChange}
                      variant="outlined"
                      fullWidth
                      error={formik.touched.email && Boolean(formik.errors.email)}
                      helperText={formik.touched.email && formik.errors.email} />
                    <CustomFormLabel htmlFor="password">Password</CustomFormLabel>
                    <CustomTextField
                      id="password"
                      variant="outlined"
                      name="password"
                      type={showPassword ? 'text' : 'password'}
                      value={formik.values.password}
                      onChange={formik.handleChange}
                      fullWidth
                      error={formik.touched.password && Boolean(formik.errors.password)}
                      helperText={formik.touched.password && formik.errors.password}
                      sx={{
                        mb: 3,
                      }}
                      InputProps={{
                        endAdornment: (
                          <InputAdornment position="end">
                            <IconButton onClick={handleTogglePassword}>
                              {showPassword ? <VisibilityOff /> : <Visibility />}
                            </IconButton>
                          </InputAdornment>
                        ),
                      }} />

                    <Button
                      color="secondary"
                      variant="contained"
                      size="large"
                      type='submit'
                      fullWidth
                      sx={{
                        pt: '10px',
                        pb: '10px',
                      }}
                    >
                      Next
                    </Button>

                  </Box>
                </Box>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </PageContainer>
    </form><ToastContainer /></div>
  )
}

export default Register;
