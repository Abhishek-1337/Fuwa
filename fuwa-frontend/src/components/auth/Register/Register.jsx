import { useEffect, useState } from "react";
import AuthBox from "../../shared/components/AuthBox";
import { Typography } from "@mui/material";
import RegisterInput from "./RegisterInput";
import RegisterFooter from "./RegisterFooter";
import { validateRegisterForm } from "../../shared/utils/validator";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const [isFormValid, setIsFormValid] = useState(false);

  const handleRegister = () => {
    console.log("signing up the user");
  };

  useEffect(() => {
    setIsFormValid(validateRegisterForm(email, password, username));
  }, [email, password, username, setIsFormValid]);

  return (
    <AuthBox>
      <Typography variant="h5" sx={{ color: "white" }}>
        Create an account
      </Typography>
      <RegisterInput
        mail={email}
        setMail={setEmail}
        password={password}
        setPassword={setPassword}
        name={username}
        setName={setUsername}
      />
      <RegisterFooter
        isFormValid={isFormValid}
        handleRegister={handleRegister}
      />
    </AuthBox>
  );
};

export default Register;
