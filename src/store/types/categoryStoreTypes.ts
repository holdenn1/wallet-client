export type InitialValuesCategoryStore = {
  cost: CostCategory[]
  income: IncomeCategory[]
}

export enum CategoryType {
  COST = 'cost',
  INCOME = 'income'
}

type Category = {
  id: number
  type: CategoryType
  category: string
  categoryIcon: string
  categoryIconBackground: string
  subcategories: Subcategory[]
}

type CostCategory = Category
type IncomeCategory = Omit<Category, 'subcategories'>

type Subcategory = {
  id: number
  type: CategoryType.COST
  subcategory: string
  subcategoryIcon: string
  subcategoryIconBackground: string
}

export type GetCategoriesResponse = {
  data: {
    cost: Category[],
    income: Category[]
  }
}