const { AuthenticationError } = require('apollo-server-express');
<<<<<<< HEAD
=======
// const { Profile } = require('../models');
>>>>>>> origin
const { User } = require('../models');
const { signToken } = require('../utils/auth');

const resolvers = {
<<<<<<< HEAD
  Query: {
    users: async () => {
      return User.find();
    },

    user: async (parent, { userId }) => {
      return User.findOne({ _id: userId });
    },
    // By adding context to our query, we can retrieve the logged in user without specifically searching for them
    me: async (parent, args, context) => {
      if (context.user) {
        return User.findOne({ _id: context.user._id });
      }
      throw new AuthenticationError('You need to be logged in!');
    },
  },

  Mutation: {
    addUser: async (parent, { firstName, lastName, username, email, password }) => {
      const user = await User.create({ firstName, lastName, username, email, password });
=======
  // Query: {
  //   profiles: async () => {
  //     return Profile.find();
  //   },

  //   profile: async (parent, { profileId }) => {
  //     return Profile.findOne({ _id: profileId });
  //   },
  //   // By adding context to our query, we can retrieve the logged in user without specifically searching for them
  //   me: async (parent, args, context) => {
  //     if (context.user) {
  //       return Profile.findOne({ _id: context.user._id });
  //     }
  //     throw new AuthenticationError('You need to be logged in!');
  //   },
  // },

  Mutation: {
    addUser: async (parent, { username, email, password }) => {
      const user = await User.create({ username, email, password });
>>>>>>> origin
      const token = signToken(user);

      return { token, user };
    },
    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email });

      if (!user) {
<<<<<<< HEAD
=======
        //We need to change these messages
>>>>>>> origin
        throw new AuthenticationError('No profile with this email found!');
      }

      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        //Change here as well
        throw new AuthenticationError('Incorrect password!');
      }

      const token = signToken(user);
      return { token, user };
<<<<<<< HEAD
    },

    // Add a third argument to the resolver to access data in our `context`
    addTierlist: async (parent, { rank, interests }, context) => {
      // If context has a `user` property, that means the user executing this mutation has a valid JWT and is logged in  
      if (context.user) {
        return User.findOneAndUpdate(
          { _id: context.user._id },
          {
            $set: { tierlist: { rank: rank, interests: interests } }
          },
          {
            new: true,
            runValidators: true,
          }
        );
        }
        // If user attempts to execute this mutation and isn't logged in, throw an error
        throw new AuthenticationError('You need to be logged in!');
    },
    // Set up mutation so a logged in user can only remove their profile and no one else's
    removeUser: async (parent, args, context) => {
      if (context.user) {
        return User.findOneAndDelete({ _id: context.user._id });
      }
      throw new AuthenticationError('You need to be logged in!');
    },
    // Make it so a logged in user can only remove a tier list from their own profile
    removeTierlist: async (parent, args, context) => {
      if (context.user) {
        return User.findOneAndUpdate(
          { _id: context.user._id },
          { tierlist: [] },
          { new: true }
        );
      }
      throw new AuthenticationError('You need to be logged in!');
=======
>>>>>>> origin
    },
    // Allow a user to update their profile information, without changing tier list.
    updateUser: async (parent, {firstName, lastName, username, email, password}, context) => {
      if (context.user){
        return User.findOneAndUpdate(
          {_id: context.user._id},
          {firstName: firstName,
          lastName: lastName,
          username: username,
          email: email,
          password: password},
          {new: true}
        )
      }
      throw new AuthenticationError('You need to be logged in!');
    }
  },
};

module.exports = resolvers;
