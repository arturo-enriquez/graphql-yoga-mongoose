export const typeDefs = `
  type Query {
    getUsers: [User]!
  }

  type Mutation {
    createUser(
      nickname: String!, 
      fullname: String!,
      phone: String,
      city: String
    ): User!
  }

  type User {
    _id: ID!
    nickname: String!
    fullname: String!
    phone: String
    city: String
  }
`