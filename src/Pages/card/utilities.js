export const validateField = (name, value) => {
  let error = '';
  switch (name) {
    case 'cardholderName':
      if (!value.trim()) {
        error = "Cardholder name is required";
      } else if (!/^[a-zA-Z\s]+$/.test(value)) {
        error = "Name should only contain letters";
      }
      break;
    case 'cardNumber':
      const cleanNumber = value.replace(/\s/g, '');
      if (!cleanNumber) {
        error = "Card number is required";
      } else if (!/^\d{16}$/.test(cleanNumber)) {
        error = "Card number should be 16 digits";
      }
      break;
    case 'cvv':
      if (!value) {
        error = "CVV is required";
      } else if (!/^\d{3}$/.test(value)) {
        error = "CVV should be 3 digits";
      }
      break;
    case 'expiryMonth':
      if (!value) {
        error = "Month is required";
      } else if (!/^(0[1-9]|1[0-2])$/.test(value)) {
        error = "Enter valid month (01-12)";
      }
      break;
    case 'expiryYear':
      if (!value) {
        error = "Year is required";
      } else if (!/^\d{2}$/.test(value)) {
        error = "Enter valid year (YY)";
      }
      break;
    default:
      break;
  }
  return error;
};

export const formatCardNumber = (value) => {
  const cleaned = value.replace(/\s/g, '');
  const formatted = cleaned.match(/.{1,4}/g)?.join(' ') || cleaned;
  return formatted;
};