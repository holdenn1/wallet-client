export type TransactionOptionMenus = 'categories' | 'payment-method' | 'addition-information' | ''

export type OperationTypes = 'cost' | 'income' | 'transfer' | ''

export enum PaymentMethodType {
  CREDIT_CARD = 'card',
  CASH = 'cash'
}

export enum Banks {
  MONOBANK  = 'MonoBank',
  PRIVAT_BANK  = 'PrivatBank',
  OSCHADBANK = 'OschadBank'
}

export type UpdateTransactionFormData = {
  amount: number | undefined
  createAt: string | undefined
  recipient: string | undefined
  description: string | undefined
}