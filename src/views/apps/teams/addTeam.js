import { Grid } from '@mui/material';
import Breadcrumb from '../../../layouts/full-layout/breadcrumb/Breadcrumb';
import PageContainer from '../../../components/container/PageContainer';
import CustomTextField from '../../../components/forms/custom-elements/CustomTextField';
import CustomFormLabel from '../../../components/forms/custom-elements/CustomFormLabel';
import { Button } from '@mui/material';
import * as yup from "yup"
import { useState } from 'react';
import { useFormik } from 'formik';
import { useNavigate } from 'react-router';
import addTeam from '../../../actions/TeamActions/addTeamActions';
import { useDispatch } from 'react-redux';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const BCrumb = [
  {
    to: '/dashboards/dashboard',
    title: 'Home',
  },
  {
    title: 'Add New Team',
  },
];

const AddTeam = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [initialValues, setInitialValues] = useState({
    team_name: "",
    team_description: ""
  })
  const validationSchema = yup.object({
    team_name: yup.string().required("Name is required"),
    team_description: yup.string().required('Description is required'),
  });
  const onCancel = () => {
    navigate('/teams')
  }
  const formik = useFormik({
    initialValues: initialValues,
    enableReinitialize: true,
    validationSchema: validationSchema,
    onSubmit: async (values) => {
      if (values.team_name && values.team_description != "") {
        try {
          const response = await addTeam(dispatch, values);
          if (response.code === "000") {
            toast.success(`${response.response?.message}`);
            setTimeout(() => {
              navigate("/teams");
            }, 2000);
          } else {
            toast.info(`${response.message}`);
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
      <form onSubmit={formik.handleSubmit}>
        <PageContainer title="Add NewTeam" description="Org Handle
    Profile at QMetrix.com/org/<Org Handle>. Must be unique. Max. 38 characters. Alphanumeric and special character - only.">
          {/* breadcrumb */}
          <Breadcrumb title="Add New Team" items={BCrumb} />
          {/* end breadcrumb */}
          <Grid container spacing={2}>
            <Grid item xs={4}>
              <CustomFormLabel htmlFor="Team">Name</CustomFormLabel>
              <CustomTextField
                id="team_name"
                placeholder="Enter Name"
                name="team_name"
                variant="outlined"
                fullWidth
                size="small"
                value={formik.values.team_name}
                onChange={formik.handleChange}
                error={formik.touched.team_name && Boolean(formik.errors.team_name)}
                helperText={formik.touched.team_name && formik.errors.team_name}
              />
            </Grid>
            <Grid item xs={4}>
              <CustomFormLabel htmlFor="team_description">Description</CustomFormLabel>
              <CustomTextField
                id="team_description"
                placeholder="Enter Description"
                name="team_description"
                variant="outlined"
                fullWidth
                size="small"
                value={formik.values.team_description}
                onChange={formik.handleChange}
                error={formik.touched.team_description && Boolean(formik.errors.team_description)}
                helperText={formik.touched.team_description && formik.errors.team_description}
              />
            </Grid>
            <Grid item xs={5.3}>
            </Grid>
            <Grid item xs={3} style={{ display: "flex" }}>
              <Button
                variant="contained"
                color="primary"
                type='submit'
                sx={{ mr: 2 }}
              >
                Save Changes
              </Button>
              <Button
                variant="contained"
                color="inherit"
                type=''
                onClick={onCancel}
              >
                Cancel
              </Button>
            </Grid>
          </Grid>
        </PageContainer>
        <ToastContainer />
      </form>
    </div>
  );
};

export default AddTeam;
