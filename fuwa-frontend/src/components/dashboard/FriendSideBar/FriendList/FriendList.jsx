import { styled } from "@mui/material";
import FriendsListItem from "./FriendsListItem";
import { useSelector } from "react-redux";

const MainContainer = styled("div")({
  flexGrow: 1,
  width: "100%",
});

const FriendList = () => {
  const friends = useSelector((state) => state.friend.friends);
  const onlineFriends = useSelector((state) => state.friend.onlineFriends);
  return (
    <MainContainer>
      {friends.map((friend) => (
        <FriendsListItem
          id={friend.id}
          key={friend.id}
          username={friend.name}
          isOnline={onlineFriends.includes(friend.id)}
        />
      ))}
    </MainContainer>
  );
};

export default FriendList;
