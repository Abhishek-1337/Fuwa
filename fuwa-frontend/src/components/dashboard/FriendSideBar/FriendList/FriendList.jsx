import { styled } from "@mui/material";
import FriendsListItem from "./FriendsListItem";

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
  return (
    <MainContainer>
      {DUMMY.map((user) => (
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
