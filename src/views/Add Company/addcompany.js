import { Grid } from '@mui/material';
import Breadcrumb from '../../layouts/full-layout/breadcrumb/Breadcrumb';
import PageContainer from '../../components/container/PageContainer';
import CustomTextField from '../../components/forms/custom-elements/CustomTextField';
import CustomFormLabel from '../../components/forms/custom-elements/CustomFormLabel';
import { Button } from '@mui/material';
import * as yup from "yup"
import { useState } from 'react';
import { useFormik } from 'formik';
const BCrumb = [
  {
    to: '/dashboards/dashboard',
    title: 'Home',
  },
  {
    title: 'Add New Org',
  },
];

const Addcompanynew = () => {
  const [initialValues, setInitialValues] = useState({
    organizationName: "",
    displayName: "",
    description: ""
  })
  const validationSchema = yup.object({
    organizationName: yup.string().required("Organization Name is required"),
    displayName: yup.string().required("Dislay Name is required"),
    description: yup.string().required("Description Address is required"),
  });
  
  const formik = useFormik({
    initialValues: initialValues,
    enableReinitialize: true,
    validationSchema: validationSchema,
    onSubmit: (values) => {
    },
  });
  return (
    <form onSubmit={formik.handleSubmit}>
      <PageContainer title="Add New org" description="Org Handle
    Profile at QMetrix.com/org/<Org Handle>. Must be unique. Max. 38 characters. Alphanumeric and special character - only.">
        {/* breadcrumb */}
        <Breadcrumb title="Add New org" items={BCrumb} />
        {/* end breadcrumb */}
        <Grid container spacing={2}>
          <Grid item sm={12} lg={4} xs={12}>

            <CustomFormLabel htmlFor="Org Name">Organization Name</CustomFormLabel>
            <CustomTextField
              id="organizationName"
              placeholder="Organization Name"
              name="organizationName"
              variant="outlined"
              fullWidth
              size="small"
              value={formik.values.organizationName}
              onChange={formik.handleChange}
              error={formik.touched.organizationName && Boolean(formik.errors.organizationName)}
              helperText={formik.touched.organizationName && formik.errors.organizationName}
            />
          </Grid>
          <Grid item sm={12} lg={4} xs={12}>
          </Grid>
          <Grid item sm={12} lg={4} xs={12}>
          </Grid>
          <Grid item sm={12} lg={4} xs={12}>
            <CustomFormLabel htmlFor="Display Name">Display Name</CustomFormLabel>
            <CustomTextField
              id="displayName"
              placeholder="Display Name"
              variant="outlined"
              name="displayName"
              fullWidth
              size="small"
              value={formik.values.displayName}
              onChange={formik.handleChange}
              error={formik.touched.displayName && Boolean(formik.errors.displayName)}
              helperText={formik.touched.displayName && formik.errors.displayName}
            />
          </Grid>
          <Grid item sm={12} lg={4} xs={12}>
          </Grid>
          <Grid item sm={12} lg={4} xs={12}>
          </Grid>
          <Grid item sm={12} lg={4} xs={12}>
            <CustomFormLabel htmlFor="description">Description</CustomFormLabel>
            <CustomTextField
              id="description"
              placeholder="Description"
              variant="outlined"
              name="description"
              fullWidth
              multiline={true}
              rows={4}
              size="small"
              value={formik.values.description}
              onChange={formik.handleChange}
              error={formik.touched.description && Boolean(formik.errors.description)}
              helperText={formik.touched.description && formik.errors.description}
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
              type='submit'
            >
              Save Changes
            </Button>
          </Grid>
        </Grid>
      </PageContainer>
    </form>
  );
};

export default Addcompanynew;
