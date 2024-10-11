import { BaseModel } from '@/models/base.model'
import type { Category, Product } from '@/types'

export class ProductModel extends BaseModel implements Product {
  id: number
  title: string
  price: number
  description: string
  category: Category
  images: string[]

  constructor(data: Product) {
    super(data)
    this.init(data)
  }
}
