export type InitialValues = {
  firstName: ''
  lastName: ''
  age: ''
  email: ''
  password: ''
  confirmPassword: ''
}

export type RegistrationData = InitialValues & {
  photo: File
}