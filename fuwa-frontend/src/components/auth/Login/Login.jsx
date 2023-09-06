import { useState } from "react";
import AuthBox from "../../shared/components/AuthBox";
import { useEffect } from "react";
import LoginHeader from "./LoginHeader";
import LoginInput from "./LoginInput";
import LoginFooter from "./LoginFooter";
import { validateLoginForm } from "../../shared/utils/validator";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isFormValid, setIsFormValid] = useState(false);

  useEffect(() => {
    setIsFormValid(validateLoginForm(email, password));
  }, [email, password, setIsFormValid]);

  const handleLogin = () => {
    console.log("Logging in");
  };
  return (
    <AuthBox>
      <LoginHeader />
      <LoginInput
        mail={email}
        setMail={setEmail}
        password={password}
        setPassword={setPassword}
      />
      <LoginFooter handleLogin={handleLogin} isFormValid={isFormValid} />
    </AuthBox>
  );
};

export default Login;
