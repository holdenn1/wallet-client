export type InitialValuesCategoryStore = {
  cost: Category[]
  income: Category[],
  transfer: Category[]
}

export enum CategoryType {
  COST = 'cost',
  INCOME = 'income',
  OTHER = 'other',
  TRANSFER = 'transfer'
}

export type Category = {
  id: number
  type: CategoryType
  category: string
  categoryIcon: string
  categoryIconBackground: string
  subcategories: Subcategory[]
}


export type Subcategory = {
  id: number
  type: CategoryType
  subcategory: string
  subcategoryIcon: string
  subcategoryIconBackground: string
}

export type GetCategoriesResponse = {
  data: {
    cost: Category[],
    income: Category[],
    other: Category[],
    transfer: Category[]
  }
}