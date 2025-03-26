export const checkValidData = (email, password, name) => {
  const isValidEmail = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email);
  const isValidPassword = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);
  const isNameValid = /^[A-Za-z\\s]+$/.test(name);
  if(!isValidEmail) {
    return 'Invalid Email';
  }
  if(!isValidPassword) {
    return 'Invalid Password';
  }
  if (!isNameValid) {
    return 'Invalid Name'; 
  }
  return null;

}