export type InitialValuesCategoryStore = {
  cost: Category[]
  income: Category[]
}

export enum CategoryType {
  COST = 'cost',
  INCOME = 'income',
  OTHER = 'other'
}

export type Category = {
  id: number
  type: CategoryType
  category: string
  categoryIcon: string
  categoryIconBackground: string
  subcategories: Subcategory[]
}


type Subcategory = {
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
    other: Category[]
  }
}