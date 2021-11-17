export const numberFormat = (value: number, isPrice: boolean) => {
  const options = isPrice ? { style: 'currency', currency: 'USD' } : {};
  return new Intl.NumberFormat('en-US', options).format(value);
};

export default null;
