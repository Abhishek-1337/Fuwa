import { styled } from "@mui/material";

const AvatarReview = styled("div")({
  width: "42px",
  height: "42px",
  borderRadius: "42px",
  backgroundColor: "#5865F2",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  fontSize: "20px",
  fontWeight: "700",
  marginLeft: "5px",
  color: "white",
});

const Avatar = ({ username, large }) => {
  return (
    <AvatarReview
      style={large ? { width: "60px", height: "60px", fontSize: "20px" } : {}}
    >
      {username?.substring(0, 2)}
    </AvatarReview>
  );
};

export default Avatar;
