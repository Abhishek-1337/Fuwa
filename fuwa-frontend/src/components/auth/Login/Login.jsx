import { useState } from "react";
import AuthBox from "../../shared/components/AuthBox";
import { useEffect } from "react";
import LoginHeader from "./LoginHeader";
import LoginInput from "./LoginInput";
import LoginFooter from "./LoginFooter";
import { validateLoginForm } from "../../shared/utils/validator";
import { signIn } from "../../../store/slices/authSlice";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isFormValid, setIsFormValid] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    setIsFormValid(validateLoginForm(email, password));
  }, [email, password, setIsFormValid]);

  const handleLogin = () => {
    console.log("Logging in");
    dispatch(
      signIn(
        {
          email,
          password,
        },
        navigate
      )
    );
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
