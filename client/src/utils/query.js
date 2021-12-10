import { gql } from '@apollo/client';

export const GET_ME = gql`
  query me {
    me {
      _id
      firstName
      lastName
      username
      tierlist [
        interests
      ]
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
`
