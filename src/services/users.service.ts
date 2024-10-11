import type { AxiosInstance } from 'axios'
import type { User } from '@/types'
import type { Createable, Editable, Readable } from '@/services/types'
import { UserModel } from '@/models/user.model'

export class UsersService implements Readable<User>, Createable<User>, Editable<User> {

  baseURL: string = '/users'

  constructor(public httpClient: AxiosInstance) {
  }

  /**
   * Get users
   * @param params
   */
  async get(params: any): Promise<User[]> {
    const response = await this.httpClient.get<User[]>(this.baseURL, { params })
    return response.data.map((category) => new UserModel(category))
  }

  /**
   * Get user by id
   * @param id
   */
  async getById(id: number): Promise<User> {
    const response = await this.httpClient.get<User>(this.baseURL, { params: { id } })
    return new UserModel(response.data)
  }

  async create(data: User): Promise<User> {
    const response = await this.httpClient.post<User>(this.baseURL, data)
    return new UserModel(response.data)
  }

  async update(id: number, data: User): Promise<User> {
    const response = await this.httpClient.put<User>(`${this.baseURL}/${id}`, data)
    return new UserModel(response.data)
  }
}
