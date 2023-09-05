import CustomPrimaryButton from "../../shared/components/CustomPrimaryButton";
import RedirectInfo from "../../shared/components/RedirectInfo";
import { useNavigate } from "react-router-dom";
import { Tooltip } from "@mui/material";

const getFormNotValid = () => {
  return "Enter correct email and password should contain character b/w 6 to 12";
};

const getFormValid = () => {
  return "Click to login";
};

const LoginFooter = ({ handleLogin, isFormValid }) => {
  const navigate = useNavigate();
  const handlePushToRegisterPage = () => {
    navigate("/register");
  };

  return (
    <>
      <Tooltip title={!isFormValid ? getFormNotValid() : getFormValid()}>
        <div>
          <CustomPrimaryButton
            disabled={!isFormValid}
            onClick={handleLogin}
            label="Log in"
            additionalStyles={{ marginTop: "30px" }}
          />
        </div>
      </Tooltip>
      <RedirectInfo
        text="Need an account? "
        redirectText="Create account"
        redirectHandler={handlePushToRegisterPage}
        additionalStyles={{ marginTop: "5px" }}
      />
    </>
  );
};
export default LoginFooter;
