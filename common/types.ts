export interface User {
  name: string;
  password: string;
  avatar: string;
}
export interface Message {
  belongsTo: string; // chat id
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
