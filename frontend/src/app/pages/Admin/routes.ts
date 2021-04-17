const Menus = [
  {
    name: 'All',
    to: '/admin/',
    exact: true,
    index: 4,
  },

  {
    name: 'Account',
    to: '/manager',
    exact: true,
    index: 6,
  },

  {
    name: 'Doctor',
    to: '/admin/doctor',
    exact: true,
    index: 3,
  },
  {
    name: 'Analysis',
    to: '/admin/analysis',
    exact: true,
    index: 1,
  },
  {
    name: 'Feedback',
    to: '/admin/feedback',
    exact: true,
    index: 2,
  },
  {
    name: 'Logout',
    to: '/admin/logout',
    exact: true,
    index: 5,
  },
];

export { Menus };
