import img1 from '../../../assets/images/users/1.jpg';
import img2 from '../../../assets/images/users/2.jpg';
import img3 from '../../../assets/images/users/3.jpg';
import img4 from '../../../assets/images/users/4.jpg';
import img5 from '../../../assets/images/users/5.jpg';

const Customers = [
  {
    imgsrc: img4,
    name: 'Nirav Joshi',
    email: 'nirav@gmail.com',
    pname: 'Hosting Press HTML',
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
    name: 'Sunil Joshi',
    email: 'sunil@gmail.com',
    pname: 'Elite Admin',
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
    name: 'Andrew McDownland',
    email: 'andrew@gmail.com',
    pname: 'Real Homes WP Theme',
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
    status: 'Pending',
   
  },
  {
    imgsrc: img3,
    name: 'Christopher Jamil',
    email: 'jamil@gmail.com',
    pname: 'MedicalPro WP Theme',
    teams: [
      {
        color: (theme) => theme.palette.error.main,
        text: 'X',
      },
    ],
    status: 'Completed',
    
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
    status: 'Cancel',
   
  },
  {
    imgsrc: img4,
    name: 'Nirav Joshi',
    email: 'nirav@gmail.com',
    pname: 'Hosting Press HTML',
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
    name: 'Sunil Joshi',
    email: 'sunil@gmail.com',
    pname: 'Elite Admin',
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
    name: 'Andrew McDownland',
    email: 'andrew@gmail.com',
    pname: 'Real Homes WP Theme',
    teams: [
      {
        color: (theme) => theme.palette.primary.main,
        text: 'A',
      },
      {
        color: (theme) => theme.palette.warning.main,
        text: 'X',
      },
      {
        color: (theme) => theme.palette.secondary.main,
        text: 'N',
      },
    ],
    status: 'Pending',
   
  },
  {
    imgsrc: img3,
    name: 'Christopher Jamil',
    email: 'jamil@gmail.com',
    pname: 'MedicalPro WP Theme',
    teams: [
      {
        color: (theme) => theme.palette.error.main,
        text: 'X',
      },
    ],
    status: 'Completed',
   
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
    status: 'Cancel',
   
  },
];

export default Customers;
