import { Tooltip } from "@mui/material";
import CustomPrimaryButton from "../../shared/components/CustomPrimaryButton";
import RedirectInfo from "../../shared/components/RedirectInfo";
import { useNavigate } from "react-router-dom";

const getFormNotValid = () => {
  return "Username should contains between 3 to 12 characters and password should contains 6 to 12 characters. Email should be correct too ";
};

const getFormValid = () => {
  return "Click to Register";
};

const RegisterFooter = ({ isFormValid, handleRegister }) => {
  const navigate = useNavigate();
  const handlePushToLoginPage = () => {
    navigate("/login");
  };
  return (
    <>
      <Tooltip title={isFormValid ? getFormValid() : getFormNotValid()}>
        <div>
          <CustomPrimaryButton
            label="Register"
            additionalStyles={{ marginTop: "30px" }}
            disabled={!isFormValid}
            onClick={handleRegister}
          />
        </div>
      </Tooltip>
      <RedirectInfo
        text=""
        additionalStyles={{ marginTop: "10px" }}
        redirectText="Already have an account ?"
        redirectHandler={handlePushToLoginPage}
      />
    </>
  );
};

export default RegisterFooter;
