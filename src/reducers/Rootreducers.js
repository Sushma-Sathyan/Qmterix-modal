import { combineReducers } from 'redux';
import CustomizerReducer from '../redux/customizer/CustomizerReducer';
import registerReducer from './RegisterReducer';
import userLoginReducer from './Authreducer';
import resetPasswordReducer from './reset-password';
import forgotPasswordReducer from './forgotPassword';
import addRoleReducer from './RoleReducer/addRoleReducer';
import getRoleReducer from './RoleReducer/getRoleReducer';
import getTeamReducer from './TeamReducer/getTeamReducer';
import addTeamReducer from './TeamReducer/addTeamReducer';
import getAllProjectListReducer from './JiraDashboardReducer/getAllProjectListReducer';
import getAllSprintListReducer from './JiraDashboardReducer/getAllSprintListReducer';
import getAllSprintListDetailesReducer from './JiraDashboardReducer/getAllSprintDetailsReducer';
import getAllTicketListReducer from './TicketsCompletedReducer/getAllTicketsCompletedReducer';

const RootReducers = combineReducers({
  userLoginReducer,
  CustomizerReducer,
  registerReducer,
  resetPasswordReducer,
  forgotPasswordReducer,
  addRoleReducer,
  getRoleReducer,
  getTeamReducer,
  addTeamReducer,
  getAllProjectListReducer,
  getAllSprintListReducer,
  getAllSprintListDetailesReducer,
  getAllTicketListReducer,
});

export default RootReducers;
