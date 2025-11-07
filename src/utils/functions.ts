export function formatIndian(num: number): string {
  const str = num.toString().split('.');
  let intPart = str[0];
  const decPart = str[1] ? '.' + str[1] : '';

  const last3 = intPart.slice(-3);
  let other = intPart.slice(0, -3);

  if (other !== '') {
    other = other.replace(/\B(?=(\d{2})+(?!\d))/g, ',');
    return other + ',' + last3 + decPart;
  }

  return last3 + decPart;
}
