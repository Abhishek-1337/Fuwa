import { useState } from "react";
import AuthBox from "../../shared/components/AuthBox";
import LoginHeader from "./LoginHeader";
import LoginInput from "./LoginInput";
import LoginFooter from "./LoginFooter";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isFormValid, setIsFormValid] = useState(false);

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
