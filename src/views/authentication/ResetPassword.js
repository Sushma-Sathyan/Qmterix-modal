import { Grid, Box, Typography, Button,InputAdornment,IconButton} from '@mui/material';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import GoogleIcon from '@mui/icons-material/Google';
import CustomTextField from '../../components/forms/custom-elements/CustomTextField';
import CustomFormLabel from '../../components/forms/custom-elements/CustomFormLabel';
import PageContainer from '../../components/container/PageContainer';
import * as yup from "yup"
import { useState, useEffect } from 'react';
import { useFormik } from 'formik';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import { useDispatch, useSelector } from 'react-redux';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import resetPassword from '../../actions/reset-password';

const ResetPassword = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const res = useSelector(state => state.registerReducer);
  const [initialValues, setInitialValues] = useState({
    new_password: "",
    confirmPassword: ""
  })
  const [showPassword, setShowPassword] = useState(false);
  const [token, setToken] = useState('');
  const location = useLocation();

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const tokenParam = params.get('token');
    setToken(tokenParam);
  }, [location.search]);

  const validationSchema = yup.object({
    new_password: yup.string()
              .required('Password is required')
              .min(8, 'Password must be at least 8 characters')
              .matches(
                /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*()_+}{"':;?/>.<,]).*$/,
                'Password must contain at least:\nOne Uppercase letter\nOne Lowercase letter\nOne Number\nOne Special character'
              ),
    confirmPassword: yup.string()
        .oneOf([yup.ref('new_password'), null], 'Passwords must match')
        .required('Confirm password is required')

  });

  const formik = useFormik({
    initialValues: initialValues,
    enableReinitialize: true,
    validationSchema: validationSchema,
    onSubmit: async (values) => {
      if(values.new_password !== ""){
        const payload = {
          token: token,
          new_password: values.new_password
        };
        try{
          const response = await resetPassword(dispatch, payload);
          if(response.code === "000"){
            toast.success(`${response.messageText}`);
            setTimeout(() => {
              navigate("/auth/login");
            }, 2000);
          }else{
            toast.info(`${response.messageText}`);
          }
        }catch (error) {
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
    <div>
      <form onSubmit={formik.handleSubmit}>
      <PageContainer title="Forgot Password" description="This is Activation page">
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
                    Reset Password
                  </Typography>
                  <Box
                    sx={{
                      mt: 4,
                    }}
                  >
                    <CustomFormLabel htmlFor="password">New Password</CustomFormLabel>
                    <CustomTextField
                      id="new_password"
                      variant="outlined"
                      name="new_password"
                      type={showPassword ? 'text' : 'password'}
                      value={formik.values.new_password}
                      onChange={formik.handleChange}
                      fullWidth
                      error={formik.touched.password && Boolean(formik.errors.new_password)}
                      helperText={formik.touched.new_password && formik.errors.new_password}
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
                      }}

                    />

                    <CustomFormLabel htmlFor="password">Confirm Password</CustomFormLabel>
                    <CustomTextField
                      id="confirmPassword"
                      variant="outlined"
                      name="confirmPassword"
                      type='password'
                      value={formik.values.confirmPassword}
                      onChange={formik.handleChange}
                      fullWidth
                      error={formik.touched.confirmPassword && Boolean(formik.errors.confirmPassword)}
                      helperText={formik.touched.confirmPassword && formik.errors.confirmPassword}
                      sx={{
                        mb: 3,
                      }}
                  

                    />
                    <Button
                      color="secondary"
                      variant="contained"
                      size="large"
                      type='submit'
                      fullWidth
                      // component={Link}
                      // to="/auth/addcompany"
                      sx={{
                        pt: '10px',
                        pb: '10px',
                      }}
                    >
                      Submit
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
  )
}

export default ResetPassword;