import React from 'react';
import PropTypes from 'prop-types';
import { alpha, styled } from '@mui/material/styles';
import TreeView from '@mui/lab/TreeView';
import TreeItem, { treeItemClasses } from '@mui/lab/TreeItem';
import { animated } from '@react-spring/web'
import { Card, Collapse } from '@mui/material';
import FeatherIcon from 'feather-icons-react';

import Breadcrumb from '../../layouts/full-layout/breadcrumb/Breadcrumb';
import PageContainer from '../../components/container/PageContainer';

const BCrumb = [
  {
    to: '/',
    title: 'Home',
  },
  {
    title: 'Dashboards',
  },
];

function MinusSquare(props) {
  return (
    <>
      <FeatherIcon icon="folder-minus" style={{ width: 15, height: 15 }} {...props} />
    </>
  );
}

function PlusSquare(props) {
  return (
    <>
      <FeatherIcon icon="folder-plus" style={{ width: 15, height: 15 }} {...props} />
    </>
  );
}

function CloseSquare(props) {
  return (
    <>
      <FeatherIcon icon="folder" style={{ width: 15, height: 15 }} {...props} />
    </>
  );
}

function TransitionComponent(props) {
  

  return (
    <animated.div>
      <Collapse {...props} />
    </animated.div>
  );
}

TransitionComponent.propTypes = {
  /**
   * Show the component; triggers the enter or exit states
   */
  in: PropTypes.bool,
};

const StyledTreeItem = styled((props) => (
  <TreeItem {...props} TransitionComponent={TransitionComponent} />
))(({ theme }) => ({
  [`& .${treeItemClasses.iconContainer}`]: {
    '& .close': {
      opacity: 0.3,
    },
  },
  [`& .${treeItemClasses.group}`]: {
    marginLeft: 15,
    paddingLeft: 18,
    borderLeft: `1px dashed ${alpha(theme.palette.text.primary, 0.4)}`,
  },
}));

const Treeview = () => {
  return (
    <PageContainer title="Navistar" description="this is Treeview page">
      {/* breadcrumb */}
      <Breadcrumb title="" items={BCrumb} />
      {/* end breadcrumb */}
      <Card>
        <TreeView
          aria-label="customized"
          defaultExpanded={['1']}
          defaultCollapseIcon={<MinusSquare />}
          defaultExpandIcon={<PlusSquare />}
          defaultEndIcon={<CloseSquare />}
          sx={{ height: 200, flexGrow: 1, overflowY: 'auto' }}
        >
          <StyledTreeItem nodeId="1" label="Main">
            <StyledTreeItem nodeId="2" label="DrillDown" />
            <StyledTreeItem nodeId="3" label="QEM automic level view">
              <StyledTreeItem nodeId="6" label="Burndown" to="/charts/column-chart"/>
              <StyledTreeItem nodeId="7" label="Experiment">
                <StyledTreeItem nodeId="9" label="Child 1" />
                <StyledTreeItem nodeId="10" label="Child 2" />
                <StyledTreeItem nodeId="11" label="Child 3" />
              </StyledTreeItem>
              <StyledTreeItem nodeId="8" label="QEM automic level view" />
            </StyledTreeItem>
           
            <StyledTreeItem nodeId="5" label="Score detailed view" />
          </StyledTreeItem>
        </TreeView>
      </Card>
    </PageContainer>
  );
};

export default Treeview;
