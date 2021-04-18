export interface User {
  name: string;
  password: string;
  avatar: string;
  description?: string;
}

// messaging
export interface Message {
  sender: User;
  receiver: User;
  text: string;
  sentAt: number;
  receivedAt: number | undefined;
}

export interface SingleChat {
  person1: User;
  person2: User;
  createdAt: number;
}

export interface SingleChatData {
  person1: User;
  person2: User;
  messages: Message[];
}
