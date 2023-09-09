export type InitialValues = {
  firstName: ''
  lastName: ''
  birthday: ''
  email: ''
  password: ''
  confirmPassword: ''
}

export type RegistrationData = InitialValues & {
  photo: File
}