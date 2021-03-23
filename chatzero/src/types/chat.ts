export interface User {
    name: string;
    avatar: string;
}

export interface Message {
    content: string;
    sender: User;
    receiver: User;
    sentTime: number;
    receivedTime: number;
}