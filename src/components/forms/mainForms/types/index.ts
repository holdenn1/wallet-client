export type InitialValuesSignUpForm = {
  firstName: string
  lastName: string
  birthday: string
  email: string
  password: string
  confirmPassword: string
}

export type InitialValuesSignInForm = {
  email: string
  password: string
}

export type RegistrationData = InitialValuesSignUpForm & {
  photo: File
}
