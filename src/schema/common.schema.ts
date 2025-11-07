export const validEmail = (value: string): boolean => {
  const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  return regex.test(value);
};

// ----------------------------

export const validMobileNumber = (value: string): boolean => {
  const regex = /^((?:\+91[\-\s]?|0)?[6-9]\d{9})$/;
  return regex.test(value);
};

// ----------------------------

export const validNumber = (value: string | number, length: number) => {
  if (value === null || value === undefined || value === '') return true;
  const str = String(value);
  const pattern = /^[0-9]+$/;
  return str.length === length && pattern.test(str);
};
