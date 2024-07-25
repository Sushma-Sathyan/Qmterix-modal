import { Grid, Box, Typography, Button } from '@mui/material';
import { Link, useNavigate,useLocation } from 'react-router-dom';
import GoogleIcon from '@mui/icons-material/Google';
import CustomTextField from '../../components/forms/custom-elements/CustomTextField';
import CustomFormLabel from '../../components/forms/custom-elements/CustomFormLabel';
import PageContainer from '../../components/container/PageContainer';
import * as yup from "yup"
import { useState,useEffect } from 'react';
import { useFormik } from 'formik';
const Addcompany = () => {
  const navigate = useNavigate();
  const [initialValues, setInitialValues] = useState({
    jobTitle: "",
    employeeCount: "",
    orginizationName: ""
  })
  const validationSchema = yup.object({
    jobTitle: yup.string().required("JobTitle is required"),
    employeeCount: yup.string().required('Software Engineers count is required'),
    orginizationName: yup.string().required('Orginization Name is required'),
  });

  const formik = useFormik({
    initialValues: initialValues,
    enableReinitialize: true,
    validationSchema: validationSchema,
    onSubmit: (values) => {
      if(values.jobTitle && values.employeeCount && values.orginizationName != ""){
        navigate("/")

      }
    },
  });
  
  const name = formik.values.orginizationName
  const val = `https://Qmetrix.com/${name}`
  return(
    <form onSubmit={formik.handleSubmit}>
  <PageContainer title="Add Company" description="">
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
                <CustomFormLabel htmlFor="name">What is your job title?</CustomFormLabel>
                <CustomTextField 
                id="name" 
                variant="outlined" 
                name="jobTitle"
                fullWidth 
                value={formik.values.jobTitle}
                onChange={formik.handleChange}
                error={formik.touched.jobTitle && Boolean(formik.errors.jobTitle)}
                helperText={formik.touched.jobTitle && formik.errors.jobTitle}
                />
                <CustomFormLabel htmlFor="email"> How many full-time software engineers are in your organization?</CustomFormLabel>
                <CustomTextField 
                id="email" 
                variant="outlined" 
                name="employeeCount"
                fullWidth 
                value={formik.values.employeeCount}
                onChange={formik.handleChange}
                error={formik.touched.employeeCount && Boolean(formik.errors.employeeCount)}
                helperText={formik.touched.employeeCount && formik.errors.employeeCount}
                />
                <CustomFormLabel htmlFor="orgnisationname">{"What is your organization's name?"}</CustomFormLabel>
                <CustomTextField
                  id="orginizationName"
                  variant="outlined"
                  name="orginizationName"
                  fullWidth
                  value={formik.values.orginizationName}
                  onChange={formik.handleChange}
                  error={formik.touched.orginizationName && Boolean(formik.errors.orginizationName)}
                  helperText={formik.touched.orginizationName && formik.errors.orginizationName}
                  sx={{
                    mb: 3,
                  }}
                />
                 <CustomFormLabel htmlFor="orgnisationname">What account name do you want to use? (Your Qmetrix org page will be Qmetrix.com/accountname)</CustomFormLabel>
                <CustomTextField
                  id="orgnisationAccountname"
                  variant="outlined"
                  fullWidth
                  sx={{
                    mb: 3,
                  }}
                  value={val}
                  InputProps={{
                    readOnly: true,
                  }} 
                />

                <Button
                  color="secondary"
                  variant="contained"
                  size="large"
                  fullWidth
                  type='submit'
                  sx={{
                    pt: '10px',
                    pb: '10px',
                  }}
                >
                  Next
                </Button>
                <Box
                  sx={{
                    position: 'relative',
                    textAlign: 'center',
                    mt: '20px',
                    mb: '20px',
                    '&::before': {
                      content: '""',
                      background: (theme) =>
                        `${theme.palette.mode === 'dark' ? '#42464d' : '#ecf0f2'}`,
                      height: '1px',
                      width: '100%',
                      position: 'absolute',
                      left: '0',
                      top: '13px',
                    },
                  }}
                >
                  <Typography
                    component="span"
                    color="textSecondary"
                    variant="h6"
                    fontWeight="400"
                    sx={{
                      position: 'relative',
                      padding: '0 12px',
                      background: (theme) =>
                        `${theme.palette.mode === 'dark' ? '#282c34' : '#fff'}`,
                    }}
                  >
                    or sign in with
                  </Typography>
                </Box>

                <Box>
                  <Button
                    variant="outlined"
                    size="large"
                    display="flex"
                    alignitems="center"
                    justifycontent="center"
                    sx={{
                      width: '100%',
                      borderColor: (theme) =>
                        `${theme.palette.mode === 'dark' ? '#42464d' : '#dde3e8'}`,
                      borderWidth: '2px',
                      textAlign: 'center',
                      mt: 2,
                      pt: '10px',
                      pb: '10px',
                      '&:hover': {
                        borderColor: (theme) =>
                          `${theme.palette.mode === 'dark' ? '#42464d' : '#dde3e8'}`,
                        borderWidth: '2px',
                      },
                    }}
                  >
                    <Box display="flex" alignItems="center">
                      <GoogleIcon
                        sx={{
                          color: (theme) => theme.palette.error.main,
                        }}
                      />
                      <Typography
                        variant="h6"
                        sx={{
                          ml: 1,
                          color: (theme) =>
                            `${
                              theme.palette.mode === 'dark' ? theme.palette.grey.A200 : '#13152a'
                            }`,
                        }}
                      >
                        Google
                      </Typography>
                    </Box>
                  </Button>
                </Box>

              
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  </PageContainer>
  </form>
  )
}

export default Addcompany;
