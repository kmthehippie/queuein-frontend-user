import { useState, useCallback } from "react";

const useEmailValidation = () => {
  const [emailError, setEmailError] = useState(false);
  const [emailHelperText, setEmailHelperText] = useState("");

  const validateEmail = useCallback((email) => {
    if (!email) {
      setEmailError(true);
      setEmailHelperText("Email is required");
      return false;
    }
    if (!/^\w+@\w+\.\w+$/.test(email)) {
      setEmailError(true);
      setEmailHelperText("Invalid email format");
      return false;
    }
    setEmailError(false);
    setEmailHelperText("");
    return true;
  }, []);

  return {
    emailError,
    emailHelperText,
    validateEmail,
  };
};

export default useEmailValidation;
