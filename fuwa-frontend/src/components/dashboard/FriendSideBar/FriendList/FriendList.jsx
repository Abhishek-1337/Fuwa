import { styled } from "@mui/material";
import FriendsListItem from "./FriendsListItem";
import { useSelector } from "react-redux";

const MainContainer = styled("div")({
  flexGrow: 1,
  width: "100%",
});

const FriendList = () => {
  const friends = useSelector((state) => state.friend.friends);
  console.log(friends);
  return (
    <MainContainer>
      {friends.map((user) => (
        <FriendsListItem
          id={user.id}
          key={user.id}
          username={user.name}
          isOnline={user.isOnline}
        />
      ))}
    </MainContainer>
  );
};

export default FriendList;
