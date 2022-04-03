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
