export type InitialValuesSignUpForm = {
  firstName: ''
  lastName: ''
  birthday: ''
  email: ''
  password: ''
  confirmPassword: ''
}

export type RegistrationData = InitialValuesSignUpForm & {
  photo: File
}
