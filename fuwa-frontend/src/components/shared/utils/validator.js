export const validateInput = (mail, password) => {
  const isMailValid = validateMaiL(mail);
  const isPasswordValid = validatePassword(password);
  console.log(isMailValid + " " + isPasswordValid);
  return isMailValid && isPasswordValid;
};

const validateMaiL = (mail) => {
  const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
  return emailPattern.test(mail);
};

const validatePassword = (password) => {
  return password.length > 6 && password.length < 12;
};
