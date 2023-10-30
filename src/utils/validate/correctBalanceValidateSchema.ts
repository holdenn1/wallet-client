


import * as yup from 'yup'

export default yup.object().shape({
  method: yup.string().required('Method is required field'),
  balanceType: yup.string().required('Balance type is required field'),
  
})
