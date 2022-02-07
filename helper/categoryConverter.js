export function categoryConvert(cat) {
  if (cat === `electronics`) {
    return 'Elektronik';
  }
  if (cat === `women's clothing`) {
    return 'Damenkleidung';
  }
  if (cat === `men's clothing`) {
    return 'Herrenkleidung';
  }
  if (cat === `jewelery`) {
    return 'Schmuck';
  }
  if (cat === `Elektronik`) {
    return 'electronics';
  }
  if (cat === `Damenkleidung`) {
    return `women's clothing`;
  }
  if (cat === 'Herrenkleidung') {
    return `men's clothing`;
  }
  if (cat === 'Schmuck') {
    return `jewelery`;
  }
}
