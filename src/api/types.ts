export type LoginResponse = {
  token: string;
};

export type LoginRequest = {
  username: string;
  password: string;
};

export type RegisterResponse = {
  token: string;
};

export type RegisterRequest = LoginRequest & {
  email: string;
};

export type UserResponse = {
  _id: string;
  username: string;
  email: string;
  lastVisit: string;
  createdAt: string;
  updatedAt: string;
  avatar?: string;
};

export type ChatsResponse = {
  _id: string;
  users: UserResponse[];
  lastMessage: {
    _id: string;
    chat: string;
    createdAt: string;
    text: string;
    updatedAt: string;
    user: string;
  };
}[];
