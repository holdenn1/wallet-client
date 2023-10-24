export type TransactionOptionMenus = 'categories' | 'payment-method' | 'addition-information' | ''

export type OperationTypes = 'cost' | 'income' | 'transfer' | ''

export enum PaymentMethodType {
  MONOBANK  = 'monobank',
  PRIVAT_BANK  = 'privat-bank',
  OSCHADBANK = 'oschadbank',
  CASH = 'cash'
}
