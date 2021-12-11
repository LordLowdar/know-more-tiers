import { gql } from '@apollo/client';

export const GET_ME = gql`
  query me {
    me {
      _id
      username
      tierlist {
        interests {
          id
          tier
          rank
          content
          image
        }
      }
    }
  }
`;

export const GET_INTERESTS = gql`
  query interests {
    interests {
      id
      tier
      rank
      content
      image
    }
  }
`;

export const QUERY_USER = gql`
  query user($username: String!) {
    user(username: $username) {
      _id
      username
      email
    }
  }
`;
