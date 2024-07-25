import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import {
  Card,
  CardContent,
  Typography,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Alert,
} from '@mui/material';
import Breadcrumb from '../../layouts/full-layout/breadcrumb/Breadcrumb';
import PageContainer from '../../components/container/PageContainer';

const rows = [
  { pname: 'Navistar'},
  { pname: 'Raptor' },
  { pname: 'WTB' },
  { pname: 'Newforma' },
];

const ProjectList = () => {
  const [isJiraConnected, setIsJiraConnected] = useState(true);

  useEffect(() => {
    // Simulating connection to Jira
    const timer = setTimeout(() => {
      setIsJiraConnected(false);
    }, 3000);

    // Clear the timer when component unmounts
    return () => clearTimeout(timer);
  }, []);

  return (
    <PageContainer title="Project List" description="This is Collapsible Table page">
      {/* Breadcrumb */}
      <Breadcrumb title="Project List" items={[{ to: '/', title: 'Home' }, { title: 'Project List' }]} />
      {isJiraConnected && (
        <Alert variant="filled" severity="success">
          Connection established to Jira successfully. Please find the list of projects below.
        </Alert>
      )}
      {/* Project List Table */}
      <Card>
        <CardContent>
          <TableContainer component={Paper}>
            <Table aria-label="project list table">
              <TableHead>
                <TableRow>
                  <TableCell>Project Name</TableCell>
                 
                </TableRow>
              </TableHead>
              <TableBody>
                {rows.map((row) => (
                  <TableRow key={row.pname}>
                    <TableCell>{row.pname}</TableCell>
                   
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </CardContent>
      </Card>

      {/* Jira Connection Alert */}
      
    </PageContainer>
  );
};

export default ProjectList;
