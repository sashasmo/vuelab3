import type { AxiosInstance } from 'axios'
import type { Product } from '@/types'
import type { Createable, Deleteable, Editable, Readable } from '@/services/types'
import { ProductModel } from '@/models/product.model'

export class ProductsService implements Readable<Product>, Createable<Product>, Editable<Product>, Deleteable<Product> {

  baseURL: string = '/products'

  constructor(public httpClient: AxiosInstance) {
  }

  /**
   * Get products
   * @param params
   */
  async get(params: any): Promise<Product[]> {
    const response = await this.httpClient.get<Product[]>(this.baseURL, { params })
    return response.data.map((category) => new ProductModel(category))
  }

  /**
   * Get product by id
   * @param id
   */
  async getById(id: number): Promise<Product> {
    const response = await this.httpClient.get<Product>(this.baseURL, { params: { id } })
    return new ProductModel(response.data)
  }

  async create(data: Product): Promise<Product> {
    const response = await this.httpClient.post<Product>(this.baseURL, data)
    return new ProductModel(response.data)
  }

  async delete(id: number): Promise<boolean> {
    const response = await this.httpClient.delete<boolean>(`${this.baseURL}/${id}`)
    return response.data
  }

  async update(id: number, data: Product): Promise<Product> {
    const response = await this.httpClient.put<Product>(`${this.baseURL}/${id}`, data)
    return new ProductModel(response.data)
  }
}
