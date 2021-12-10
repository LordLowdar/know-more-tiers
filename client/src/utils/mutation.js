import { gql } from '@apollo/client';

export const REGISTER = gql`
  mutation register($username: String!, $email: String!, $password: String!) {
    addUser(username: $username, email: $email, password: $password) {
      token
      user {
        username
      }
    }
  }
`;

export const LOGIN = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        username
      }
    }
  }
`;

export const ADD_INTEREST_TO_TIERLIST = gql`
  mutation addUserInterest($input: InterestInput!) {
  addInterest(input: $input) {
    id
    tier
    rank
    content
    image
  }
}
`;

export const ADD_INTEREST_TO_POOL = gql`
  mutation addInterestToPool ($input: InterestInput!) {
  addInterestToPool(interests: $input) {
		id
    tier
    rank
    content
    image
  }
}`
