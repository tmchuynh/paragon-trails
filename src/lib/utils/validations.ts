export function isValidEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

export function isValidPhoneNumber(phone: string): boolean {
  const phoneRegex = /^\+?[1-9]\d{1,14}$/; // E.164 format
  return phoneRegex.test(phone);
}

export function isValidDate(date: string): boolean {
  const dateRegex = /^\d{4}-\d{2}-\d{2}$/; // YYYY-MM-DD format
  if (!dateRegex.test(date)) return false;

  const parsedDate = new Date(date);
  return !isNaN(parsedDate.getTime());
}

export function isValidPostalCode(
  postalCode: string,
  country: string
): boolean {
  const postalCodeRegexes: { [key: string]: RegExp } = {
    US: /^\d{5}(-\d{4})?$/,
    CA: /^[A-Za-z]\d[A-Za-z] \d[A-Za-z]\d$/,
    UK: /^([A-Z]{1,2}\d[A-Z\d]? ?\d[A-Z]{2}|GIR 0AA)$/,
    // Add more countries as needed
  };

  const regex = postalCodeRegexes[country];
  return regex ? regex.test(postalCode) : false;
}

export function isValidCreditCard(cardNumber: string): boolean {
  const cardNumberRegex =
    /^(?:4[0-9]{12}(?:[0-9]{3})?|5[1-5][0-9]{14}|6(?:011|5[0-9]{2})[0-9]{12}|3[47][0-9]{13}|3(?:0[0-5]|[68][0-9])[0-9]{11}|(?:2131|1800|35\d{3})\d{11})$/;
  return cardNumberRegex.test(cardNumber);
}

export function isValidZipCode(zipCode: string, country: string): boolean {
  const zipCodeRegexes: { [key: string]: RegExp } = {
    US: /^\d{5}(-\d{4})?$/,
    CA: /^[A-Za-z]\d[A-Za-z] ?\d[A-Za-z]\d$/,
    UK: /^([A-Z]{1,2}\d[A-Z\d]? ?\d[A-Z]{2}|GIR 0AA)$/,
  };

  const regex = zipCodeRegexes[country];
  return regex ? regex.test(zipCode) : false;
}

export function isValidUsername(username: string): boolean {
  const usernameRegex = /^[a-zA-Z0-9._-]{3,20}$/; // Alphanumeric, underscores, dots, hyphens, 3-20 characters
  return usernameRegex.test(username);
}

export function isValidPassword(password: string): boolean {
  const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/; // At least 8 characters, 1 uppercase, 1 lowercase, 1 number
  return passwordRegex.test(password);
}

export function isValidCreditCardExpiry(expiry: string): boolean {
  const expiryRegex = /^(0[1-9]|1[0-2])\/?([0-9]{2})$/; // MM/YY format
  if (!expiryRegex.test(expiry)) return false;

  const [month, year] = expiry.split("/").map(Number);
  const currentYear = new Date().getFullYear() % 100; // Last two digits of the current year
  const currentMonth = new Date().getMonth() + 1; // Months are zero-indexed

  return (
    (year > currentYear || (year === currentYear && month >= currentMonth)) &&
    month >= 1 &&
    month <= 12
  );
}
export function isValidCreditCardCVV(cvv: string): boolean {
  const cvvRegex = /^\d{3,4}$/; // 3 or 4 digits
  return cvvRegex.test(cvv);
}

export function isValidUUID(uuid: string): boolean {
  const uuidRegex =
    /^[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i; // Standard UUID format
  return uuidRegex.test(uuid);
}

export function isValidTime(time: string): boolean {
  const timeRegex = /^([01]\d|2[0-3]):([0-5]\d)$/; // HH:MM format in 24-hour clock
  return timeRegex.test(time);
}
export function isValidCreditCardType(cardNumber: string): string | null {
  const cardTypes: { [key: string]: RegExp } = {
    Visa: /^4[0-9]{12}(?:[0-9]{3})?$/,
    MasterCard: /^5[1-5][0-9]{14}$/,
    "American Express": /^3[47][0-9]{13}$/,
    Discover: /^6(?:011|5[0-9]{2})[0-9]{12}$/,
    "Diners Club": /^3(?:0[0-5]|[68][0-9])[0-9]{11}$/,
    JCB: /^(?:2131|1800|35\d{3})\d{11}$/,
  };

  for (const [type, regex] of Object.entries(cardTypes)) {
    if (regex.test(cardNumber)) {
      return type;
    }
  }
  return null;
}
export function isValidAge(age: number): boolean {
  return age >= 0 && age <= 120; // Valid age range
}
