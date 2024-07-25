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
import addRole from '../../../actions/RoleActions/addRoleActions';
import { useDispatch } from 'react-redux';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const BCrumb = [
  {
    to: '/dashboards/dashboard',
    title: 'Home',
  },
  {
    title: 'Add New Role',
  },
];

const AddRole = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [initialValues, setInitialValues] = useState({
    role_name: "",
    role_description: ""
  })
  const validationSchema = yup.object({
    role_name: yup.string().required("Name is required"),
    role_description: yup.string().required('Description is required'),
  });
  const onCancel = () => {
    navigate('/roles')
  }
  const formik = useFormik({
    initialValues: initialValues,
    enableReinitialize: true,
    validationSchema: validationSchema,
    onSubmit: async (values) => {
      if (values.role_name && values.role_description != "") {
        try {
          const response = await addRole(dispatch, values);
          if (response.code === "000") {
            toast.success(`${response.response?.message}`);
            setTimeout(() => {
              navigate("/roles");
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
        <PageContainer title="Add NewRole" description="Org Handle
    Profile at QMetrix.com/org/<Org Handle>. Must be unique. Max. 38 characters. Alphanumeric and special character - only.">
          {/* breadcrumb */}
          <Breadcrumb title="Add New Role" items={BCrumb} />
          {/* end breadcrumb */}
          <Grid container spacing={2}>
            <Grid item xs={4}>
              <CustomFormLabel htmlFor="Role">Name</CustomFormLabel>
              <CustomTextField
                id="role_name"
                placeholder="Enter Name"
                name="role_name"
                variant="outlined"
                fullWidth
                size="small"
                value={formik.values.role_name}
                onChange={formik.handleChange}
                error={formik.touched.role_name && Boolean(formik.errors.role_name)}
                helperText={formik.touched.role_name && formik.errors.role_name}
              />
            </Grid>
            <Grid item xs={4}>
              <CustomFormLabel htmlFor="role_description">Description</CustomFormLabel>
              <CustomTextField
                id="role_description"
                placeholder="Enter Description"
                name="role_description"
                variant="outlined"
                fullWidth
                size="small"
                value={formik.values.role_description}
                onChange={formik.handleChange}
                error={formik.touched.role_description && Boolean(formik.errors.role_description)}
                helperText={formik.touched.role_description && formik.errors.role_description}
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

export default AddRole;
