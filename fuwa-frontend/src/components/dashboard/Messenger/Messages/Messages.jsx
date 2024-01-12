import { styled } from "@mui/material";
import MessageHeader from "./MessageHeader";
import { useSelector } from "react-redux";
import Message from "./Message";
import DateSeparator from "./DateSeparator";

const MainContainer = styled("div")({
  height: "calc(100%-100px)",
  display: "flex",
  flexDirection: "column",
});

const convertDateToHumanReadable = (date, format) => {
  const map = {
    mm: date.getMonth() + 1,
    dd: date.getDate(),
    yy: date.getFullYear().toString().slice(-2),
    yyyy: date.getFullYear(),
  };
  return format.replace(/mm|dd|yy|yyyy/gi, (matched) => {
    return map[matched];
  });
};

const Messages = () => {
  const chat = useSelector((state) => state.chat);

  return (
    <MainContainer>
      <MessageHeader name={chat.chosenChatDetails?.name} />
      {chat.messages?.map((message, index) => {
        const sameAuthor =
          index > 0 &&
          message[index]?.author._id === message[index - 1]?.author._id;

        const sameDay =
          index > 0 &&
          convertDateToHumanReadable(
            new Date(message[index]?.date),
            "dd/mm/yy"
          ) ===
            convertDateToHumanReadable(
              new Date(message[index - 1]?.date),
              "dd/mm/yy"
            );

        return (
          <div key={message._id}>
            {(!sameDay || index === 0) && (
              <DateSeparator
                date={convertDateToHumanReadable(
                  new Date(message?.date),
                  "dd/mm/yy"
                )}
              />
            )}
            <Message
              content={message.content}
              name={message.author.name}
              sameAuthor={sameAuthor}
              date={convertDateToHumanReadable(
                new Date(message?.date),
                "dd/mm/yy"
              )}
              sameDay={sameDay}
            />
          </div>
        );
      })}
    </MainContainer>
  );
};

export default Messages;
