import { currMonth, nextMonth, prevMonth } from './constants';

const availableMonths = (months, hemisphere) =>
  new Set(
    months
      .filter(month => month.hemisphere === hemisphere)
      .map(month => month.name)
  )


export const filterByLocation = (collection, location) =>
  collection.filter(item => item.location.includes(location))

export const filterByLeavingThisMonth = (collection, hemisphere) =>
  collection
    .filter(item => {
      const months = availableMonths(item.months, hemisphere);

      return months.has(currMonth) && !months.has(nextMonth);
  })


export const filterByArrivingThisMonth = (collection, hemisphere) =>
  collection
    .filter(item => {
      const months = availableMonths(item.months, hemisphere);

      return months.has(currMonth) && !months.has(prevMonth);
  })


export const filterByFoundThisMonth = (collection, hemisphere) =>
  collection
    .filter(item =>
      availableMonths(item.months, hemisphere).has(currMonth)
  )


export const filterByTimeAvailable = (collection, time) =>
  collection
