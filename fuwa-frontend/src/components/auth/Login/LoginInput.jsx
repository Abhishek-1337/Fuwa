import InputBox from "../../shared/components/InputBox";

const LoginInput = ({ mail, setMail, password, setPassword }) => {
  return (
    <>
      <InputBox
        value={mail}
        setValue={setMail}
        placeholder="Enter email address"
        label="E-mail"
        type="text"
      />
      <InputBox
        value={password}
        setValue={setPassword}
        placeholder="Enter password"
        label="Password"
        type="password"
      />
    </>
  );
};

export default LoginInput;
