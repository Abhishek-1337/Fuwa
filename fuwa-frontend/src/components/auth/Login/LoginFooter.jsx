import CustomPrimaryButton from "../../shared/components/CustomPrimaryButton";

const LoginFooter = ({ handleLogin, isFormValid }) => {
  return (
    <div>
      <CustomPrimaryButton
        disabled={!isFormValid}
        onClick={handleLogin}
        label="Log in"
        additionalStyles={{ marginTop: "30px" }}
      />
    </div>
  );
};
export default LoginFooter;
