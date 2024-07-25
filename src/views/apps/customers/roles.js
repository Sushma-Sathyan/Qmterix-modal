import img1 from '../../../assets/images/users/1.jpg';
import img2 from '../../../assets/images/users/2.jpg';
import img3 from '../../../assets/images/users/3.jpg';
import img4 from '../../../assets/images/users/4.jpg';
import img5 from '../../../assets/images/users/5.jpg';

const Customers = [
  {
    imgsrc: img4,
    name: 'admin',
    email: 'All Users',
    pname: 'All Teams',
    teams: [
      {
        color: (theme) => theme.palette.primary.main,
        text: 'Y',
      },
      {
        color: (theme) => theme.palette.error.main,
        text: 'X',
      },
    ],
    status: 'Active',
   
  },
  {
    imgsrc: img1,
    name: 'employee',
    email: 'All Users',
    pname: 'All Teams',
    teams: [
      {
        color: (theme) => theme.palette.secondary.main,
        text: 'S',
      },
      {
        color: (theme) => theme.palette.error.main,
        text: 'D',
      },
    ],
    status: 'Active',
    
  },
  {
    imgsrc: img2,
    name: 'manager',
    email: 'All Users',
    pname: 'All Teams',
    teams: [
      {
        color: (theme) => theme.palette.primary.main,
        text: 'A',
      },
      {
        color: (theme) => theme.palette.success.main,
        text: 'X',
      },
      {
        color: (theme) => theme.palette.secondary.main,
        text: 'N',
      },
    ],
    status: 'Active',
   
  },
  {
    imgsrc: img3,
    name: 'manager',
    email: 'All Users',
    pname: 'All Teams',
    teams: [
      {
        color: (theme) => theme.palette.error.main,
        text: 'X',
      },
    ],
    status: 'Active',
    
  },

  {
    imgsrc: img5,
    name: 'Micheal Doe',
    email: 'micheal@gmail.com',
    pname: 'Helping Hands WP Theme',
    teams: [
      {
        color: (theme) => theme.palette.secondary.main,
        text: 'S',
      },
    ],
    status: 'In-Active',
   
  }
 
];

export default Customers;
