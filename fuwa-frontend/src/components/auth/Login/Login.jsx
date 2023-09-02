import { useState } from "react";
import AuthBox from "../../shared/components/AuthBox";
import LoginHeader from "./LoginHeader";
import LoginInput from "./LoginInput";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  return (
    <AuthBox>
      <LoginHeader />
      <LoginInput
        mail={email}
        setMail={setEmail}
        password={password}
        setPassword={setPassword}
      />
    </AuthBox>
  );
};

export default Login;
