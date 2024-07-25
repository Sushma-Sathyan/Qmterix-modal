import { styled } from '@mui/material/styles';
import { Typography } from '@mui/material';

const CustomFormLabel = styled((props) => (
  <Typography variant="h6" {...props} component="label" htmlFor={props.htmlFor} />
))(() => ({
  marginBottom: '5px',
  marginTop: '15px',
  display: 'block',
  fontSize:"17px"
}));

export default CustomFormLabel;
