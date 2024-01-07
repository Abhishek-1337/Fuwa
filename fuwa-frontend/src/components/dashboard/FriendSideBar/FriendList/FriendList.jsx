import { styled } from "@mui/material";
import FriendsListItem from "./FriendsListItem";
import { useSelector } from "react-redux";

const MainContainer = styled("div")({
  flexGrow: 1,
  width: "100%",
});

const checkFriendsOnline = (friends = [], onlineFriends = []) => {
  friends.forEach((friend) => {
    const userOnline = onlineFriends.find((user) => {
      return user.id === friend.id;
    });
    friend = { ...friend, isOnline: userOnline ? true : false };
  });

  return friends;
};

const FriendList = () => {
  const friends = useSelector((state) => state.friend.friends);
  const onlineFriends = useSelector((state) => state.friend.onlineFriends);
  return (
    <MainContainer>
      {checkFriendsOnline(friends, onlineFriends).map((user) => (
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
