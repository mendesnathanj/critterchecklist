export const mapParams = params => {
  let query = '';
  for (const [k, v] of Object.entries(params)) query += `${k}=${v}`

  if (query.length === 0) return '';

  return '?' + query;
};

export const apiUrl = endpoint => `${process.env.REACT_APP_API_URL}${endpoint}`;

export const cn = (...args) =>
  args.reduce((acc, cur) => `${acc} ${cur}`)

