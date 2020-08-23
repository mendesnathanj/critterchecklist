export const authorizedHeaders = {
  Authorization: `Bearer ${localStorage.getItem('token')}`
};

export const monthNames = [
  'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
  'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'
];

export const currMonth = monthNames[new Date().getMonth()];

export const nextMonth = monthNames[
  (monthNames.indexOf(currMonth) + 1) % monthNames.length
];

export const prevMonth = monthNames[
  ((monthNames.indexOf(currMonth) - 1) + monthNames.length) % monthNames.length
];

export const monthlyFilters = {
  leavingThisMonth: false,
  arrivingThisMonth: false,
  availableThisMonth: false
};
