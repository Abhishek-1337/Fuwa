import store from "../../../store/index";
import { chatActions } from "../../../store/slices/chatSlice";

export const updateDirectChatHistoryIfActive = (data) => {
  const { participants, messages } = data;

  const recieverId = store.getState().chat.chosenChatDetails?.id;
  const userId = store.getState().auth.userDetails.id;

  if (recieverId && userId) {
    const usersInConversation = [recieverId, userId];
    updateChatHistoryIfSameConversationActive(
      participants,
      usersInConversation,
      messages
    );
  }
};

const updateChatHistoryIfSameConversationActive = (
  participants,
  usersInConversation,
  messages
) => {
  const result = participants.every((participantId) => {
    return usersInConversation.includes(participantId);
  });

  if (result) {
    store.dispatch(chatActions.setMessages(messages));
  }
};
