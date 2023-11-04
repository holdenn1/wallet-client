import * as yup from 'yup'

export default yup.object().shape({
  amount: yup.string().required('Amount is required field'),
  recipient: yup.string().trim(),
  description: yup.string().trim()
})
