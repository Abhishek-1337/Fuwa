import { styled } from "@mui/material";

const Separator = styled("div")({
  height: "1px",
  background: "#b3bbbe",
  position: "relative",
  marginTop: "20px",
  marginBottom: "10px",
});

const DateLabel = styled("span")({
  backgroundColor: "#36393f",
  color: "#b3bbbe",
  position: "absolute",
  top: "-10px",
  left: "45%",
  padding: "0 5px",
  fontSize: "14px",
});

const DateSeparator = ({ date }) => {
  return (
    <Separator>
      <DateLabel>{date}</DateLabel>
    </Separator>
  );
};

export default DateSeparator;
