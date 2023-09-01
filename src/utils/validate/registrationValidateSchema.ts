import * as yup from 'yup'
import differenceInYears from 'date-fns/differenceInYears'

export default [
  yup.object({
    firstName: yup.string().required('First name is a required field'),
    lastName: yup.string().required('Last name is a required field'),
    birthDay: yup
      .date()
      .nullable()
      .test('birthDay', 'Should be greater than 18', function (value) {
        if (value) {
          return differenceInYears(new Date(), new Date(value)) >= 18
        }
      })
  }),
  yup.object({
    email: yup.string().required('Email is required field').email('Invalid email address'),
    password: yup
      .string()
      .required('Password is required field')
      .min(6, 'Password must contain at least six characters')
      .matches(
        /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{6,}$/,
        'Password must contain a letter, a number and one special character'
      ),
    confirmPassword: yup
      .string()
      .oneOf([yup.ref('password')], 'Password must match')
      .required('Confirm password is required')
  })
]
