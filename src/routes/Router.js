import { lazy } from 'react';
import { Navigate } from 'react-router-dom';
import Loadable from '../layouts/full-layout/loadable/Loadable';


/* ***Layouts**** */
const FullLayout = Loadable(lazy(() => import('../layouts/full-layout/FullLayout')));
const BlankLayout = Loadable(lazy(() => import('../layouts/blank-layout/BlankLayout')));
/* ***End Layouts**** */

const Error = Loadable(lazy(() => import('../views/authentication/Error')));
const Login = Loadable(lazy(() => import('../views/authentication/Login')));
const Register = Loadable(lazy(() => import('../views/authentication/Register')));
const ResetPassword = Loadable(lazy(() => import('../views/authentication/ResetPassword')));
const ChangePassword = Loadable(lazy(() => import('../views/authentication/ChangePassword')));
const ForgotPassword = Loadable(lazy(() => import('../views/authentication/ForgotPassword')));
const EmailLink = Loadable(lazy(() => import('../views/authentication/EmailLink')));
const Addcompany = Loadable(lazy(() => import('../views/authentication/Addcompany')));
const Addcompanynew = Loadable(lazy(() => import('../views/Add Company/addcompany')));
/* ****Pages***** */
const Dashboard = Loadable(lazy(() => import('../views/dashboards/Dashboard')));

const Dashboard3 = Loadable(lazy(() => import('../views/dashboards/newDashboard/newDashBoard3')));
const Integration = Loadable(lazy(() => import('../views/integration/Integration')));

/* ****Apps***** */
const Shop = Loadable(lazy(() => import('../views/apps/shop/Shop')));
const QuillEditor = Loadable(lazy(() => import('../views/quill-editor/QuillEditor')));
const Treeview = Loadable(lazy(() => import('../views/treeview/Treeview')));
const Pricing = Loadable(lazy(() => import('../views/pricing/Pricing')));
const CustomTypography = Loadable(lazy(() => import('../views/typography/CustomTypography')));
const Calendar = Loadable(lazy(() => import('../views/apps/calendar/ACalendar')));
const RoleLists = Loadable(lazy(() => import('../views/apps/roles/roleLists')));
const Security = Loadable(lazy(() => import('../views/Security/security')));
const AddRole = Loadable(lazy(() => import('../views/apps/roles/addRole')))
const AddTeam = Loadable(lazy(() => import('../views/apps/teams/addTeam')))
const TeamLists = Loadable(lazy(() => import('../views/apps/teams/teamLists')));

/* ****Tables***** */
const BasicTable = Loadable(lazy(() => import('../views/tables/BasicTable')));
const PaginationTable = Loadable(lazy(() => import('../views/tables/PaginationTable')));
const EnhancedTable = Loadable(lazy(() => import('../views/tables/EnhancedTable')));
const CollapsibleTable = Loadable(lazy(() => import('../views/tables/CollapsibleTable')));
const FixedHeaderTable = Loadable(lazy(() => import('../views/tables/FixedHeaderTable')));

// form layouts
const FormCustom = Loadable(lazy(() => import('../views/form-layouts/FormCustom')));

// userprofile
const UserProfile = Loadable(lazy(() => import('../views/user-profile/UserProfile')));
const ShopDetail = Loadable(lazy(() => import('../views/apps/shop-detail/ShopDetail')));

// chart
const ColumnChart = Loadable(lazy(() => import('../views/charts/ColumnChart')));
const ProjectListdata = Loadable(lazy(() => import('../views/Project-list/projectlist')));
// icons
const ReactIcons = Loadable(lazy(() => import('../views/icons/ReactIcons')));

// Alert
const ExAlert = Loadable(lazy(() => import('../views/alert/ExAlert')));

/* ****Routes***** */

const Router = [
  {
    path: '/',
    element: <FullLayout />,
    children: [
      { path: '/', element: <Navigate to="/auth/login" /> },
      { path: '/change-password', exact:true, element: <ChangePassword/> },
      { path: '/dashboards/dashboard', exact: true, element: <Dashboard /> },
      { path: '/dashboards/dashboard3', exact: true, element: <Dashboard3 /> },
      { path: '/integration/Integration', exact: true, element: <Integration /> },
      { path: '/roles', exact: true, element: <RoleLists /> },
      { path: '/addRole', exact:true,element:<AddRole/>},
      { path: '/teams', exact: true, element: <TeamLists /> },
      { path: '/addTeam', exact:true,element:<AddTeam/>},
      { path: '/shop/lists', element: <Shop /> },
      { path: '/calendar', element: <Calendar /> },
      { path: '/tables/basic-table', element: <BasicTable /> },
      { path: '/tables/pagination-table', element: <PaginationTable /> },
      { path: '/tables/enhanced-table', element: <EnhancedTable /> },
      { path: '/tables/collapsible-table', element: <CollapsibleTable /> },
      { path: '/tables/fixed-header-table', element: <FixedHeaderTable /> },
      { path: '/user-profile', element: <UserProfile /> },
      { path: '/shop/shop-detail', element: <ShopDetail /> },
      { path: '/charts/column-chart', element: <ColumnChart /> },
      { path: '/react-icons', element: <ReactIcons /> },
      { path: '/form-layouts/form-custom', element: <FormCustom /> },
      { path: '/quill-editor', element: <QuillEditor /> },
      { path: '/treeview', element: <Treeview /> },
      { path: '/projectlist', element: <ProjectListdata /> },
      { path: '/pricing', element: <Pricing /> },
      { path: '/typography', element: <CustomTypography /> },
      { path: '/alert', element: <ExAlert /> },
      {path:'/addcompanynew',element:<Addcompanynew />},
      {path:'/Security/security',element:<Security />},
      { path: '*', element: <Navigate to="/auth/404" /> },
    ],
  },
  {
    path: 'auth',
    element: <BlankLayout />,
    children: [
      { path: 'login', element: <Login /> },
      { path: '404', element: <Error /> },
      { path: 'register', element: <Register /> },
      { path: 'reset-password', element: <ResetPassword /> },
      { path: 'email-forgot-password', element: <ForgotPassword />},
      { path: 'email-link', element: <EmailLink />},
      {path:'addcompany',element:<Addcompany />},
      { path: '*', element: <Navigate to="/auth/404" /> },
    ],
  },
];

export default Router;
