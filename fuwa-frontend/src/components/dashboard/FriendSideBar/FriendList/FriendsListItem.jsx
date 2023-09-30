import { Button, Typography } from "@mui/material";
import Avatar from "../../../shared/components/Avatar";

const FriendsListItem = ({ username }) => {
  console.log(username);
  return (
    <Button
      style={{
        width: "100%",
        height: "42px",
        marginTop: "10px",
        display: "flex",
        alignItems: "center",
        justifyContent: "flex-start",
        textTransform: "none",
        color: "black",
        position: "relative",
      }}
    >
      <Avatar username={username} />
      <Typography
        style={{
          color: "#8e9297",
          fontWeight: 700,
          marginLeft: "7px",
        }}
        variant="subtitle1"
        align="left"
      >
        {username}
      </Typography>
    </Button>
  );
};

export default FriendsListItem;
