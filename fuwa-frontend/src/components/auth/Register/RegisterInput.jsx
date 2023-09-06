import InputBox from "../../shared/components/InputBox";

const RegisterInput = (props) => {
  const { mail, setMail, password, setPassword, name, setName } = props;
  return (
    <>
      <InputBox
        value={mail}
        setValue={setMail}
        placeholder="Enter e-mail address"
        label="e-mail address"
        type="text"
      />
      <InputBox
        value={name}
        setValue={setName}
        placeholder="Enter your name"
        label="Name"
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

export default RegisterInput;
