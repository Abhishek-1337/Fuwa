export const validateLoginForm = (mail, password) => {
  const isMailValid = validateMail(mail);
  const isPasswordValid = validatePassword(password);
  return isMailValid && isPasswordValid;
};

export const validateRegisterForm = (mail, password, name) => {
  const isMailValid = validateMail(mail);
  const isNameValid = validateName(name);
  const isPasswordValid = validatePassword(password);

  return isMailValid && isPasswordValid && isNameValid;
};

const validateMail = (mail) => {
  const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
  return emailPattern.test(mail);
};

const validateName = (name) => {
  return name.length > 5 && name.length < 14;
};

const validatePassword = (password) => {
  return password.length > 6 && password.length < 14;
};
