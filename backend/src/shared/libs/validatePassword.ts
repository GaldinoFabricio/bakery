export async function validatePassword(str: string) {
  const length = 8;
  const regexValidate = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/gm;
  
  if (!str || typeof str !== "string") {
    return false;
  }
  
  if (str.length < length) {
    return false;
  }
  
  if (!regexValidate.test(str)) {
    return false;
  }

  return true;
}