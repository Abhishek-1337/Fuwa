import { Typography } from "@mui/material";

const FriendTitle = ({ title }) => {
  return (
    <Typography
      sx={{
        color: "#8e9297",
        fontSize: "14px",
        textTransform: "uppercase",
        marginTop: "10px",
      }}
    >
      {title}
    </Typography>
  );
};

export default FriendTitle;
