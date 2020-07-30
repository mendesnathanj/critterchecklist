export const mapParams = params => {
  let query = '';
  for (const [k, v] of Object.entries(params)) query += `${k}=${v}`

  if (query.length === 0) return '';

  return '?' + query;
};
