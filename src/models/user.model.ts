import { BaseModel } from '@/models/base.model'
import type { User } from '@/types'

export class UserModel extends BaseModel implements User {
  id: number
  name: string
  email: string
  password: string
  role: string
  avatar: string

  constructor(data: User) {
    super(data)
    this.init(data)
  }
}
