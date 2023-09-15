export type InitialValuesSignUpForm = {
  firstName: ''
  lastName: ''
  birthday: ''
  email: ''
  password: ''
  confirmPassword: ''
}

export type InitialValuesSignInForm = {
  email: ''
  password: ''
}

export type RegistrationData = InitialValuesSignUpForm & {
  photo: File
}
