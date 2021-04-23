export interface User {
  name: string;
  password: string;
  avatar: string;
  description?: string;
}

// messaging
export interface Message {
  content: string;
}

export interface SingleChat {
  id: string;
  person1: User;
  person2: User;
  createdAt: number;
  isInit: boolean;
}
export interface SingleChatData {
  chat: SingleChat;
  messages: Message[];
  draftMessage: string;
}

export interface CollectiveChatData {
  chats: SingleChat[];
  chatData: SingleChatData[];
}
