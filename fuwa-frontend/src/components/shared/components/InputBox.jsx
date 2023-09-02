import { styled } from "@mui/material";

const Wrapper = styled("div")({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  width: "100%",
});

const Label = styled("p")({
  color: "#b9bbbe",
  textTransform: "uppercase",
  fontWeight: "600",
  fontSize: "16px",
});

const Input = styled("input")({
  height: "40px",
  border: "1px solid black",
  borderRadius: "5px",
  color: "#dcddde",
  background: "#35393f",
  margin: 0,
  fontSize: "16px",
  padding: "0 5px",
  flexGrow: "1",
});

const InputBox = (props) => {
  const { value, setValue, placeholder, label, type } = props;

  const handleValueChange = (e) => {
    setValue(e.target.value);
  };
  return (
    <Wrapper>
      <Label>{label}</Label>
      <Input
        value={value}
        type={type}
        placeholder={placeholder}
        onChange={handleValueChange}
      ></Input>
    </Wrapper>
  );
};

export default InputBox;
