import React from 'react';
import PropTypes from 'prop-types';
import { Typography, Card, CardHeader, CardContent } from '@mui/material';
import { Link } from 'react-router-dom';

const DashboardCard = ({
  custompadding,
  customheaderpadding,
  customdisplay,
  custommargin,
  title,
  subtitle,
  action,
  children,
  linkTo
}) => (
  <Card
    sx={{
      p: custompadding,
      '& .MuiCardContent-root:last-child': {
        pb: custompadding,
      },
    }}
  >
    <CardHeader
      sx={{
        p: customheaderpadding,
        display: {
          xs: customdisplay,
          lg: 'flex',
          sm: 'flex',
        },
      }}
      title={
        <Typography
          variant="h3"
          sx={{
            mb: {
              xs: custommargin,
            },
          }}
        >
          {linkTo ? <Link to={linkTo} style={{color: '#e6e5e8', textDecoration: 'none'}} className='link-hover' >{title}</Link> : {title}}
        </Typography>
      }
      subtitle={subtitle}
      action={action || ''}
    />
    {/* content area */}
    <CardContent
      sx={{
        p: custompadding,
      }}
    >
      {children}
    </CardContent>
  </Card>
);

DashboardCard.propTypes = {
  custompadding: PropTypes.string,
  customheaderpadding: PropTypes.string,
  customdisplay: PropTypes.string,
  custommargin: PropTypes.string,
  title: PropTypes.string,
  subtitle: PropTypes.string,
  action: PropTypes.any,
  children: PropTypes.node,
};

export default DashboardCard;
