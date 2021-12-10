const { AuthenticationError } = require('apollo-server-express');
const { User, Interest } = require('../models');
const { signToken } = require('../utils/auth');

const resolvers = {
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
    // Get Pool of interest from DB
    interests: async () => {
      return await Interest.find();
    }
  },

  Mutation: {
    addUser: async (parent, { username, email, password }) => {
      const user = await User.create({ username, email, password });
      const token = signToken(user);

      return { token, user };
    },
    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email });

      if (!user) {
        //We need to change these messages
        throw new AuthenticationError('No profile with this email found!');
      }

      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        //Change here as well
        throw new AuthenticationError('Incorrect password!');
      }

      const token = signToken(user);
      return { token, user };
    },

    // Add a third argument to the resolver to access data in our `context`
    addUserTierlist: async (parent, { input }, context) => {
      // If context has a `user` property, that means the user executing this mutation has a valid JWT and is logged in  
      if (context.user) {
        return User.findOneAndUpdate(
          { _id: context.user._id },
          {
            $addToSet: { tierlist: input }
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
    },
    // Add Interest to User Tierlist
    addUserInterest: async (parent, { input }, context) => {
      if (context.user) {
        const updatedUser = await User.findOneAndUpdate(
          { _id: context.user._id },
          { $addToSet: { interests: input } },
          { new: true }
        )

        if (!updatedUser) {
          throw AuthenticationError('You need to be logged in.');
        }

        return updatedUser;
      }
    },
    // Add Interest to Interest pool
    addInterestToPool: async (parent, { interests }, context) => {
      if (context.user) {
        await Interest.create(
          interests
        )

        return await Interest.find({})
      }
    }
  },
};

module.exports = resolvers;
