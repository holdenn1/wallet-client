export type TransactionOptionMenus = 'categories' | 'payment-method' | 'addition-information' | ''

export type OperationTypes = 'cost' | 'income' | 'transfer' | ''

export type PaymentMethodType = {
  name: string
  id?: number | null
}