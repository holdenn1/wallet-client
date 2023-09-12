export type User = {
  id: null
  firstName: string
  lastName: string
  email: string
  photo: null
  birthday: string | null
  cash: string
  isEmailConfirmed: boolean
}

export type InitialValuesUserStore = {
  user: User | null
  isContinueAuth: boolean
}

export type AuthResponse = {
  data: {
    user: User
    accessToken: string
    refreshToken: string
  }
}

export type GoogleParseData = {
    user: User
    accessToken: string
    refreshToken: string
}

export type RefreshTokensLoginResponse = {
  data: {
    user: User;
    tokens: {
      refreshToken: string;
      accessToken: string;
    };
  };
};

