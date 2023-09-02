import Box from "@mui/material/Box";
import { styled } from "@mui/material";

const BoxWrapper = styled("div")({
  width: "100%",
  height: "100vh",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  background: "#5865F2",
});

const AuthBox = (props) => {
  return (
    <BoxWrapper>
      <Box
        sx={{
          width: 700,
          height: 400,
          bgcolor: "#36393f",
          borderRadius: "5px",
          display: "flex",
          flexDirection: "column",
          padding: "25px",
          boxShadow: "0 2px 10px 0 rgb(0 0 0 / 20%)",
        }}
      >
        {props.children}
      </Box>
    </BoxWrapper>
  );
};

export default AuthBox;
