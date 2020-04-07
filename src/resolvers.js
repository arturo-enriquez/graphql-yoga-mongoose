import User from './models/User'

export const resolvers = {
  Query: {
    async getUser(_, { id }) {
      return await User.findById(id)
    },
    async getUsers() {
      return await User.find()
    }
  },

  Mutation: {
    async createUser(_, args) {
      const { nickname, fullname, phone, city } = args;

      const user = new User({
        nickname,
        fullname,
        phone,
        city
      });

      return await user.save();
    }
  }
}