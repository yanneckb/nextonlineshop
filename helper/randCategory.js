export function randCategory() {
  const categories = [
    'electronics',
    'jewelery',
    "men's clothing",
    "women's clothing",
  ];
  const randIndex = Math.floor(Math.random() * categories.length);
  return categories[randIndex];
}
