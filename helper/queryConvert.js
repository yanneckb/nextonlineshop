// converts the query string to api readable string
export function QueryConvert(category) {
  if (category === `womens-clothing`) {
    return `women's clothing`;
  }
  if (category === `mens-clothing`) {
    return `men's clothing`;
  }
  return category;
}
