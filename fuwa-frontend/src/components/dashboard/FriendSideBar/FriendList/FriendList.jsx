import { styled } from "@mui/material";
import FriendsListItem from "./FriendsListItem";
import { useSelector } from "react-redux";

const DUMMY = [
  {
    id: 1,
    username: "Alice",
    isOnline: true,
  },
  {
    id: 2,
    username: "Bob",
    isOnline: true,
  },
  {
    id: 3,
    username: "Johan",
    isOnline: true,
  },
];

const MainContainer = styled("div")({
  flexGrow: 1,
  width: "100%",
});

const FriendList = () => {
  const friends = useSelector((state) => state.friend.friends);
  return (
    <MainContainer>
      {friends.map((user) => (
        <FriendsListItem
          id={user.id}
          key={user.id}
          username={user.username}
          isOnline={user.isOnline}
        />
      ))}
    </MainContainer>
  );
};

export default FriendList;
