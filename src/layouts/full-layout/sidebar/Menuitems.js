import DashboardIcon from '@mui/icons-material/Dashboard';
import BusinessIcon from '@mui/icons-material/Business';
import CorporateFareIcon from '@mui/icons-material/CorporateFare';
import GroupAddIcon from '@mui/icons-material/GroupAdd';
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';
import GroupsIcon from '@mui/icons-material/Groups';
import SecurityIcon from '@mui/icons-material/Security';
import IntegrationInstructionsIcon from '@mui/icons-material/IntegrationInstructions';
import TitleIcon from '@mui/icons-material/Title';

const Menuitems = [
  {
    navlabel: true,
    subheader: 'Dashboard',
    icon: 'mdi mdi-dots-horizontal',
    href: 'Dashboard',
  },
  {
    title: 'Dashboard',
    icon: <DashboardIcon/>,
    href: '/dashboards/dashboard',
  },
 
  {
    navlabel: true,
    subheader: 'Company',
    icon: 'mdi mdi-dots-horizontal',
    href: 'Apps',
  },
  

  {
    title: 'Add Company',
    icon: <BusinessIcon/>,
    href: '/addcompanynew',
   
  },
  {
    navlabel: true,
    subheader: 'Organization',
    icon: 'mdi mdi-dots-horizontal',
    href: 'Pages',
  },
  {
    title: 'Trigent',
    icon: <TitleIcon/>,
    href: '/shop',
    collapse: true,
    children: [
      {
        title: 'Org Profile',
        icon:  <CorporateFareIcon/>,
        href: '/user-profile',
      },
      {
        title: 'Users',
        icon: <GroupAddIcon/>,
        href: 'users',
      },
      {
        title: 'Roles',
        icon: <FormatListBulletedIcon/>,
        href: 'roles',
      },
      {
        title: 'Teams',
        icon: <GroupsIcon/>,
        href: 'teams',
      },
      {
        title: 'Security',
        icon: <SecurityIcon/>,
        href: '/Security/security',
      },
      {
        title: 'Integration',
        icon: <IntegrationInstructionsIcon/>,
        href: '/integration/Integration',
      },
    
    ],
  },
];

export default Menuitems;
