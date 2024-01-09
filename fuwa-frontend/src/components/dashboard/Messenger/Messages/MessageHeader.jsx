import { styled } from "@mui/material";
import { Typography } from "@mui/material";
import Avatar from "../../../shared/components/Avatar";

const MainContainer = styled("div")({
  width: "97%",
  display: "flex",
  flexDirection: "column",
  marginTop: "10px",
  padding: "10px",
});

const MessageHeader = ({ name = "" }) => {
  return (
    <MainContainer>
      <Avatar large username={name} />
      <Typography
        variant="h5"
        sx={{
          color: "white",
          fontWeight: "bold",
          marginLeft: "5px",
          marginRight: "5px",
        }}
      >
        {name}
      </Typography>
      <Typography
        sx={{
          color: "#b9bbbe",
          marginLeft: "5px",
          marginRight: "5px",
        }}
      >
        This is the beginning of your conversation with {name}
      </Typography>
    </MainContainer>
  );
};

export default MessageHeader;
