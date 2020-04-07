import User from './models/User'

export const resolvers = {
  Query: {
    async getUsers() {
      return await User.find()
    }
  }
}