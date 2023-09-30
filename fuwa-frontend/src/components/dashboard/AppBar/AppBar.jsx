import { styled } from "@mui/material";

const MainContainer = styled("div")({
  position: "absolute",
  top: 0,
  right: 0,
  height: "48px",
  width: "calc(100% - 326px)",
  borderBottom: "1px solid black",
  backgroundColor: "#36393f",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  padding: "0 15px",
});

const AppBar = () => {
  return <MainContainer></MainContainer>;
};

export default AppBar;
