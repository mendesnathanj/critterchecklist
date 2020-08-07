import { currMonth, nextMonth, prevMonth } from './constants';

export const mapParams = params => {
  let query = '';
  for (const [k, v] of Object.entries(params)) query += `${k}=${v}`

  if (query.length === 0) return '';

  return '?' + query;
};

export const apiUrl = endpoint => `${process.env.REACT_APP_API_URL}${endpoint}`;

export const cn = (...args) =>
  args.reduce((acc, cur) => `${acc} ${cur}`)


export const filterByLocation = (collection, location) =>
  collection.filter(item => item.location.includes(location))


export const filterByLeavingThisMonth = (collection, hemisphere) => {
  const ans = collection
    .filter(item => {
      const months = item.months
        .filter(month => month.hemisphere === hemisphere)
        .map(month => month.name)

      return months.includes(currMonth) && !months.includes(nextMonth);
    })

    console.log('Done computing');
    return ans;
  // collection
  //   .filter(item => {
  //     const months = item.months
  //       .filter(month => month.hemisphere === hemisphere)
  //       .map(month => month.name)

  //       return months.includes(currMonth) && !months.includes(nextMonth);
  //   })
  }


export const filterByArrivingThisMonth = (collection, hemisphere) =>
  collection
    .filter(item => {
      const months = item.months
        .filter(month => month.hemisphere === hemisphere)
        .map(month => month.name)

      return months.includes(currMonth) && !months.includes(prevMonth);
    })

